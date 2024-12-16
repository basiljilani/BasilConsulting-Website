# Environment Variables Documentation

## Frontend Environment Variables (.env)
```env
# API Configuration
VITE_API_BASE_URL=http://46.202.170.78/api
VITE_API_TIMEOUT=30000

# AWS Configuration
VITE_AWS_REGION=your-region
VITE_AWS_USER_POOL_ID=your-user-pool-id
VITE_AWS_APP_CLIENT_ID=your-app-client-id

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NEWSLETTER=true

# External Services
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

## Backend Environment Variables (.env)
```env
# Server Configuration
NODE_ENV=production
PORT=3000
API_PREFIX=/api
CORS_ORIGIN=https://your-frontend-domain.com

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=basil_consulting
DB_USER=basil_admin
DB_PASSWORD=BasilAdmin@123

# JWT Configuration
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your-refresh-token-secret
REFRESH_TOKEN_EXPIRES_IN=7d

# Email Configuration (if using email service)
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@your-domain.com

# File Upload Configuration
UPLOAD_DIR=/var/www/basil-consulting/uploads
MAX_FILE_SIZE=5242880 # 5MB in bytes

# Logging Configuration
LOG_LEVEL=info
LOG_DIR=/var/www/basil-consulting/logs

# Security Configuration
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX_REQUESTS=100
```
