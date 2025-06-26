# AI Stack NextJS

A comprehensive Next.js application built with TypeScript, Tailwind CSS, Jest, and Playwright. This project demonstrates modern web development practices with a focus on accessibility, testing, and maintainable code.

## 🚀 Features

- **Modern Tech Stack:** Next.js 15, TypeScript, Tailwind CSS
- **Comprehensive Testing:** Jest for unit tests, Playwright for E2E tests
- **Accessibility First:** ARIA labels, keyboard navigation, screen reader support
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Component Library:** Reusable UI components with TypeScript interfaces
- **Mock API Services:** Simulated backend with realistic data
- **Environment Configuration:** Type-safe environment variables
- **Documentation:** Comprehensive docs for all aspects

## 📋 Requirements

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-stack-nextjs-bh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Unit Tests
```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

## 📚 Documentation

- **[API Documentation](docs/API.md)** - API contracts and service documentation
- **[Component Library](docs/COMPONENTS.md)** - UI components and usage guidelines
- **[Testing Guidelines](docs/TESTING.md)** - Testing strategy and best practices
- **[AI Prompts](docs/PROMPTS.md)** - All AI prompts used to build this project

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   ├── tickets/          # Ticket-related components
│   └── services/         # Service-related components
├── api/                  # API and data layer
│   ├── data/            # Mock JSON data
│   └── services/        # Service classes
├── config/              # Configuration files
│   ├── constants.ts     # Application constants
│   └── env.ts          # Environment configuration
└── types/               # TypeScript type definitions
    ├── components.ts    # Component prop types
    └── env.d.ts        # Environment variable types
```

## 🎨 Design System

### Color Palette
- **Primary:** Blue (#3b82f6)
- **Secondary:** Gray (#6b7280)
- **Success:** Green (#10b981)
- **Warning:** Yellow (#f59e0b)
- **Danger:** Red (#ef4444)
- **Info:** Cyan (#06b6d4)

### Components
- **Button:** Multiple variants and sizes
- **Card:** Content containers with options
- **Badge:** Status and priority indicators
- **Accordion:** Collapsible content sections
- **Avatar:** User profile images
- **Dropdown:** Menu components

## 🔧 Configuration

### Environment Variables
All configuration is managed through environment variables:

```bash
# Application
NEXT_PUBLIC_APP_NAME=AI Stack NextJS
NEXT_PUBLIC_APP_VERSION=1.0.0

# API
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_API_TIMEOUT=5000

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_DEBUG_MODE=false
```

### Tailwind Configuration
Custom colors and animations are defined in `tailwind.config.ts` and use CSS custom properties for easy theming.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Breakpoint system: sm, md, lg, xl, 2xl
- Flexible grid layouts
- Touch-friendly interactions

## ♿ Accessibility

- **ARIA Labels:** All interactive elements have proper labels
- **Keyboard Navigation:** Full keyboard support
- **Screen Reader:** Compatible with screen readers
- **Color Contrast:** WCAG compliant color combinations
- **Focus Management:** Visible focus indicators

## 🧪 Testing Strategy

### Unit Testing (100% Coverage)
- Component rendering and interactions
- Service methods and data handling
- Utility functions and helpers
- Accessibility features

### E2E Testing (100% Coverage)
- User workflows and journeys
- Cross-browser compatibility
- Mobile responsiveness
- Accessibility testing

## 🔄 Development Workflow

1. **Feature Development**
   - Create feature branch
   - Implement with tests
   - Ensure accessibility
   - Update documentation

2. **Testing**
   - Run unit tests
   - Run E2E tests
   - Check coverage
   - Test accessibility

3. **Code Quality**
   - Lint code
   - Type check
   - Review accessibility
   - Update docs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Testing Library for excellent testing utilities
- Playwright for powerful E2E testing
- Lucide React for beautiful icons

## 📞 Support

For questions or issues:
- Check the documentation in the `docs/` folder
- Review the AI prompts in `docs/PROMPTS.md`
- Open an issue on GitHub

---

**Built with ❤️ using modern web technologies**
