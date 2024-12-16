# Server Configuration Documentation

## VPS Details
- Provider: Hostinger
- IP Address: 46.202.170.78
- SSH Access: Using SSH key authentication

## Installed Software

### Node.js
- Version: 20 LTS
- Installation Date: December 16, 2024
- Location: System-wide installation

### MySQL
- Version: 8.0
- Database Name: basil_consulting
- Database User: basil_admin
- Database Password: BasilAdmin@123
- Host: localhost

### Nginx
- Version: 1.18.0
- Configuration Directory: /etc/nginx
- Sites Directory: /etc/nginx/sites-available

## Directory Structure
```
/var/www/basil-consulting/
├── backend/         # Node.js backend application
└── logs/           # Application logs
```

## Access and Permissions
- Web Root Owner: www-data:www-data
- Backend Directory: www-data:www-data

## Security
- MySQL root password is set
- SSH key authentication enabled
- Default MySQL user created with limited privileges

## Deployment Architecture
- Frontend: AWS Amplify
- Backend: Hostinger VPS
- Database: MySQL on VPS
- Reverse Proxy: Nginx on VPS

## Important Commands
```bash
# Restart Nginx
sudo systemctl restart nginx

# Restart MySQL
sudo systemctl restart mysql

# View Nginx logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# View MySQL logs
tail -f /var/log/mysql/error.log
```
