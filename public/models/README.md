# 3D Model Export Guide

This directory should contain your 3D models in glTF Binary (.glb) format.

## Expected Files

- `site.glb` - Overall site/development model
- `floorplan.glb` - Individual unit floorplan
- `unit.glb` - Unit interior model (optional)

## Export Guidelines

### From Blender

1. **Prepare your model:**
   - Clean up geometry (remove duplicate vertices, fix normals)
   - Apply all modifiers
   - Keep polygon count reasonable (< 100K tris per model)
   - Name objects descriptively

2. **Materials and Textures:**
   - Use PBR materials (Principled BSDF)
   - Bake textures to 1K or 2K resolution
   - Pack textures into the .blend file before export

3. **Export settings:**
   - File > Export > glTF 2.0 (.glb/.gltf)
   - Format: glTF Binary (.glb)
   - ✓ Remember Export Settings
   - ✓ Include > Selected Objects (or all)
   - ✓ Transform > +Y Up
   - ✓ Geometry > Apply Modifiers
   - ✓ Geometry > UVs
   - ✓ Geometry > Normals
   - ✓ Geometry > Tangents
   - ✓ Materials > Export
   - ✓ Compression > Draco
   - Draco > Compression Level: 6
   - Draco > Quantization: 14 (position), 12 (normal), 12 (texcoord)

### From Spline

1. Export as glTF
2. Choose Binary (.glb) format
3. Enable Draco compression if available
4. Download and place in this directory

### Optimization Tips

- **Polygon Budget:**
  - Site model: 20K-50K triangles
  - Floorplan: 10K-30K triangles
  - Keep it optimized for web viewing

- **Texture Sizes:**
  - Color maps: 1024x1024 or 2048x2048
  - Normal maps: 1024x1024
  - Use KTX2 format with Basis Universal compression for best performance

- **Materials:**
  - Limit to 5-10 materials per model
  - Use texture atlases when possible
  - Keep shader complexity low

## Testing

After adding your models:

1. Place .glb files in this directory
2. Navigate to `/demo` in your browser
3. The FloorplanViewer should load your models automatically
4. Use controls to inspect wireframe, section cuts, etc.

## Tools

- **Blender:** https://www.blender.org/ (Free, recommended)
- **Spline:** https://spline.design/ (Web-based, easy to use)
- **glTF Viewer:** https://gltf-viewer.donmccurdy.com/ (Test before deploying)
- **glTF Transform:** https://gltf-transform.donmccurdy.com/ (CLI optimization)
