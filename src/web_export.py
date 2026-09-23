"""Build the web version of Ori: bake body shader to textures, decimate, simple materials, export GLB with all animation."""
import bpy, os, time
from mathutils import Vector
ROOT=os.path.dirname(bpy.data.filepath); OUT=os.path.join(ROOT,'site'); t0=time.time()
sc=bpy.context.scene; sc.frame_set(1)
def log(*a): print('[web]',round(time.time()-t0),'s',*a, flush=True)
an=bpy.data.objects['DOG_ANIM']; rig=bpy.data.objects['DOG_RIG']
# ---------- 1. bake OPAL -> textures on the full-res mesh ----------
sc.render.engine='CYCLES'; sc.cycles.samples=8; sc.cycles.use_denoising=False; sc.cycles.device='CPU'
sc.render.bake.use_pass_direct=False; sc.render.bake.use_pass_indirect=False; sc.render.bake.use_pass_color=True
sc.render.bake.margin=8
opal=bpy.data.materials['OPAL']; nt=opal.node_tree
def bake(img_name,size,btype):
    img=bpy.data.images.new(img_name,size,size); img.colorspace_settings.name='sRGB'
    node=nt.nodes.new('ShaderNodeTexImage'); node.image=img; nt.nodes.active=node
    for o in bpy.context.view_layer.objects: o.select_set(False)
    an.select_set(True); bpy.context.view_layer.objects.active=an; an.hide_render=False; an.hide_set(False)
    bpy.ops.object.bake(type=btype,use_clear=True)
    p=os.path.join(OUT,img_name+'.png'); img.filepath_raw=p; img.file_format='PNG'; img.save(); nt.nodes.remove(node); log('baked',img_name)
    return img
col=bake('body_color',2048,'DIFFUSE'); emi=bake('body_emit',2048,'EMIT')
# ---------- 2. web copy of the body: mouth vertex colors, decimate ----------
web=an.copy(); web.data=an.data.copy(); web.name='ORI_BODY'; sc.collection.objects.link(web)
me=web.data
ca=me.color_attributes.new('Col','BYTE_COLOR','POINT'); dep=me.attributes['mouth_depth'].data
def ramp(d):
    stops=[(0.0,(0.62,0.2,0.3)),(0.3,(0.34,0.09,0.16)),(0.75,(0.05,0.01,0.03)),(1.0,(0.05,0.01,0.03))]
    for (a,ca_),(b,cb) in zip(stops,stops[1:]):
        if d<=b:
            t=(d-a)/max(b-a,1e-6); return [ca_[i]+(cb[i]-ca_[i])*t for i in range(3)]+[1.0]
    return list(stops[-1][1])+[1.0]
for i,v in enumerate(me.vertices): ca.data[i].color=ramp(dep[i].value)
web.modifiers.clear()
dm=web.modifiers.new('DEC','DECIMATE'); dm.ratio=0.09; dm.use_collapse_triangulate=True
bpy.context.view_layer.objects.active=web
for o in bpy.context.view_layer.objects: o.select_set(False)
web.select_set(True); bpy.ops.object.modifier_apply(modifier='DEC'); log('decimated ->',len(web.data.polygons),'faces')
am=web.modifiers.new('ARM','ARMATURE'); am.object=rig; web.parent=rig; web.matrix_parent_inverse=an.matrix_parent_inverse.copy()
# ---------- 3. simple materials ----------
def simple(name,color=(1,1,1,1),rough=0.4,emis=None,alpha=1.0,tex=None,vcol=False,emit_strength=1.0,metal=0.0):
    old_m=bpy.data.materials.get(name)
    if old_m: bpy.data.materials.remove(old_m)          # keep exported names exact (no .001 suffixes)
    m=bpy.data.materials.new(name); m.use_nodes=True; nt=m.node_tree
    for n in list(nt.nodes): nt.nodes.remove(n)
    out=nt.nodes.new('ShaderNodeOutputMaterial'); p=nt.nodes.new('ShaderNodeBsdfPrincipled'); nt.links.new(p.outputs[0],out.inputs[0])
    p.inputs['Base Color'].default_value=color; p.inputs['Roughness'].default_value=rough; p.inputs['Metallic'].default_value=metal
    if tex is not None:
        ti=nt.nodes.new('ShaderNodeTexImage'); ti.image=tex; nt.links.new(ti.outputs['Color'],p.inputs['Base Color'])
    if vcol:
        vc=nt.nodes.new('ShaderNodeVertexColor'); vc.layer_name='Col'; nt.links.new(vc.outputs['Color'],p.inputs['Base Color'])
    if emis is not None:
        if isinstance(emis,bpy.types.Image):
            te=nt.nodes.new('ShaderNodeTexImage'); te.image=emis; nt.links.new(te.outputs['Color'],p.inputs['Emission Color'])
        else: p.inputs['Emission Color'].default_value=emis
        p.inputs['Emission Strength'].default_value=emit_strength
    if alpha<1.0:
        p.inputs['Alpha'].default_value=alpha; m.surface_render_method='BLENDED'
    return m
