pack_glb.mjs: quantize + meshopt-compress (no key resampling: clips are cut by frame numbers) the exported model.
Run after web_export.py:  PATH=~/.nvm/versions/node/v20.20.0/bin:$PATH node tools/pack_glb.mjs ori.glb ori.packed.glb
(build_pages.mjs copies ori.packed.glb to pages/assets/ori.glb when it exists)
