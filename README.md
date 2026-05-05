# 🍽️ FreshBite – Food & Grocery Ordering App

A full-featured food and grocery ordering web app built with **React + Tailwind CSS + Supabase**.

## 📦 Tech Stack
- ⚛️ React 18 + React Router v6
- 🎨 Tailwind CSS 3
- ⚡ Vite 5
- 🗄️ Supabase (Phone OTP Auth)

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Supabase (for real OTP)
Open `src/lib/supabase.js` and replace:
```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
```

Go to https://supabase.com → New Project → Settings → API to get these values.
Also enable **Phone Auth** in Supabase → Authentication → Providers.

### 3. Start development server
```bash
npm run dev
```
Open: **http://localhost:5173**

---

## 🧪 Demo Mode (No Supabase needed)
- Enter any 10-digit phone number
- OTP will be auto-accepted (any 6-digit code works)

---

## 📱 Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section |
| Auth | `/auth` | Phone + OTP login via Supabase |
| Location | `/location` | Pick city or use GPS |
| Name | `/name` | Enter your name |
| Shop | `/shop` | Food 🍽️ and Grocery 🛒 sections |
| Cart | `/cart` | Cart with bill summary |
| Payment | `/payment` | COD, UPI, Card, Netbanking |
| Success | `/success` | Animated ✅ flying to profile |

## 🎨 Features
- ✅ Phone OTP via Supabase
- ✅ 12 Popular Indian cities to choose from
- ✅ Food & Grocery sections (fully separated)
- ✅ Add/Remove from cart with live counter
- ✅ Floating cart bar with total
- ✅ Free delivery above ₹299
- ✅ 4 payment methods (COD, UPI, Card, Netbanking)
- ✅ Animated ✅ tick flying to profile on order success
- ✅ Persisted cart & user in localStorage
- ✅ Protected routes

## 🏗️ Build for Production
```bash
npm run build
```
