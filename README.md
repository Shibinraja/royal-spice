# RoyalSpice Website

A modern, responsive website for RoyalSpice, built with Next.js, TypeScript, and enhanced with GlightBox, Swiper, and Bootstrap.

## About RoyalSpice

RoyalSpice is a premium spice brand that offers a curated selection of high-quality spices, herbs, and blends sourced from around the world. The website serves as a digital storefront where customers can:

- Browse through our extensive collection of spices
- Learn about the origin and usage of different spices
- Place orders online with secure payment processing
- Read recipes and cooking tips
- Contact customer support

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type-safe JavaScript coding
- **Bootstrap**: For responsive layout and UI components
- **GlightBox**: For image lightbox effects
- **Swiper**: For touch-enabled slider components
- **TailwindCSS**: For utility-first CSS styling

## Project Structure

```
royalspice-website/
├── .next/                   # Next.js build output
├── node_modules/            # Node.js dependencies
├── public/                  # Static assets
└── src/
    └── app/                 # Main application code
        ├── api/             # API routes for server-side operations
        ├── components/      # Reusable UI components
        ├── data/            # Data files and utilities
        ├── sections/        # Page sections and layouts
        ├── favicon.ico      # Website favicon
        ├── globals.css      # Global CSS styles
        ├── layout.tsx       # Root layout component
        └── page.tsx         # Home page component
    ├── .eslintrc.js         # ESLint configuration
    ├── menu.txt             # Menu data or configuration
    ├── next-env.d.ts        # TypeScript definitions for Next.js
    ├── next.config.js       # Next.js configuration
    ├── package-lock.json    # Dependency lock file
    ├── package.json         # Project metadata and dependencies
    ├── postcss.config.js    # PostCSS configuration
    ├── README.md            # Project documentation
    ├── tailwind.config.ts   # Tailwind CSS configuration
    ├── tsconfig.json        # TypeScript configuration
    └── yarn.lock            # Yarn lock file (if using Yarn)
```

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shibinraja/royalspice-website.git
   cd royalspice-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

### Running Production Build

To start the production server:

```bash
npm run start
# or
yarn start
```

## Additional Commands

```bash
# Lint the code
npm run lint
# or
yarn lint

```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

RoyalSpice Team - kannannri@gmail.com