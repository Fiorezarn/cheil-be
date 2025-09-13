# Submission Management API

Backend API for submission management system with file upload and database integration.

## 🔗 API Documentation

**📖 Complete Postman Documentation:** [View API Collection](https://documenter.getpostman.com/view/26535141/2sB3HopzLp)

## 🛠️ Tech Stack

- **Runtime:** Node.js + Express.js
- **Database:** MySQL + Sequelize ORM  
- **File Upload:** Multer
- **Validation:** Joi
- **Middleware:** Body Parser + CORS

## ✨ Features

- 📝 Form submission API with validation
- 🖼️ Image upload handling
- 📊 Data retrieval with sorting options
- ✅ Request validation middleware
- 🗄️ Database migrations
- 📁 Static file serving

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

### Step by Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fiorezarn/cheil-be.git
   cd cheil-be
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   PORT=3000
   BASE_URL=localhost
   DB_HOST=localhost
   DB_USERNAME=root
   DB_PASSWORD=your_password
   DB_NAME=submission_db
   ```

4. **Database Setup**
   
   **Option A: Using Migrations (Recommended)**
   ```bash
   npm run migrate:up
   ```
   
   **Option B: Import Database**
   - Import the provided SQL file to your MySQL server
   - Ensure `.env` database settings match your configuration

5. **Start the server**
   ```bash
   npm run start
   ```

🎉 Server will be running on `http://localhost:3000`

## 📚 API Endpoints

**Base URL:** `http://localhost:3000/api/v1`

For complete API documentation with examples, requests, and responses, please refer to our **[📖 Postman Collection](https://documenter.getpostman.com/view/26535141/2sB3HopzLp)**

**Available Endpoints:**
- `GET /api/v1/submission` - Retrieve all submissions
- `POST /api/v1/submission` - Create new submission  
- `GET /api/storage/:filename` - Serve uploaded images

## 🔧 Available Scripts

```bash
# Development
npm run start          # Start server with nodemon
npm run dev           # Development mode (if available)

# Database Operations
npm run migrate:up     # Run all migrations
npm run migrate:fresh  # Reset & run all migrations + seeds
npm run migrate:undo   # Undo all migrations
npm run seed:up        # Run all seeders
npm run seed:undo      # Undo all seeders
```


## 🗄️ Database Schema

### Submissions Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | 🔑 Unique identifier |
| `name` | VARCHAR(50) | NOT NULL | 👤 User full name |
| `email` | VARCHAR(100) | NOT NULL | 📧 User email address |
| `phoneNumber` | VARCHAR(15) | NOT NULL | 📱 User phone number |
| `imagePath` | VARCHAR(255) | NULLABLE | 🖼️ Uploaded image filename |
| `createdAt` | TIMESTAMP | DEFAULT NOW() | ⏰ Record creation time |
| `updatedAt` | TIMESTAMP | DEFAULT NOW() | 🔄 Last update time |


**Built with ❤️ using Express.js + Sequelize**

For detailed API testing and examples, visit the [Complete Postman Documentation](https://documenter.getpostman.com/view/26535141/2sB3HopzLp)
