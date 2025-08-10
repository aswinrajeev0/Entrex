# Entrex Landing Page - Full Stack Development Task

## Project Overview

This project consists of three main parts:
1. **Frontend Implementation** - Pixel-perfect landing page with React/Next.js
2. **Form Integration** - Full-stack form handling with separate backend
3. **Schema Design** - Complete database architecture for a device trading platform

## 🚀 Part 1: UI Implementation

### Technologies Used
- **React** - Component-based UI library
- **Next.js** - React framework with SSR capabilities
- **Tailwind CSS** - Utility-first CSS framework

### Features
- ✅ Pixel-perfect implementation of Figma design
- ✅ Fully responsive across all breakpoints
- ✅ Hover-based mega menu for Services section
- ✅ Clean architecture and component structure

### Key Components

#### Mega Menu Implementation
- Hover-triggered dropdown under "Services"
- Responsive design adapting to screen sizes
- Smooth animations and transitions
- Accessibility-compliant navigation

## 🔗 Part 2: Form Integration

### Frontend Form Features
- ✅ Figma design implementation
- ✅ Real-time form validation
- ✅ Required field validation
- ✅ Email and phone format validation
- ✅ Success/error messaging
- ✅ Submissions listing page

### Backend API Features
- ✅ Express.js RESTful API
- ✅ MongoDB integration
- ✅ Data validation and sanitization
- ✅ Error handling middleware
- ✅ CORS configuration

### API Endpoints

```
POST /api/bookings/create
GET  /api/bookings/list
```

### Backend Setup

1. **Install Dependencies**
2. **Environment Configuration**
3. **Database Setup**
4. **Run Server**

### Form Schema
```javascript
{
  name: String (required),
  email: String (required, validated),
  phone: String (required, validated),
  date: Date,
  time: String,
  adults: String,
  children: String,
  message: String,
}
```

## 🗄️ Part 3: Schema Design - Cashify-like Platform

### Core Entities

#### Users Collection

#### Address Collection

#### Device Model Collection

#### Listing Collection

#### Offer Collection

#### Orders Collection

#### Payments Collection

#### Wallet Collection

#### Transactions Collection

#### Quotes Collection

#### Inventory Collection

## 🔧 Environment Variables

### Frontend (.env)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_HOST_URL=http://localhost:3000
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/entrex
CORS_ORIGIN=http://localhost:3000
```

---

**Note**: This README serves as a comprehensive guide for the complete development task. Each part should be implemented following the specified requirements and best practices outlined above.
