# AGENTS.md - Portfolio Website

## Project Overview

This is Logan Gunn's portfolio website - a dual-format project maintaining both:
1. **React SPA** (primary): Full React application with dynamic components
2. **Static HTML/CSS/JS**: Standalone version for simpler hosting (recent addition)

The React app is the source of truth. The static version is a conversion for deployment flexibility.

## Project Type & Stack

- **Framework**: React 18.2.0 with Create React App (react-scripts 5.0.1)
- **UI Libraries**: 
  - Bootstrap 5.2.3 + react-bootstrap 2.7.4
  - Ant Design 5.4.2 (used for Progress bars in Skills section)
  - FontAwesome 6.4.0 (for icons throughout)
- **Routing**: React Router DOM 6.10.0
- **Additional**: 
  - react-vertical-timeline-component (experience timeline)
  - react-preloading-screen (loading states)
  - react-spinners (loading animations)
- **Backend**: Express.js (only for serving production build on Heroku)

## Essential Commands

### Development
```bash
npm start          # Start development server on port 3000
npm test           # Run tests (Jest via react-scripts)
npm run build      # Build production bundle to /build directory
```

### Docker
```bash
# Multi-stage build: Node build + Nginx serve
docker build -t portfolio-website .
docker-compose up  # Runs on port 3000

# The Dockerfile builds with npm, then serves with nginx
```

### Static Version (Testing)
```bash
# For testing the static HTML/CSS/JS version
python -m http.server 8000
# or
npx serve .
```

### Deployment
- **Heroku**: Uses `Procfile` → `node scripts/heroku-start.js` → Express serves `/build`
- **Docker**: GitHub Actions workflow (`.github/workflows/docker-image.yml`) auto-builds and pushes to Docker Hub (`logunn78/react-portfolio-site`) on push to master
- **Static**: Files (index.html, styles.css, script.js, logo192.png) can be deployed to GitHub Pages, Netlify, Vercel

## Code Organization

### Directory Structure
```
/
├── src/
│   ├── App.js                    # Root component with Preloader
│   ├── Layout.jsx                # Layout wrapper
│   ├── Content.jsx               # Content router
│   ├── App.css                   # CSS variables (colors)
│   ├── Assets/
│   │   └── Constants.js          # All icons, projects data, social URLs
│   └── Components/
│       ├── LoadingComponent/     # SyncLoader spinner
│       ├── FooterSection/        # Footer with social links
│       └── FrontPage/
│           ├── FrontPage.jsx     # Main page layout (all sections)
│           ├── HeaderSection/    # Hero with header image
│           ├── AboutSection/     # Bio + profile image
│           ├── DropDownSection/  # Collapsible container
│           ├── TimeLineSection/  # Project timeline (vertical-timeline)
│           ├── SkillsSection/    # Skills with progress bars (Ant Design)
│           └── ProjectSection/   # Project cards grid
├── public/                       # CRA public assets
├── scripts/heroku-start.js       # Express server for Heroku
├── index.html                    # Static version HTML
├── styles.css                    # Static version CSS
├── script.js                     # Static version JS
└── Dockerfile, nginx.conf        # Docker deployment config
```

### Component Hierarchy
```
App
└── Layout
    └── Content
        └── FrontPage
            ├── HeaderImage
            ├── AboutSection
            ├── DropDownSection (collapsible)
            │   ├── ProjectTimeLine
            │   └── Skills
            ├── ProjectSection
            └── FooterSection
```

## Important Files & Their Purpose

### Source Files
- **`src/Assets/Constants.js`**: Single source of truth for:
  - All FontAwesome icon definitions (with/without text)
  - `projects` array: all project data (title, description, URL, image, skills)
  - Social media URLs (`GIT_HUB_URL`, `LINKED_IN_URL`)
  - **ALWAYS update here when adding/editing projects or skills**

