# TaxiHub

TaxiHub is a modern taxi booking platform built with React, TypeScript, Vite, Tailwind CSS, and Zustand. It allows users to search, compare, and book rides from various taxi companies, while also providing a portal for taxi companies to register and manage their business.

## Features

- 🚕 **Search & Compare**: Find and compare local taxi companies by ratings, price, and services.
- 📅 **Easy Booking**: Book rides with a simple multi-step form.
- 💳 **Payment Integration**: Simulated payment options for ride bookings.
- 🏢 **Company Portal**: Taxi companies can register, manage their fleet, and choose subscription plans.
- 🔒 **Authentication**: Register and login as a passenger or company.
- 🌙 **Dark Mode**: Fully responsive and supports dark mode.
- ⭐ **Reviews & Ratings**: Users can view company ratings and testimonials.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Zod](https://zod.dev/) (validation)
- [Lucide Icons](https://lucide.dev/icons/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/taxihub.git
cd TaxiHub
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  components/    # Reusable UI components
  pages/         # Route-based pages
  data/          # Mock data
  store/         # Zustand stores
  types/         # TypeScript types
  index.css      # Tailwind CSS styles
  App.tsx        # Main app component
```

## Customization

- Update taxi company data in `src/data/mockData.ts`.
- Adjust theme and colors in `tailwind.config.js`.

## License

This project is for demonstration purposes only.

---

Made with ❤️ for me to break it later on.
