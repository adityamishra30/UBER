# MongoDB Setup for Uber Clone

## Prerequisites
- MongoDB installed locally on your system
- MongoDB service running

## Installation (Windows)
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer and choose "Complete" setup
3. Install MongoDB Compass (optional GUI tool)

## Starting MongoDB
### Option 1: As a Service (Recommended)
```bash
# Start MongoDB service
net start MongoDB

# Stop MongoDB service
net stop MongoDB
```

### Option 2: Manual Start
```bash
# Navigate to MongoDB bin directory (typical path)
cd "C:\Program Files\MongoDB\Server\7.0\bin"

# Start MongoDB
mongod --dbpath "C:\data\db"
```

## Database Configuration
The application will automatically create a database named `uber-clone` on first connection.

## Environment Variables
The `.env` file is already configured with:
```
DB_CONNECT=mongodb://localhost:27017/uber-clone
```

## Verification
To verify MongoDB is running:
1. Open MongoDB Compass or use `mongosh`
2. Connect to `mongodb://localhost:27017`
3. You should see the `uber-clone` database after the app runs

## Troubleshooting
- If connection fails, ensure MongoDB service is running
- Default MongoDB port is 27017
- Check Windows Firewall if connection issues persist
