FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    supervisor \
    cron \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (for Laravel Mix/Vite)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    mbstring \
    zip \
    exif \
    pcntl \
    gd \
    bcmath \
    opcache

# Install Redis extension
RUN pecl install redis \
    && docker-php-ext-enable redis

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user with same UID as host (for better volume permissions)
RUN groupadd -g 1000 www \
    && useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents with correct ownership
COPY --chown=www:www . /var/www

# Create necessary directories and set permissions
RUN mkdir -p /var/www/storage/logs \
    && mkdir -p /var/www/storage/framework/cache \
    && mkdir -p /var/www/storage/framework/sessions \
    && mkdir -p /var/www/storage/framework/views \
    && mkdir -p /var/www/bootstrap/cache

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev --no-scripts --no-interaction

# Set ownership and permissions for Laravel directories
RUN chown -R www:www /var/www \
    && chmod -R 755 /var/www \
    && chmod -R 775 /var/www/storage \
    && chmod -R 775 /var/www/bootstrap/cache

# Configure PHP for production
RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini \
    && echo "opcache.enable=1" >> /usr/local/etc/php/php.ini \
    && echo "opcache.memory_consumption=128" >> /usr/local/etc/php/php.ini \
    && echo "opcache.interned_strings_buffer=8" >> /usr/local/etc/php/php.ini \
    && echo "opcache.max_accelerated_files=4000" >> /usr/local/etc/php/php.ini \
    && echo "opcache.revalidate_freq=2" >> /usr/local/etc/php/php.ini \
    && echo "opcache.fast_shutdown=1" >> /usr/local/etc/php/php.ini

# Expose port 9000
EXPOSE 9000

# Switch to non-root user
USER www

# Start PHP-FPM
CMD ["php-fpm"]