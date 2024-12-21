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
- **Local Development**: Docker Compose setup for testing

---

## 🎯 **Objectives**
- **Learn Automation**: Implement scheduled workflows with GitHub Actions
- **Practice Docker**: Use containers for database management
- **Cloud Integration**: Work with cloud storage (Cloudflare R2)
- **Database Operations**: Handle database backups and restores

---

## 📚 **How It Works**
1. **Setup**: MongoDB runs in a Docker container
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

2. **Local Development Setup**  
   Start MongoDB using Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. **Seed Test Data**
   ```bash
   mongosh "mongodb://admin:password123@localhost:27017/admin" seed.js
   ```

4. **Configure GitHub Secrets**  
   Add the following secrets to your GitHub repository:
    - `R2_ACCESS_KEY_ID`
    - `R2_SECRET_ACCESS_KEY`
    - `R2_ENDPOINT_URL`

5. **Manual Backup**  
   Trigger the backup workflow manually from GitHub Actions tab

6. **Restore from Backup**  
   Use the restore workflow and specify the backup file name

---

## 🚀 **Project Structure**
```
automated-db-backups/
├── .github/
│   └── workflows/
│       ├── backup.yml     # Backup workflow
│       └── restore.yml    # Restore workflow
├── docker-compose.yml     # Local MongoDB setup
├── seed.js               # Test data seeding script
└── README.md             # Project documentation
```

---

## 📦 **Files Overview**
| **File**                | **Description**                                       |
|------------------------|-----------------------------------------------------|
| `backup.yml`           | GitHub Actions workflow for automated backups        |
| `restore.yml`          | Workflow for restoring from backups                 |
| `docker-compose.yml`   | Docker configuration for local MongoDB              |
| `seed.js`             | Script to populate test data                        |

---

## 🔍 **Environment Variables**
| **Variable**           | **Description**                                    |
|-----------------------|--------------------------------------------------|
| `R2_ACCESS_KEY_ID`    | Cloudflare R2 access key                         |
| `R2_SECRET_ACCESS_KEY`| Cloudflare R2 secret key                         |
| `R2_ENDPOINT_URL`     | Cloudflare R2 endpoint URL                       |

---

**Automated database backups made simple!** 🚀