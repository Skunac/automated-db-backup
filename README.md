# Automated DB Backups with GitHub Actions

## 📋 **Overview**
This project implements an automated database backup system using GitHub Actions and Cloudflare R2. It performs scheduled backups every 12 hours, ensuring your data is regularly protected and stored in cloud storage.

This project is part of my learning journey following the [DevOps Roadmap](https://roadmap.sh/devops). It directly follows the [Automated Backups Project](https://roadmap.sh/projects/automated-backups) outlined in the roadmap. The project introduces key concepts like scheduled workflows, database backups, cloud storage, and containerization.

---

## 🚀 **Features**
- **Automated Backups**: Scheduled MongoDB backups every 12 hours
- **Cloud Storage**: Automatic upload to Cloudflare R2
- **Containerized Database**: MongoDB running in Docker for easy testing
- **Version Control**: Backup scripts and configurations in Git
- **Restoration Capability**: Optional workflow to restore from backups
- **Environment Variables**: Secure configuration using .env files
- **User Authentication**: Secure MongoDB setup with authentication

---

## 🎯 **Objectives**
- **Learn Automation**: Implement scheduled workflows with GitHub Actions
- **Practice Docker**: Use containers for database management
- **Cloud Integration**: Work with cloud storage (Cloudflare R2)
- **Database Operations**: Handle database backups and restores
- **Security**: Implement proper authentication and environment variables

---

## 📚 **How It Works**
1. **Setup**: MongoDB runs in a Docker container with authentication enabled
2. **Scheduling**: GitHub Actions triggers every 12 hours
3. **Backup**: MongoDB dump is created and compressed
4. **Storage**: Backup file is uploaded to Cloudflare R2
5. **Restore**: Optional workflow to restore from backup

---

## ⚙️ **Setup and Usage**

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/automated-db-backups.git
   cd automated-db-backups
   ```

2. **Configure Environment**
   Create a .env file with:
   ```env
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=your_password
   MONGO_INITDB_DATABASE=test_db
   ```

3. **Start MongoDB**
   ```bash
   docker-compose up -d
   ```

4. **Seed Test Data**
   ```bash
   docker exec -i mongodb mongosh \
     --username "$MONGO_INITDB_ROOT_USERNAME" \
     --password "$MONGO_INITDB_ROOT_PASSWORD" \
     --authenticationDatabase admin \
     "$MONGO_INITDB_DATABASE" \
     < seed.js
   ```

5. **Configure GitHub Secrets**
   Add these secrets to your GitHub repository:
   - `MONGODB_USERNAME`: MongoDB username
   - `MONGODB_PASSWORD`: MongoDB password
   - `MONGODB_HOST`: Your server IP
   - `MONGODB_DATABASE`: Database name
   - `R2_ACCESS_KEY_ID`: Cloudflare R2 access key
   - `R2_SECRET_ACCESS_KEY`: Cloudflare R2 secret key
   - `R2_ENDPOINT_URL`: R2 endpoint URL
   - `R2_BUCKET_NAME`: R2 bucket name

6. **Manual Backup**
   - Go to Actions tab
   - Select "MongoDB Backup"
   - Click "Run workflow"

7. **Restore from Backup**
   - Go to Actions tab
   - Select "MongoDB Restore"
   - Enter the backup filename
   - Click "Run workflow"

---

## 🚀 **Project Structure**
```
automated-db-backups/
├── .github/
│   └── workflows/
│       ├── backup.yml     # Backup workflow
│       └── restore.yml    # Restore workflow
├── docker-compose.yml     # MongoDB container setup
├── .env                   # Environment variables
├── init-mongo.js         # MongoDB initialization
├── seed.js               # Test data seeding
└── README.md             # Documentation
```

---

## 📦 **Files Overview**
| **File**                | **Description**                                    |
|------------------------|--------------------------------------------------|
| `backup.yml`           | Automated backup workflow                         |
| `restore.yml`          | Database restoration workflow                     |
| `docker-compose.yml`   | Container orchestration                          |
| `.env`                 | Environment configuration                        |
| `init-mongo.js`        | MongoDB user initialization                      |
| `seed.js`              | Sample data population                           |

---

## 🔍 **Environment Variables**
| **Variable**                  | **Description**                             |
|------------------------------|---------------------------------------------|
| `MONGO_INITDB_ROOT_USERNAME` | MongoDB admin username                      |
| `MONGO_INITDB_ROOT_PASSWORD` | MongoDB admin password                      |
| `MONGO_INITDB_DATABASE`      | MongoDB database name                       |

---

**Automated database backups made simple!** 🚀