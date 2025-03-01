# E-commerce Product Viewer

A React application for browsing and filtering products from the Fake Store API.

## Tech Stack

- React 18.2.0
- TypeScript 5.0.2
- Vite 4.4.5
- React Query (TanStack Query) 5.0.0
- React Router DOM 7.2.0
- Styled Components 6.0.7
- Radix UI Dialog 1.1.6
- Orval 7.6.0 for API code generation
- Axios 1.6.2

## Features

- Product listing with responsive grid layout
- Product detail view
- Price filtering with min/max range
- Caching implementation
- Accessibility support
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependecies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Building for production

```bash
npm run build
```

## Caching implementation

The application uses TanStack Query (React Query) for data fetching and caching. The caching configuration can be found in [src/App.tsx](./src/App.tsx):

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents refetch when window regains focus
      retry: 1, // Retry failed requests once
      staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    },
  },
});
```

### Caching Behavior

- **Stale Time**: Data is considered fresh for 5 minutes after fetching
- **Window Focus**: The app won't refetch data when the window regains focus
- **Retries**: Failed requests are retried once before showing an error
- **Navigation**: When navigating between list and detail views, cached data is used if available and not stale

## API generation

The project uses Orval to generate TypeScript API client from OpenAPI specification:

```bash
npm run generate-api
```
