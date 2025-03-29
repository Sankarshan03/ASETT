# ASETT CMS Complaint System

ASETT (Administrative Simplification Enforcement and Testing Tool) is a web-based complaint management system for the Centers for Medicare & Medicaid Services (CMS). This application allows healthcare organizations and individuals to submit complaints related to HIPAA Administrative Simplification requirements.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Build Process](#build-process)
- [Deployment](#deployment)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Security Considerations](#security-considerations)
- [Troubleshooting](#troubleshooting)

## Features

- **Complaint Type Selection**: Users can select from four main complaint categories:
  - Transactions
  - Code Sets
  - Unique Identifiers
  - Operating Rules

- **Complainant Information Collection**: Comprehensive form for collecting complainant details including:
  - Organization information
  - Personal contact details
  - Address information
  - Communication preferences

- **Multi-step Process**: Guided workflow through complaint submission:
  1. Complaint Type Selection
  2. Complainant Details
  3. Filed Against Entity (FAE) Details
  4. Complaint Details
  5. Review Complaint
  6. Submission Confirmation

## Technology Stack

- React.js (v18.2.0)
- React Router v6 for navigation
- CMS Design System (@cmsgov/design-system)
- Modern CSS with utility classes
- Create React App for project scaffolding

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- Netlify account (for deployment)

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Sankarshan03/ASETT.git
cd ASETT
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
REACT_APP_ENVIRONMENT=development
REACT_APP_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ASETT/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # Search engine crawling rules
│   ├── sitemap.xml       # Site structure for search engines
│   └── .htaccess         # Apache server configuration
├── src/
│   ├── components/       # Reusable React components
│   ├── App.jsx          # Main application component
│   └── styles/          # CSS and styling files
├── package.json         # Project dependencies and scripts
├── netlify.toml         # Netlify deployment configuration
└── README.md           # Project documentation
```

## Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of your changes"
```

3. Push your changes:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

## Testing

1. Run unit tests:
```bash
npm test
```

2. Run tests with coverage:
```bash
npm test -- --coverage
```

## Build Process

1. Create a production build:
```bash
npm run build
```

2. The build output will be in the `build` directory

## Deployment

### Netlify Deployment

1. Push your code to GitHub

2. Go to [Netlify](https://www.netlify.com/) and:
   - Click "Add new site" > "Import an existing project"
   - Connect to your GitHub repository
   - Select the repository "Sankarshan03/ASETT"
   - Configure build settings:
     ```
     Build command: npm run build
     Publish directory: build
     ```
   - Click "Deploy site"

3. Set up environment variables in Netlify:
   ```
   NODE_VERSION: 14
   NPM_VERSION: 6
   REACT_APP_ENVIRONMENT: production
   REACT_APP_API_URL: https://api.asett.cms.gov
   ```

4. Configure custom domain:
   - Go to Site settings > Domain management
   - Add your custom domain (asett.cms.gov)
   - Follow DNS configuration instructions
   - Enable HTTPS

### Production Deployment Checklist

- [ ] Run tests
- [ ] Create production build
- [ ] Verify build output
- [ ] Deploy to staging
- [ ] Run smoke tests
- [ ] Deploy to production
- [ ] Verify deployment
- [ ] Monitor error logs
- [ ] Check analytics

## Monitoring and Analytics

1. Set up error tracking:
   - Configure Sentry for error monitoring
   - Set up error alerts

2. Configure analytics:
   - Set up Google Analytics
   - Configure custom events tracking

3. Monitor performance:
   - Use Netlify Analytics
   - Monitor Core Web Vitals
   - Set up performance alerts

## Security Considerations

1. Enable HTTPS
2. Set up proper CORS policies
3. Implement rate limiting
4. Configure security headers
5. Regular security audits

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for dependency conflicts

2. **Deployment Issues**
   - Verify build command and publish directory
   - Check environment variables
   - Review deployment logs

3. **Runtime Errors**
   - Check browser console
   - Review error tracking logs
   - Verify API endpoints

### Support

For support, please contact:
- Technical Support: support@cms.gov
- Documentation: docs@cms.gov

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- CMS Design System for UI components and styling
- React.js team for the framework
- All contributors who have helped shape this project 