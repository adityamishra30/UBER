# Uber Clone - Setup & Run Instructions

## ✅ Application Status: READY TO RUN

All dependencies installed, configurations fixed, and both servers tested successfully.

## 🚀 Quick Start Commands

### Step 1: Start MongoDB
```bash
# Start MongoDB service (Windows)
net start MongoDB
```

### Step 2: Start Backend Server
```bash
# Open terminal in Backend folder
cd Backend
npm start

# Server will run on: http://localhost:3000
# You should see: "Server is running on port 3000" and "Connected to DB"
```

### Step 3: Start Frontend Development Server
```bash
# Open NEW terminal in frontend folder
cd frontend
npm run dev

# Frontend will run on: http://localhost:5173/
```

## 📋 What Was Fixed

### Backend Issues Fixed:
- ✅ Added missing `socket.io` dependency
- ✅ Added start scripts (`npm start`, `npm run dev`)
- ✅ Created `.env` file with database configuration
- ✅ Added nodemon for development

### Frontend Issues Fixed:
- ✅ Added proxy configuration for API calls
- ✅ All dependencies installed successfully

### Environment Configuration:
- ✅ `.env` file created with:
  - `PORT=3000`
  - `DB_CONNECT=mongodb://localhost:27017/uber-clone`
  - `JWT_SECRET=your-super-secret-jwt-key-change-this-in-production`
  - `GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here`
  - `STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key-here`

## 🔧 Tech Stack

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- Socket.io (real-time features)
- JWT Authentication
- CORS enabled

**Frontend:**
- React 18 + Vite
- TailwindCSS
- React Router
- Google Maps API
- Socket.io-client
- GSAP animations

## 📁 Project Structure
```
uber/
├── Backend/                 # Node.js API server
│   ├── .env                # Environment variables
│   ├── server.js           # Server entry point
│   ├── app.js              # Express app configuration
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── socket.js           # Socket.io configuration
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context providers
│   │   └── pages/          # Page components
│   └── vite.config.js      # Vite configuration with proxy
└── MONGODB_SETUP.md        # MongoDB setup guide
```

## 🌐 Access Points

- **Frontend:** http://localhost:5173/
- **Backend API:** http://localhost:3000/
- **MongoDB:** mongodb://localhost:27017/uber-clone

## ⚠️ Important Notes

1. **MongoDB must be running** before starting the backend
2. **Keep both terminals open** - one for backend, one for frontend
3. **API keys** in `.env` are placeholders - replace with actual keys for production
4. **CORS is configured** to allow all origins for development

## 🐛 Troubleshooting

- **Backend won't start:** Check if MongoDB is running
- **Frontend compilation errors:** Run `npm install` again in frontend folder
- **Database connection errors:** Verify MongoDB service status with `net start MongoDB`
- **Port conflicts:** Ensure ports 3000 and 5173 are available

## 🎯 Next Steps

1. Get your Google Maps API key from Google Cloud Console
2. Get Stripe test keys from Stripe Dashboard
3. Update the `.env` file with real API keys
4. Test user registration and ride booking features
