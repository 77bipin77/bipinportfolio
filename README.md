# Bipin Chandra Pandey - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Bipin Chandra Pandey - Software Developer & Cinematographer.

## Features

- **Hero Section**: Introduction with profile picture and call-to-action buttons
- **About Section**: Personal background and expertise
- **Experience**: Professional journey and achievements
- **Skills**: Technical and creative skills
- **Services**: Offered services and expertise
- **Portfolio**: Showcase of projects and work
- **Resume**: Downloadable resume
- **Contact**: Contact form and information
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd bipinportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```sh
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Experience.tsx # Experience section
│   ├── Skills.tsx     # Skills section
│   ├── Services.tsx   # Services section
│   ├── Portfolio.tsx  # Portfolio section
│   ├── Resume.tsx     # Resume section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx     # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Customization

- Update profile information in component files
- Replace profile picture in `src/assets/profile-picture.jpg`
- Modify colors and styling in `tailwind.config.ts`
- Add new sections by creating components and updating `src/pages/Index.tsx`

## Deployment

The project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is open source and available under the [MIT License](LICENSE).