- **`src/App.css`**: CSS custom properties (variables) for theming:
  ```css
  --custom-orange: #f89820
  --custom-blue: #5382a1
  --custom-primary: #282F44
  --custom-secondary: #CCB7AE
  --custom-background: #5D6765
  ```

### Deployment Files
- **`Dockerfile`**: Two-stage build (Node builder → Nginx production)
- **`nginx.conf`**: Simple SPA config with `try_files $uri /index.html`
- **`Procfile`**: Heroku entrypoint → Express server
- **`scripts/heroku-start.js`**: Express serving `/build` on `process.env.PORT || 3000`
- **`.github/workflows/docker-image.yml`**: Auto-builds Docker on push/PR to master

### Static Version
- **`STATIC_DEPLOYMENT.md`**: Instructions for deploying static version
- **`index.html`**, **`styles.css`**, **`script.js`**: Converted from React (manual sync required)

## Key Patterns & Conventions

### Component Structure
- **Files**: Each component has own directory with `.jsx` and `.css` files
- **Imports**: React Bootstrap components imported per-component (`Container`, `Row`, `Col`, `Image`)
- **Styling**: Mix of Bootstrap classes + custom CSS in component-specific files

### Data Management
- **No state management library**: All data is static in `Constants.js`
- **No API calls**: Portfolio content is hardcoded (not fetched)
- **Dynamic age calculation**: `AboutSection.jsx` calculates age from birthdate `1998-11-23`

### Icon Pattern
All icons are pre-defined in `Constants.js` as JSX:
```javascript
export const reactIcon = (<div className="skill-icon"><FontAwesomeIcon icon={faReact}/></div>);
export const reactIconText = (<div className="skill-icon"><FontAwesomeIcon icon={faReact}/> React</div>);
```
- Use `*Icon` for just the icon
- Use `*IconText` for icon + label
- Used in skills progress bars and project cards

### Project Data Structure
```javascript
{
    title: "Project Name",
    description: (<div><p>Description...</p></div>),  // JSX format
    url: "https://...",
    image: "https://res.cloudinary.com/...",           // Cloudinary URLs
    skills: [reactIcon, htmlIcon, cssIcon]             // Array of icon components
}
```

### Image Optimization
Recent commits focus on performance:
- All images served from Cloudinary with `q_auto:eco` or `q_auto:good` (auto-quality)
- `f_auto` (auto-format: WebP when supported)
- Explicit width params: `w_500` for project images, `h_2000` for header
- Loading strategy: `loading="eager"` for hero, default lazy for others

### Component Naming
- PascalCase for component files: `FrontPage.jsx`, `AboutSection.jsx`
- CSS classes use kebab-case: `.about-section`, `.skill-icon`
- Directories match component names

## Testing Approach

**Minimal testing setup** - CRA default with react-scripts:
- Test library: Jest + React Testing Library
- No existing tests found in codebase
- Run with `npm test`
- ESLint config: extends `react-app` and `react-app/jest`

## Build & Deployment

### Build Process
1. `npm run build` creates optimized production build in `/build`
2. Dockerfile uses this build → copies to Nginx `/usr/share/nginx/html`
3. GitHub Actions triggers on push to master → builds Docker image → pushes to Docker Hub

### Deployment Targets
1. **Heroku**: Express serves build folder (Procfile)
2. **Docker**: Nginx serves static build (multi-stage Dockerfile)
3. **Static hosting**: Use static HTML/CSS/JS files directly

### Environment
- **Production**: `NODE_ENV=production` set in Dockerfile and docker-compose
- **No env vars needed**: All content is hardcoded (no API keys, no backend)

## Important Gotchas & Non-Obvious Patterns

### Dual Codebase Maintenance
⚠️ **React and static versions must be manually synced**
- React (`src/`) is the source of truth
- Static files (`index.html`, `styles.css`, `script.js`) are separate conversions
- Changes to React don't auto-update static version
- `STATIC_DEPLOYMENT.md` documents what features were "preserved" in static version

