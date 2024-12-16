#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to get user input with default value
get_input() {
    local prompt=$1
    local default=$2
    local value

    read -p "${prompt} (default: ${default}): " value
    echo "${value:-$default}"
}

# Function to generate random string
generate_random_string() {
    local length=$1
    cat /dev/urandom | LC_ALL=C tr -dc 'a-zA-Z0-9' | fold -w $length | head -n 1
}

print_message $GREEN "🚀 Setting up environment variables for Basil Consulting Website"
echo

# Frontend Environment Setup
print_message $YELLOW "📝 Setting up frontend environment variables..."

# Check if frontend .env already exists
if [ -f .env ]; then
    print_message $RED "⚠️  Frontend .env file already exists"
    read -p "Do you want to override it? (y/N): " override
    if [ "$override" != "y" ] && [ "$override" != "Y" ]; then
        print_message $YELLOW "Skipping frontend environment setup"
    else
        # Frontend variables
        VITE_API_BASE_URL=$(get_input "Enter API base URL" "http://46.202.170.78/api")
        VITE_API_TIMEOUT=$(get_input "Enter API timeout (ms)" "30000")
        VITE_AWS_REGION=$(get_input "Enter AWS region" "us-east-1")
        VITE_ENABLE_ANALYTICS=$(get_input "Enable analytics? (true/false)" "true")
        VITE_ENABLE_NEWSLETTER=$(get_input "Enable newsletter? (true/false)" "true")

        # Create frontend .env file
        cat > .env << EOF
VITE_API_BASE_URL=${VITE_API_BASE_URL}
VITE_API_TIMEOUT=${VITE_API_TIMEOUT}
VITE_AWS_REGION=${VITE_AWS_REGION}
VITE_AWS_USER_POOL_ID=
VITE_AWS_APP_CLIENT_ID=
VITE_ENABLE_ANALYTICS=${VITE_ENABLE_ANALYTICS}
VITE_ENABLE_NEWSLETTER=${VITE_ENABLE_NEWSLETTER}
VITE_GOOGLE_ANALYTICS_ID=
EOF
        print_message $GREEN "✅ Frontend .env file created successfully"
    fi
else
    # Frontend variables
    VITE_API_BASE_URL=$(get_input "Enter API base URL" "http://46.202.170.78/api")
    VITE_API_TIMEOUT=$(get_input "Enter API timeout (ms)" "30000")
    VITE_AWS_REGION=$(get_input "Enter AWS region" "us-east-1")
    VITE_ENABLE_ANALYTICS=$(get_input "Enable analytics? (true/false)" "true")
    VITE_ENABLE_NEWSLETTER=$(get_input "Enable newsletter? (true/false)" "true")

    # Create frontend .env file
    cat > .env << EOF
VITE_API_BASE_URL=${VITE_API_BASE_URL}
VITE_API_TIMEOUT=${VITE_API_TIMEOUT}
VITE_AWS_REGION=${VITE_AWS_REGION}
VITE_AWS_USER_POOL_ID=
VITE_AWS_APP_CLIENT_ID=
VITE_ENABLE_ANALYTICS=${VITE_ENABLE_ANALYTICS}
VITE_ENABLE_NEWSLETTER=${VITE_ENABLE_NEWSLETTER}
VITE_GOOGLE_ANALYTICS_ID=
EOF
    print_message $GREEN "✅ Frontend .env file created successfully"
fi

echo

# Backend Environment Setup
print_message $YELLOW "📝 Setting up backend environment variables..."

# Create backend directory if it doesn't exist
mkdir -p backend

# Check if backend .env already exists
if [ -f backend/.env ]; then
    print_message $RED "⚠️  Backend .env file already exists"
    read -p "Do you want to override it? (y/N): " override
    if [ "$override" != "y" ] && [ "$override" != "Y" ]; then
        print_message $YELLOW "Skipping backend environment setup"
        exit 0
    fi
fi

# Backend variables
NODE_ENV=$(get_input "Enter node environment" "development")
PORT=$(get_input "Enter port number" "3000")
CORS_ORIGIN=$(get_input "Enter CORS origin" "http://localhost:5173")

# Database
DB_HOST=$(get_input "Enter database host" "localhost")
DB_PORT=$(get_input "Enter database port" "3306")
DB_NAME=$(get_input "Enter database name" "basil_consulting")
DB_USER=$(get_input "Enter database user" "basil_admin")
DB_PASSWORD=$(get_input "Enter database password" "BasilAdmin@123")

# Generate random secrets
JWT_SECRET=$(generate_random_string 32)
REFRESH_TOKEN_SECRET=$(generate_random_string 32)

# Create backend .env file
cat > backend/.env << EOF
# Server Configuration
NODE_ENV=${NODE_ENV}
PORT=${PORT}
API_PREFIX=/api
CORS_ORIGIN=${CORS_ORIGIN}

# Database Configuration
DB_HOST=${DB_HOST}
DB_PORT=${DB_PORT}
DB_NAME=${DB_NAME}
DB_USER=${DB_USER}
DB_PASSWORD=${DB_PASSWORD}

# JWT Configuration
JWT_SECRET=${JWT_SECRET}
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=${REFRESH_TOKEN_SECRET}
REFRESH_TOKEN_EXPIRES_IN=7d

# Email Configuration
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@your-domain.com

# File Upload Configuration
UPLOAD_DIR=/var/www/basil-consulting/uploads
MAX_FILE_SIZE=5242880

# Logging Configuration
LOG_LEVEL=debug
LOG_DIR=/var/www/basil-consulting/logs

# Security Configuration
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX_REQUESTS=100
EOF

print_message $GREEN "✅ Backend .env file created successfully"
echo
print_message $GREEN "🎉 Environment setup completed!"
print_message $YELLOW "⚠️  Remember to update the AWS and SMTP credentials in your .env files"
