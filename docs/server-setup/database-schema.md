# Database Schema Documentation

## Database: basil_consulting

### Users Table
```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role ENUM('admin', 'editor', 'viewer') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    reset_token VARCHAR(255),
    reset_token_expires TIMESTAMP
);
```

### Content Table
```sql
CREATE TABLE content (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content_type ENUM('blog', 'service', 'project', 'testimonial') NOT NULL,
    content_body TEXT,
    meta_description VARCHAR(255),
    author_id VARCHAR(36),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);
```

### Media Table
```sql
CREATE TABLE media (
    id VARCHAR(36) PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INT NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    uploaded_by VARCHAR(36),
    content_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id),
    FOREIGN KEY (content_id) REFERENCES content(id)
);
```

### Newsletter_Subscribers Table
```sql
CREATE TABLE newsletter_subscribers (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP
);
```

### Analytics_Data Table
```sql
CREATE TABLE analytics_data (
    id VARCHAR(36) PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    event_data JSON,
    user_id VARCHAR(36),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Database Relationships

### One-to-Many Relationships
- User -> Content (author)
- User -> Media (uploader)
- Content -> Media

### Notes
- All IDs use UUID format (36 characters)
- Timestamps are automatically managed
- Soft deletion not implemented (can be added if needed)
- JSON type used for flexible analytics data storage