### Age Calculation
In `AboutSection.jsx`:
```javascript
const ageDifMs = Date.now() - new Date('1998-11-23').getTime();
const ageDate = new Date(ageDifMs);
const yearsAlive = Math.abs(ageDate.getUTCFullYear() - 1970);
```
- Dynamically calculates age from birthdate
- Uses epoch year (1970) as base for calculation

### Preloader Pattern
`App.js` wraps entire app in `react-preloading-screen`:
```jsx
<Preloader>
    <Placeholder>
        <LoadingComponent />  {/* Shows while loading */}
    </Placeholder>
</Preloader>
```
- Loading component shows `SyncLoader` spinner
- No explicit loading state management needed

### Project Image Constants
All project images use Cloudinary CDN with specific params:
- `q_auto:eco` or `q_auto:good`: quality optimization
- `f_auto`: format optimization (WebP when supported)
- `w_500`: width constraint for consistent sizing
- Pattern: `https://res.cloudinary.com/ddtorekqd/image/upload/q_auto:eco/f_auto/w_500/v{version}/{image_id}.{ext}`

### Bootstrap Grid System
Heavy use of Bootstrap's responsive grid:
```jsx
<Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 1}}>
```
- `xs`, `md` breakpoints with span + offset
- Different layouts for mobile vs desktop

### No Router Routes
Despite including `react-router-dom`, **no actual routing is configured**:
- Only single page (`FrontPage`)
- `Content.jsx` directly renders `<FrontPage />`
- Navigation uses anchor links (`#about`, `#skills`, etc.) in static version
- React version appears to be designed for future multi-page expansion

### CSS Variables Pattern
All colors defined as CSS custom properties in `App.css`:
```css
:root {
  --custom-orange: #f89820;
  --custom-primary: #282F44;
  /* etc */
}
```
Referenced throughout component CSS as `var(--custom-orange)`

### Heroku Express Server
`scripts/heroku-start.js` is a minimal Express server:
- Serves static files from `/build`
- Catch-all route returns `index.html` (SPA support)
- Only used for Heroku deployment
- Not used in Docker (Nginx handles it)

### Git Commit Style
Recent commits use emoji prefixes:
- 💨 Performance improvements
- 🔗 URL/link changes
- 🏃 Speed optimizations
- 🐳 Docker changes

## Typical Development Workflows

### Adding a New Project
1. Add project object to `projects` array in `src/Assets/Constants.js`
2. Include title, description (JSX), url, Cloudinary image URL, skills array
3. No other changes needed - `ProjectSection` maps over array
4. Consider updating static `script.js` if maintaining static version

### Changing Skills
1. Update skill percentages in `src/Components/FrontPage/SkillsSection/Skills.jsx`
2. Add new skill icons to `src/Assets/Constants.js` if needed
3. Import icon constants in `Skills.jsx`
4. Skills are grouped: "Languages" and "Technologies"

### Modifying Styles
1. CSS variables: change in `src/App.css` (affects all components)
2. Component-specific: edit the component's `.css` file
3. Bootstrap overrides: check for `.primary`, `.secondary` classes in component CSS

### Updating Content
- **About text**: `src/Components/FrontPage/AboutSection/AboutSection.jsx`
- **Hero section**: Currently in static `index.html` (not in React version!)
- **Timeline/Experience**: `src/Components/FrontPage/TimeLineSection/ProjectTimeLine.jsx`
- **Social links**: `GIT_HUB_URL`, `LINKED_IN_URL` in `Constants.js`

### Testing Changes
1. `npm start` for dev server
2. Check responsive design (Bootstrap breakpoints: xs, md)
3. Test loading animation (may need throttling to see)
4. `npm run build` to verify production build works
5. Optional: Test with `npx serve build` to verify SPA routing

### Docker Development
```bash
docker-compose up        # Run full stack
docker-compose up -d     # Run detached
docker-compose logs -f   # View logs
```

## Performance Considerations

