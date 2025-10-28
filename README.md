# OpenHouse AI - Marketing Site

A production-grade marketing website featuring cinematic 3D visuals, built with Next.js 14, React Three Fiber, and modern web technologies.

## Features

- **Cinematic 3D Hero**: Full-viewport React Three Fiber scene with custom GLSL shaders
  - Aurora background with flowing noise gradients
  - Breathing AI orb with fresnel rim lighting
  - Dynamic lighting and bloom effects
  - Reduced-motion fallback support

- **Smooth Scroll Storytelling**: Animated sections with framer-motion
  - Problem/Solution showcase
  - How It Works walkthrough
  - Feature grid with 8 capabilities
  - Pricing table with monthly/annual toggle
  - FAQ accordion

- **Interactive 3D Floorplan Viewer** (`/demo`)
  - OrbitControls for navigation
  - Wireframe toggle
  - Section cut (clip planes) toggle
  - PDF download functionality
  - Graceful fallback for missing models

- **Performance Optimized**
  - DPR capped at 1.5x for efficiency
  - Dynamic imports for 3D components (SSR disabled)
  - Lazy loading throughout
  - Target LCP < 2.5s

- **Accessibility First**
  - Keyboard navigation support
  - ARIA labels and semantic HTML
  - Reduced-motion preference respected
  - Noscript fallbacks

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme tokens
- **3D**: React Three Fiber, drei, postprocessing
- **Motion**: Framer Motion, Lenis smooth scroll
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Fonts**: Manrope (display), Inter (body)
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd openhouse-ai
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
cp .env.example .env
\`\`\`

Edit `.env` with your values:
- `SITE_URL`: Your production domain
- `NETLIFY_SITE_ID`: Netlify site ID (for deployment)
- `NETLIFY_AUTH_TOKEN`: Netlify auth token (for deployment)
- `ANALYTICS_ID`: Google Analytics ID (optional)

### Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:5000](http://localhost:5000) in your browser.

### Build

Create a production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## 3D Model Setup

### Adding Your Models

1. Export your 3D models as glTF Binary (.glb) files
2. Place them in `/public/models/`:
   - `site.glb` - Overall development/site model
   - `floorplan.glb` - Individual unit floorplan
   - `unit.glb` - Unit interior (optional)

### Export Guidelines

#### From Blender

1. Clean up geometry (remove duplicates, fix normals)
2. Keep polygon count under 100K triangles
3. Use PBR materials (Principled BSDF)
4. Bake textures to 1K-2K resolution
5. Export:
   - File > Export > glTF 2.0 (.glb)
   - Format: glTF Binary (.glb)
   - Enable Draco compression (level 6)
   - Include UVs, Normals, Tangents

#### Optimization

- **Polygon Budget**: 10K-50K triangles per model
- **Texture Sizes**: 1024×1024 or 2048×2048
- **Materials**: Limit to 5-10 per model
- **Compression**: Use Draco for geometry, KTX2 for textures

See `/public/models/README.md` for detailed instructions.

## Project Structure

\`\`\`
.
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/
│   ├── three/             # 3D components
│   │   ├── Hero3D.tsx    # Main 3D hero scene
│   │   ├── AuroraBackground.tsx
│   │   ├── AssistantOrb.tsx
│   │   ├── GroundGrid.tsx
│   │   └── FloorplanViewer.tsx
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── feature-grid.tsx
│   │   ├── pricing-section.tsx
│   │   └── ...
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Footer
├── lib/
│   ├── shaders/           # GLSL shaders
│   │   ├── aurora.ts     # Aurora background shader
│   │   └── orb.ts        # AI orb shader
│   └── utils.ts           # Utility functions
├── i18n/
│   └── en.json            # Content dictionary
├── public/
│   ├── models/            # 3D model files
│   ├── floorplans/        # PDF downloads
│   ├── logo.svg
│   ├── og.jpg            # OpenGraph image
│   ├── hero-poster.jpg   # Fallback poster
│   └── hero.mp4          # Fallback video
└── ...
\`\`\`

## Deployment

### Netlify

The site is configured for Netlify deployment with automatic CI/CD.

#### Manual Deploy

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Deploy to Netlify:
   - Connect your repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Set environment variables in Netlify dashboard

#### GitHub Actions

Automated deployment is configured in `.github/workflows/deploy.yml`.

Required secrets:
- `NETLIFY_SITE_ID`
- `NETLIFY_AUTH_TOKEN`

### Custom Domain

To use `openhouse.ai`:

1. In Netlify dashboard, go to Domain Settings
2. Add custom domain: `openhouse.ai`
3. Configure DNS:
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add ALIAS/ANAME record: `@` → `your-site.netlify.app`
4. Enable HTTPS (automatic via Let's Encrypt)

## Theme Customization

Theme tokens are defined in `tailwind.config.ts`:

- **Colors**:
  - `carbon`: #0A0A0A (background)
  - `porcelain`: #F7F7F5 (text)
  - `gold`: #C8A75E (accent)
  - `slate`: #151515 (secondary bg)
  - `hint`: #9EA3AE (muted text)

- **Typography**:
  - Display: 112/96/72px
  - Heading: 56/40/28px
  - Body: 18/16px

- **Border Radius**: 12px

## Performance Tips

1. **Images**: Always use next/image with proper sizing
2. **3D Models**: Keep under 100K triangles, use Draco compression
3. **Textures**: 1K-2K max, use KTX2 with Basis compression
4. **Code Splitting**: Dynamic imports for heavy components
5. **DPR**: Capped at 1.5x for balance of quality and performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - © 2025 OpenHouse AI

## Credits

Made by EvolvAi
