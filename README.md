# 🌲 WareHouse-TrailStock--client

TrailStock is a hiking inventory management website where users can explore hiking gear, manage stock, track items, and view analytics. This repository contains the **React.js frontend** built with modern tools and libraries for a smooth user experience.

---

## 🚀 Features

- 🖥️ Built with **React.js** + **Tailwind CSS** + **DaisyUI**
- 🔑 Authentication with **Firebase** (Email/Password, Google, GitHub)
- 🔒 Secured API requests using **JWT token**
- 📊 Interactive chart with **Recharts** (Item Price vs Sold)
- 🎬 Animations using **Lottie Files**
- ⚡ Sweet and elegant alerts via **SweetAlert2**
- 🔄 Pagination support for item listings
- 🌐 Axios instance for API requests
- 👤 Manage items you added, update stock, delete items
- ➕ Add new hiking inventory items

---

## 🛠️ Tech Stack

- ⚛️ **React.js** – Component-based frontend library
- 🎨 **Tailwind CSS + DaisyUI** – Utility-first & UI components styling
- 🔑 **Firebase Authentication + JWT Authorization** – Secure login & API protection
- 🌐 **Axios (with Axios Instance)** – Simplified API requests
- 📊 **Recharts** – Data visualization for charts
- ⚠️ **SweetAlert2** – Beautiful alerts & confirmation dialogs
- 🎬 **Lottie-react** – Smooth vector animations using Lottie files

---

## 📁 Folder Structure

```bash
WareHouse-client/
├── API/
│     └── axiosInstance.js
├── dist/
├── node_modules/
├── public/
├── screenshots/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Accounts_Related/
│   │   │   ├── Auth/
│   │   │   │   └── Auth.jsx
│   │   │   ├── SignIn/
│   │   │   │   └── SignIn.jsx
│   │   │   └── SignUp/
│   │   │       └── SignUp.jsx
│   │   │
│   │   ├── AddItem/
│   │   │   └── AddItem.jsx
│   │   │
│   │   ├── Context_&_Observer/
│   │   │   ├── Authcontext.jsx
│   │   │   ├── Authprovider.jsx
│   │   │   └── useAuth.jsx
│   │   │
│   │   ├── ErrorRoute/
│   │   │   ├── ErrorRoute.css
│   │   │   └── ErrorRoute.jsx
│   │   │
│   │   ├── Home/
│   │   │   ├── CardDetails/
│   │   │   │   ├── CardDetails.css
│   │   │   │   └── CardDetails.jsx
│   │   │   ├── Chart/
│   │   │   │   └── Chart.jsx
│   │   │   ├── HomeInventoryItems/
│   │   │   │   └── HomeInventoryItems.jsx
│   │   │   ├── InventoryCard/
│   │   │   │   └── InventoryCard.jsx
│   │   │   ├── InventoryOverview/
│   │   │   │   └── InventoryOverview.jsx
│   │   │   ├── Mailingsection/
│   │   │   │   └── Mailingsection.jsx
│   │   │   ├── Swipper/
│   │   │   │   ├── SwipperSlider.css
│   │   │   │   └── SwipperSlider.jsx
│   │   │   ├── Timeline/
│   │   │   │   └── Timeline.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Loader/
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── ManageInventories/
│   │   │   └── ManageInventories.jsx
│   │   │
│   │   ├── MyItems/
│   │   │   ├── MyItemCard.jsx
│   │   │   └── MyItems.jsx
│   │   │
│   │   ├── PrivateRoute/
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── QnA/
│   │   │   ├── QnA.css
│   │   │   └── QnA.jsx
│   │   │
│   │   ├── Shared/
│   │   │   ├── Footer/
│   │   │   │   └── Footer.jsx
│   │   │   └── Navbar/
│   │   │       └── Navbar.jsx
│   │   │
│   │   ├── firebase.init.js
│   │   └── Router.jsx
│   │
│   ├── addCardLottie.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## 📂 Project Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Pritom07/WareHouse-TrailStock--client.git
cd WareHouse-TrailStock--client
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Setup environment variables
Create a .env.local file in the root folder and add your own Firebase credentials (from your Firebase Console → Project Settings → SDK setup & configuration).

```bash
# Backend API
VITE_BACKEND_LIVE_LINK=your_backend_live_link

# Firebase Config
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

⚠️ Note: Anyone who clones this repo must create their own Firebase project and replace the values above with their own. Otherwise, authentication will not work.

4️⃣ Run the project

```bash
npm run dev
```

---

## 📸 Screenshots

### 🏔️ Inventory Slider

![Inventory Slider](/screenshots/home1.PNG)

### 🕒 Timeline

![Timeline](/screenshots/home2.PNG)

### 📊 Price vs Sold Chart

![Price vs Sold](/screenshots/home3.PNG)

### 📧 Mailing Section

![Mailing Section](/screenshots/home4.PNG)

### 📦 All Inventories

![All Inventories](/screenshots/manageinventories.PNG)

### 👤 My Items

![My Items](/screenshots/myitems.PNG)

### ➕ Add Item

![Add Item](/screenshots/additem.PNG)

### ❓ QnA Section

![QnA Section](/screenshots/qna.PNG)

### 🔑 Authentication (Login Page)

![Login Page](/screenshots/signin.PNG)