### Image Optimization Strategy
Based on recent commits (35ee257, f395eaa):
1. Use Cloudinary auto-optimization: `q_auto`, `f_auto`
2. Set explicit dimensions: `w_500` for cards, `h_2000` for hero
3. Recent focus: "30% load time reduction", "Speed up images without sacrificing quality"

### Loading Performance
- Hero image: `loading="eager"` (above fold)
- Other images: default lazy loading
- Preloader shows during initial React hydration

### Bundle Size Considerations
- Multiple heavy dependencies: Bootstrap, Ant Design, FontAwesome
- No code splitting configured (CRA default)
- Consider lazy loading routes if adding more pages

## External Dependencies & APIs

### Cloudinary
- **Account**: `ddtorekqd`
- All images hosted on Cloudinary CDN
- No API key needed (public URLs)
- Transformations in URL: quality, format, dimensions

### FontAwesome
- Using Free icons (brands, solid, regular)
- Version 6.4.0
- Icons imported from `@fortawesome/free-*-svg-icons`

### No Backend APIs
- Portfolio is entirely static data
- No authentication, no database
- Express server only serves static files

## Known Issues & Limitations

1. **No TypeScript**: Pure JavaScript project
2. **No Tests**: Testing infrastructure exists but no tests written
3. **Dual Maintenance**: React and static versions must be synced manually
4. **No Routing**: Router installed but not used
5. **Large Dependencies**: Bootstrap + Ant Design both included (some overlap)
6. **No Error Boundaries**: No error handling for component failures
7. **Hardcoded Content**: All portfolio data in `Constants.js` (not CMS)
8. **No Analytics**: No tracking configured

## Git Workflow

- **Main branch**: `master`
- **CI/CD**: GitHub Actions auto-builds Docker on push to master
- **Deployment**: Push to master triggers Docker Hub push
- Recent activity: Focus on performance (image optimization)
- Modified but uncommitted: `yarn.lock` (check before commits)
- Untracked: Static HTML files (index.html, styles.css, script.js, STATIC_DEPLOYMENT.md)

## When Modifying This Project

### Before Making Changes
1. Check if change affects both React AND static versions
2. Verify Bootstrap/Ant Design doesn't already provide the feature
3. Consider impact on load time (recent performance focus)
4. Check if icons exist in FontAwesome before adding new assets

### After Making Changes
1. Test responsive design (mobile + desktop)
2. Run `npm run build` to verify production build
3. Check image URLs are valid (Cloudinary)
4. Update static version if maintaining parity
5. Consider commit message with emoji prefix (project convention)

### Deployment Checklist
1. All changes committed to master
2. `npm run build` succeeds locally
3. GitHub Actions workflow completes (check Actions tab)
4. Docker Hub image updated (check timestamp)
5. Heroku deployment reflects changes (if using)

## Useful References

- **Live Site**: https://logangunn.com
- **Old Portfolio**: https://old.logangunn.com
- **GitHub**: https://github.com/lgunn4/
- **LinkedIn**: https://www.linkedin.com/in/logan-gunn/
- **Docker Hub**: logunn78/react-portfolio-site

## Quick Troubleshooting

**Build fails**: 
- Check `node_modules` is installed (`npm install`)
- Verify Node version compatible with `node:14-alpine` (Docker)

**Images not loading**: 
- Verify Cloudinary URLs are correct
- Check image IDs haven't changed
- Ensure network can reach `res.cloudinary.com`

**Styling broken**:
- Ensure Bootstrap CSS imported in `App.js`
- Check component-specific CSS files exist
- Verify CSS variables defined in `App.css`

**Loading screen stuck**:
- Check browser console for JS errors
- Verify all Components render without throwing
- Check `react-preloading-screen` isn't misconfigured

**Docker build fails**:
- Check `package.json` and `yarn.lock` are in sync
- Verify Dockerfile `FROM node:14-alpine` is accessible
- Check `nginx.conf` syntax if nginx stage fails
