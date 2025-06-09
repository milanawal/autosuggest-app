
## 🚀 Features

- **Laravel 12**: Latest Laravel framework with modern PHP features
- **RESTful API**: Clean API endpoints with JSON responses
- **Database Seeding**: Pre-populated food categories database
- **Request Validation**: Type-safe validation with custom error handling
- **Docker Ready**: Full containerization with PHP-FPM, Nginx, and MySQL
- **CORS Enabled**: Cross-origin resource sharing for frontend integration
- **Error Handling**: Comprehensive error responses and logging

## 🛠️ Tech Stack

- **Laravel 12** - PHP web framework
- **PHP 8.2** - Modern PHP with latest features
- **MySQL 8.0** - Relational database
- **Nginx** - Web server and reverse proxy
- **Docker & Docker Compose** - Containerization

## 🚀 Getting Started

### Prerequisites
- **Docker & Docker Compose** (Recommended)
- **PHP 8.2+** (for local development)
- **Composer** (for dependency management)
- **MySQL 8.0+** (for local database)

## 🐳 Docker Setup (Recommended)

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd autosuggest-app
```

### 2. Environment Configuration
```bash
# Copy environment file
cp backend/.env.example backend/.env

# Update database configuration in backend/.env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=autosuggest
DB_USERNAME=root
DB_PASSWORD=password
```

### 3. Start Docker Containers
```bash
# Start all services (Laravel, MySQL, Nginx, React)
docker-compose up -d

# Check container status
docker-compose ps
```

### 4. Install Dependencies
```bash
# Install Composer dependencies inside container
docker-compose exec app composer install
```

### 5. Database Setup
```bash
# Generate application key
docker-compose exec app php artisan key:generate

# Run database migrations
docker-compose exec app php artisan migrate

# Seed database with sample food categories
docker-compose exec app php artisan db:seed --class=CategoryItemsSeeder
```


## 🔧 Local Development Setup

### 1. Install Dependencies
```bash
cd backend
composer install
```

### 2. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=autosuggest
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 3. Database Setup
```bash
# Create database
mysql -u root -p -e "CREATE DATABASE autosuggest;"

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed --class=CategoryItemsSeeder
```

### 4. Start Development Server
```bash
# Start Laravel development server
php artisan serve

# API will be available at http://localhost:8000
```

## 🛣️ API Endpoints

### Auto-Suggest Endpoint
```
GET /api/autosuggest?query={food_item}
```

**Parameters:**
- `query` (string, required): Food item name (minimum 3 characters)

**Success Response (200):**
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

### Environment Variables
```bash
# Application
APP_NAME="Food Category API"
APP_ENV=local
APP_KEY=base64:your-generated-key
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=db                    # 'db' for Docker, '127.0.0.1' for local
DB_PORT=3306
DB_DATABASE=autosuggest
DB_USERNAME=root
DB_PASSWORD=password

# CORS (for React frontend)
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### Docker Services
```yaml
# docker-compose.yml services
app:          # Laravel PHP-FPM
webserver:    # Nginx (port 8000)
db:           # MySQL 8.0
node:         # React development server (port 3000)
```

```bash
# List all registered routes
docker-compose exec app php artisan route:list


## 🐛 Troubleshooting

### Common Issues

**Container Connection Issues**
```bash
# Check container status
docker-compose ps

# View container logs
docker-compose logs app
docker-compose logs db
```

**Database Connection Failed**
```bash
# Verify database container is running
docker-compose exec db mysql -u root -ppassword -e "SHOW DATABASES;"


```bash
# Reset and re-run migrations
docker-compose exec app php artisan migrate:fresh --seed
```

** Permission Issues**
```bash
# Fix Laravel storage permissions
docker-compose exec app chmod -R 775 storage bootstrap/cache
```

### Development Commands
```bash
# Clear application cache
docker-compose exec app php artisan cache:clear

# Clear configuration cache
docker-compose exec app php artisan config:clear

# View Laravel logs
docker-compose exec app tail -f storage/logs/laravel.log

# Access MySQL directly
docker-compose exec db mysql -u root -ppassword autosuggest
```
