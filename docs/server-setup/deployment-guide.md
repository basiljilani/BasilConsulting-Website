# Deployment Guide

## Frontend Deployment (AWS Amplify)

### Prerequisites
- AWS Account
- GitHub repository connected to AWS Amplify
- Node.js and npm installed locally

### Deployment Steps
1. Push changes to the main branch
2. AWS Amplify will automatically build and deploy

## Backend Deployment (Hostinger VPS)

### Prerequisites
- SSH access to the VPS
- Node.js installed on VPS
- PM2 for process management

### Deployment Steps
1. Connect to VPS:
```bash
ssh -i ~/.ssh/hostinger_vps root@46.202.170.78
```

2. Navigate to backend directory:
```bash
cd /var/www/basil-consulting/backend
```

3. Pull latest changes and install dependencies:
```bash
git pull origin main
npm install
```

4. Restart the application:
```bash
pm2 restart all
```

## Database Management

### Backup Database
```bash
mysqldump -u basil_admin -p basil_consulting > backup.sql
```

### Restore Database
```bash
mysql -u basil_admin -p basil_consulting < backup.sql
```

## SSL Certificate Management
- SSL certificates will be managed through Hostinger
- Renewal should be automatic
- Check status: `certbot certificates`

## Monitoring
- Use PM2 for Node.js process monitoring
- Nginx access and error logs in `/var/log/nginx/`
- MySQL logs in `/var/log/mysql/`

## Troubleshooting

### Common Issues
1. **502 Bad Gateway**
   - Check if Node.js server is running
   - Check Nginx configuration
   - Check logs: `tail -f /var/log/nginx/error.log`

2. **Database Connection Issues**
   - Check MySQL service status: `systemctl status mysql`
   - Verify database credentials
   - Check MySQL logs: `tail -f /var/log/mysql/error.log`

3. **Application Errors**
   - Check PM2 logs: `pm2 logs`
   - Check application logs in `/var/www/basil-consulting/logs/`
