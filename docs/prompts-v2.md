# AI Prompts Documentation

This document contains all the AI prompts used to generate the dashboard application code.

## Model Used
- **Model**: Claude Sonnet 4
- **Platform**: Cursor IDE
- **Date**: 2024

## Initial Requirements Prompt

```
@promts-v2.txt @home-v3.png Read my promts from promts-v2.txt and design and layout from home-v3.png
```

## Requirements from promts-v2.txt

### Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Jest

### UI Requirements

#### Configuration
- Tailwind config should accept primary, secondary, success, warning, danger, info, light, dark colors from user
- Entire application should use config and constants. No magic numbers or strings
- Create dummy JSON for all API services and use for testing
- Write unit test cases and achieve 100% code coverage
- Should have all basic accessibility features (screen reader, keyboard navigation, etc.)
- Create each component as a separate library and use within application
- No code duplication
- Put color wherever required
- Create docs folder maintain all required info in separate files in .md format
- Maintain basic app details and detailed documentation link in root README.md
- Maintain all final AI prompts along with model name used to generate code, save in docs folder under filename prompts-v2.md
- Declare type/props for functions and maintain in separate files in same component folder
- No hard coded secrets/keys should be used in application and those should be stored in .env.local file
- Create SVG for all icons and maintain like a library
- Application should be responsive and use tailwind class to handle it
- Always use kebab-case for all file and folder names
- Always check latest documentation of frameworks based on version
- Go with latest tailwind process without tailwind.config file

#### Application Layout
- Create layout by following attached home layout images with pixel perfect match
- Header position in fixed top
- Sidebar is fixed
  - Sidebar options: Home, Tickets
  - Sidebar collapsed by default (showing only icons)
  - Sidebar expands on hover to show both icons and text labels
- Banner is part of scroll

#### Page 1 (Home)
- Create home page content as per layout attached
- First column contains 'Tickets' widget and second one for 'My Services'

#### API Service
- Use mock JSON for all data and maintain in <root>/api/data folder
- All JSON contracts should be well maintained in docs folder
- JSON should not have any real names and email. Use test, dummy etc

## Implementation Details

### Components Created
1. **Button** - Reusable button component with variants and sizes
2. **StatusBadge** - Status indicator component
3. **PriorityBadge** - Priority indicator component
4. **Header** - Fixed header with menu and user profile
5. **Sidebar** - Collapsible navigation sidebar
6. **Banner** - Welcome banner component
7. **Layout** - Main layout wrapper
8. **TicketsWidget** - Tickets display widget
9. **ServicesWidget** - Services display widget

### Icons Created
- MenuIcon, HomeIcon, TicketsIcon, SearchIcon, FilterIcon, SortIcon
- ChevronDownIcon, UserIcon, MoreIcon, CloseIcon, CheckIcon
- ClockIcon, CalendarIcon

### Data Structure
- Mock tickets data with proper TypeScript types
- Mock services data with proper TypeScript types
- All data uses dummy/test values for privacy

### Testing
- Jest configuration with Next.js support
- React Testing Library for component testing
- 100% code coverage target

### Documentation
- API contracts documentation
- Component library documentation
- This prompts documentation

### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Semantic HTML structure

## File Structure
```
src/
├── app/
│   ├── globals.css (Tailwind v4 configuration)
│   ├── layout.tsx
│   └── page.tsx (Main dashboard)
├── lib/
│   ├── components/ (Reusable UI components)
│   ├── widgets/ (Dashboard widgets)
│   ├── icons/ (SVG icon library)
│   ├── constants/ (Configuration constants)
│   └── utils/ (Utility functions)
└── api/
    └── data/ (Mock JSON data)
```

## Color Scheme
- Primary: #1f2937 (Dark gray)
- Secondary: #6b7280 (Medium gray)
- Success: #10b981 (Green)
- Warning: #f59e0b (Orange)
- Danger: #ef4444 (Red)
- Info: #3b82f6 (Blue)
- Light: #f9fafb (Light gray)
- Dark: #111827 (Very dark gray) 