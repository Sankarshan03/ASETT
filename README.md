# ASETT CMS Complaint System

ASETT (Administrative Simplification Enforcement and Testing Tool) is a web-based complaint management system for the Centers for Medicare & Medicaid Services (CMS). This application allows healthcare organizations and individuals to submit complaints related to HIPAA Administrative Simplification requirements.

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

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sankarshan03/ASETT.git
cd ASETT
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "@cmsgov/design-system": "^7.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.0.0",
    "react-scripts": "5.0.1"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "web-vitals": "^2.1.4"
  }
}
```

## Project Structure

```
ASETT/
├── src/
│   ├── App.jsx           # Main application component
│   ├── components/       # Reusable components
│   └── styles/          # CSS and styling files
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

### CMS Design System Integration

The project uses the CMS Design System for consistent UI components. Key components used include:

- `Card`: For content containers
- `WarningIcon`: For error messages
- `TooltipIcon`: For help text and tooltips
- Utility classes for spacing and layout

### Code Style

This project follows the CMS Design System guidelines and uses utility classes for styling. All components should maintain consistency with the CMS Design System specifications.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- CMS Design System for UI components and styling
- React.js team for the framework
- All contributors who have helped shape this project

## Support

For support, please contact the ASETT support team or refer to the documentation in the `/docs` directory.

## Troubleshooting

### Common Issues

1. **CMS Design System Installation**
   - Ensure you're using the correct version of @cmsgov/design-system
   - Check for peer dependency conflicts

2. **React Router Issues**
   - Verify React Router version compatibility
   - Check route configuration in App.jsx

3. **Build Failures**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install` 