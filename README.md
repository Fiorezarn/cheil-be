# Submission Management API
Backend API for submission management system with file upload and database integration.

## Tech Stack
- Node.js + Express
- MySQL + Sequelize ORM
- Multer (file upload)
- Joi (validation)
- Body Parser + CORS

## Features
- Form submission API
- Image upload handling
- Data retrieval with sorting
- Request validation
- Database migrations & seeders

## Installation

### Step by Step Setup:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fiorezarn/cheil-be.git
   ```

2. **Navigate to project directory**
   ```bash
   cd cheil-be
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your database settings (see Environment Variables section below)

5. **Database Setup** (Choose one option):

   **Option A: Run migrations (Recommended)**
   ```bash
   npm run migrate:up
   ```

   **Option B: Import existing database**
   - Import the provided database file to your MySQL server
   - Make sure your `.env` settings match your database configuration

6. **Start the server**
   ```bash
   npm run start
   ```

The server will run on `http://localhost:3000` (or your configured PORT)

## Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
BASE_URL=localhost
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=submission_db
```

## API Endpoints

### Get All Submissions
```http
GET /api/v1/submission
```
**Response:**
```json
{
  "status": "success",
  "code": 200,
  "message": "Submissions fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phoneNumber": "08123456789",
      "imagePath": "image_1234567890.jpg",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```


### Create Submission
```http
POST /api/v1/submission
Content-Type: multipart/form-data

Body:
- name (string, required)
- email (string, required)
- phone (string, required)
- image (file, optional)
```
**Response:**
```json
{
  "status": "success",
  "code": 200,
  "message": "Submission created successfully!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "08123456789",
    "imagePath": "image_1234567890.jpg"
  }
}
```

### Static Files
```http
GET /api/storage/:filename
```
**Description:** Serves uploaded image files

## Available Scripts

```bash
npm run start          # Start server with nodemon
npm run migrate:up     # Run all migrations
npm run migrate:fresh  # Reset & run all migrations + seeds
npm run migrate:undo   # Undo all migrations
npm run seed:up        # Run all seeders
npm run seed:undo      # Undo all seeders
```

## 📁 Project Structure
```
├── controllers/       # 🎮 Route handlers
├── models/           # 🗃️ Sequelize models
├── routers/          # 🛣️ Express routes
├── validations/      # ✅ Joi validation schemas
├── utils/            # 🔧 Utilities (multer config, etc.)
├── helpers/          # 🤝 Response helpers
├── storage/          # 📂 Uploaded files
└── index.js          # 🏠 Main server file
```

## 🗄️ Database Schema

### 📝 Submissions Table
- `id` - 🔑 Primary key
- `name` - 👤 User full name
- `email` - 📧 User email
- `phoneNumber` - 📱 User phone number
- `imagePath` - 🖼️ Uploaded image filename
- `createdAt` - ⏰ Creation timestamp
- `updatedAt` - 🔄 Last update timestamp

---

Built with 🚀 Express + Sequelize
