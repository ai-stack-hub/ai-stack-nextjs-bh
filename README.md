# Dashboard Application

A modern, responsive dashboard built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Testing**: Jest + React Testing Library
- **Icons**: Custom SVG icon library

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Full keyboard navigation and screen reader support
- **Component Library**: Reusable UI components with TypeScript
- **Mock Data**: Complete API simulation with JSON data
- **Testing**: 100% code coverage target with Jest
- **Modern UI**: Clean, professional dashboard interface

## 🎨 Design

The application follows a pixel-perfect design matching the provided layout with:
- Fixed header with user profile
- Collapsible sidebar navigation
- Welcome banner
- Tickets management widget
- Services overview widget

## 🎨 Design Tools

### Stitch.withgoogle

**I used Stitch.withgoogle for creating the layout** of this dashboard application. Stitch.withgoogle is Google's AI-powered design-to-code tool that automatically converts visual designs into production-ready code while maintaining pixel-perfect fidelity.

#### Key Benefits
- **Design-to-Code Conversion**: Transforms design mockups into HTML, CSS, and JavaScript
- **Design Fidelity**: Ensures pixel-perfect implementation of design specifications
- **Design Token Generation**: Creates consistent color palettes and spacing systems
- **Rapid Prototyping**: Accelerates the design-to-development workflow

#### Design Files
Reference design files are located in `docs/input/stitch.withgoogle/`:
- `home-v3.html` - Generated HTML from Stitch
- `home-v3.png` - Design mockup
- `README.md` - Detailed design documentation

*For comprehensive information about the design process, see [docs/input/stitch.withgoogle/README.md](./docs/input/stitch.withgoogle/README.md)*

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── lib/                 # Reusable libraries
│   ├── components/      # UI components
│   ├── widgets/         # Dashboard widgets
│   ├── icons/           # SVG icon library
│   ├── constants/       # Configuration constants
│   └── utils/           # Utility functions
├── api/                 # Mock API data
└── docs/                # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ai-stack-nextjs-bh
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## 🌐 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

2. **Repository Configuration**:
   - Ensure your repository is public (or you have GitHub Pro for private repos)
   - The workflow will automatically deploy on pushes to the `main` branch

3. **Automatic Deployment**:
   - Push to the `main` branch triggers the deployment
   - The app will be available at: `https://<username>.github.io/ai-stack-nextjs-bh/`

#### Manual Deployment:

```bash
# Build the project
npm run build

# The static files will be generated in the `out` directory
# You can serve them locally to test:
npx serve out
```

#### Deployment Configuration:

- **Static Export**: Configured for static site generation
- **Base Path**: Automatically set for GitHub Pages subdirectory
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slashes**: Enabled for consistent routing

#### Troubleshooting:

**LightningCSS Binary Error**: If you encounter `Cannot find module '../lightningcss.linux-x64-gnu.node'` during build:

1. **Local Development**: Run `npm rebuild lightningcss` to rebuild binaries
2. **CI/CD**: The GitHub Actions workflow automatically handles this
3. **Alternative**: Use `npm ci --legacy-peer-deps` for installation

**Build Issues**: 
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

## 📚 Documentation

- [API Contracts](./docs/api-contracts.md) - JSON data structure documentation
- [Component Library](./docs/component-library.md) - Reusable components guide
- [AI Prompts](./docs/prompts-v2.md) - Development prompts and requirements

## 🎯 Key Features

### Layout Components
- **Header**: Fixed top navigation with menu and user profile
- **Sidebar**: Collapsible navigation with hover expansion
- **Banner**: Welcome message component
- **Layout**: Main wrapper component

### Widgets
- **Tickets Widget**: Support ticket management with search and filtering
- **Services Widget**: User services overview with expandable details

### UI Components
- **Button**: Multi-variant button component
- **StatusBadge**: Status indicator with color coding
- **PriorityBadge**: Priority level indicator
- **Icons**: Complete SVG icon library

## 🧪 Testing

The application includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Semantic HTML structure

## 🎨 Customization

### Colors
The application uses a configurable color scheme defined in `src/app/globals.css`:

- Primary: #1f2937
- Secondary: #6b7280
- Success: #10b981
- Warning: #f59e0b
- Danger: #ef4444
- Info: #3b82f6
- Light: #f9fafb
- Dark: #111827

### Constants
All configuration values are stored in `src/lib/constants/index.ts` to avoid magic numbers and strings.

## 📝 Development Guidelines

- Use kebab-case for all file and folder names
- Maintain separate type files for each component
- Follow TypeScript best practices
- Ensure 100% test coverage
- Use Tailwind CSS for styling
- Implement proper accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