m_body=simple('WEB_body',rough=0.28,tex=col,emis=emi,emit_strength=1.6)
m_mouth=simple('WEB_mouth',rough=0.5,vcol=True)
mi=[i for i,s in enumerate(web.material_slots) if s.material and s.material.name=='MOUTH_mat'][0]
for i,s in enumerate(web.material_slots): s.material=m_mouth if i==mi else m_body
iris_img=bpy.data.images.get('iris_bake'); scl_img=bpy.data.images.get('sclera_bake')
m_iris=simple('WEB_iris',rough=0.35,tex=iris_img,emis=iris_img,emit_strength=0.5)
m_scl=simple('WEB_sclera',rough=0.4,tex=scl_img,emis=scl_img,emit_strength=0.9)
m_pupil=simple('WEB_pupil',color=(0.0044,0.006,0.0144,1),rough=0.3)
m_lens=simple('WEB_lens',color=(1,1,1,1),rough=0.05,alpha=0.12)
m_lash=simple('WEB_lash',color=(0.013,0.0185,0.0369,1),rough=0.8)
m_glint=simple('WEB_glint',color=(1,1,1,1),emis=(1,1,1,1),emit_strength=3.0)
m_lid=simple('WEB_lid',color=(0.90,0.90,0.94,1),rough=0.36)
m_nose=simple('WEB_nose',color=(0.0296,0.0437,0.0953,1),rough=0.28)
m_teeth=simple('WEB_teeth',color=(0.95,0.95,0.97,1),rough=0.25)
m_tongue=simple('WEB_tongue',color=(0.85,0.32,0.45,1),rough=0.35)
parts={'IRIS_L':m_iris,'IRIS_R':m_iris,'SCLERA_L':m_scl,'SCLERA_R':m_scl,'PUPIL_L':m_pupil,'PUPIL_R':m_pupil,'LENS_L':m_lens,'LENS_R':m_lens,
       'LASH_L':m_lash,'LASH_R':m_lash,'GLINT_L_big':m_glint,'GLINT_L_small':m_glint,'GLINT_R_big':m_glint,'GLINT_R_small':m_glint,
       'NOSE':m_nose,'TEETH_UP':m_teeth,'TEETH_LO':m_teeth,'TONGUE':m_tongue}
for n,m in parts.items():
    o=bpy.data.objects[n]
    for s in o.material_slots: s.material=m
    if not o.material_slots: o.data.materials.append(m)
# ---------- 3b. ink curves (brows, mouth line, philtrum) -> meshes ----------
m_ink=simple('WEB_ink',color=(0.013,0.0185,0.0369,1),rough=0.8)
ink_objs=[]
for n in ('BROW_L','BROW_R','MOUTH_line','PHILTRUM_line')+tuple(f'LASH_{sd}_{k}' for sd in 'LR' for k in ('up0','up1','up2','up3','lo0','lo1')):
    src=bpy.data.objects[n]; c=src.copy(); c.data=src.data.copy(); c.name='INK_'+n; sc.collection.objects.link(c)
    for o in bpy.context.view_layer.objects: o.select_set(False)
    c.select_set(True); bpy.context.view_layer.objects.active=c; c.hide_set(False); c.hide_viewport=False
    bpy.ops.object.convert(target='MESH')
    dm=c.modifiers.new('DEC','DECIMATE'); dm.ratio=0.2; bpy.ops.object.modifier_apply(modifier='DEC')
    c.data.materials.clear(); c.data.materials.append(m_ink)
    for pgn in c.data.polygons: pgn.use_smooth=True
    ink_objs.append(c)
parts.update({o.name:m_ink for o in ink_objs})
for n in ('LID_L','LID_R'):
    o=bpy.data.objects[n]; o.material_slots[0].material=m_lid; o.material_slots[1].material=m_ink; parts[n]=m_lid
log('ink curves converted',[ (o.name,len(o.data.polygons)) for o in ink_objs])
# ---------- 4. export ----------
for o in bpy.context.view_layer.objects: o.select_set(False)
sel=[web,rig]+[bpy.data.objects[n] for n in parts]
for o in sel: o.hide_set(False); o.hide_viewport=False; o.select_set(True)
bpy.context.view_layer.objects.active=rig
out=os.path.join(OUT,'ori.glb')
bpy.ops.export_scene.gltf(filepath=out,export_format='GLB',use_selection=True,export_apply=True,export_animations=True,
    export_animation_mode='ACTIONS',export_frame_range=False,export_force_sampling=True,export_optimize_animation_size=True,
    export_image_format='JPEG',export_jpeg_quality=80,export_skins=True,export_morph=False,export_yup=True,export_texcoords=True,export_normals=True,
    export_colors=True if hasattr(bpy.types.ExportSceneGltf.bl_rna,'properties') and 'export_colors' in bpy.types.ExportSceneGltf.bl_rna.properties else False) if False else None
kw=dict(filepath=out,export_format='GLB',use_selection=True,export_apply=True,export_animations=True,export_animation_mode='ACTIONS',
        export_frame_range=False,export_force_sampling=True,export_optimize_animation_size=True,export_image_format='JPEG',export_jpeg_quality=80,
        export_skins=True,export_morph=False,export_yup=True,export_texcoords=True,export_normals=True)
props=bpy.ops.export_scene.gltf.get_rna_type().properties.keys()
if 'export_vertex_color' in props: kw['export_vertex_color']='ACTIVE'
bpy.ops.export_scene.gltf(**kw)
log('exported',out,os.path.getsize(out)//1024,'KB','faces',len(web.data.polygons))
