# Food Category Auto-Suggest Frontend

## 🚀 Features

- **Real-time Auto-Suggest**: Type any food item and get instant category suggestions
- **TypeScript**: Full type safety throughout the application
- **Styled Components**: Modern CSS-in-JS styling with TypeScript support
- **Responsive Design**: Beautiful UI that works on all devices
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Debounced Search**: Optimized API calls with 500ms debounce
- **Clean Architecture**: Well-organized component structure with hooks and API layers

## 🛠️ Tech Stack

- **React 19.1.0** - Latest React with modern features
- **TypeScript 4.9.5** - Type-safe JavaScript
- **Styled Components 6.1.18** - CSS-in-JS styling
- **Axios 1.9.0** - HTTP client for API calls
- **React Scripts 5.0.1** - Build and development tools


### AutoSuggest Component
The main component that handles food item input and displays category suggestions:

- **TypeScript Interfaces**: Fully typed props and API responses
- **Styled Components**: Beautiful, responsive styling
- **Error Handling**: Network and validation error management
- **Loading States**: User-friendly loading indicators


## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose (for full stack setup)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Setup (Recommended)

1. **Start all services**:
   ```bash
   docker-compose up -d
   ```

2. **Access the application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)


## 🔧 Configuration

### Environment Variables
The app connects to the Laravel backend API:
- **API_BASE_URL**: `http://localhost:8000/api` (default)

### Constants
```typescript
export const DEBOUNCE_DELAY: number = 500;      // API call delay
export const MIN_QUERY_LENGTH: number = 3;      // Minimum search length
```

## 🧪 Available Scripts

- **`npm start`** - Start development server
- **`npm test`** - Run test suite  
- **`npm run build`** - Build for production
- **`npm run eject`** - Eject from Create React App (not recommended)

## 🏗️ Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 🤝 API Integration

The frontend integrates with a Laravel backend API:

### Endpoint
```
GET /api/autosuggest?query={food_item}
```

### Response Format
```json
{
  "data": {
    "item": "banana",
    "category": "Fruits",
    "message": "Banana belongs to the Fruits category"
  },
  "meta": {
    "version": "1.0",
    "api_version": "v1"
  }
}
```