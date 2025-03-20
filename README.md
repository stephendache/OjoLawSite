# The Ojo Law Center, LLC - Immigration Law Website

🚀 **A Professional U.S. Immigration Law Website** built with **Node.js, Express, and EJS** to provide clients with legal services and information on U.S. immigration processes.

## 📌 Features
✅ SEO Optimized (Sitemap, Robots.txt, Structured Data)
✅ Secure (Helmet, Rate Limiting, HTTPS Ready)
✅ Fast (Gzip Compression, Caching, Minified Assets)
✅ Fully Responsive & Accessible Design
✅ Contact & Consultation Booking System
✅ Google Analytics & Event Tracking Integration

---

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/ojo-law-center.git
cd ojo-law-center
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env` File**
Create a `.env` file in the root directory and add:
```env
PORT=3000
NODE_ENV=development
```

### **4️⃣ Run the Server**
```sh
npm run dev  # Starts server in development mode with nodemon
npm start    # Starts server normally
```

The site will run on **`http://localhost:3000`**.

---

## 📁 Project Structure
```
📦 ojo-law-center
 ┣ 📂 public          # Static files (CSS, JS, images)
 ┣ 📂 views           # EJS templates (Home, About, Services, Contact, etc.)
 ┣ 📂 routes          # Express routes for each page
 ┣ 📂 controllers     # Route logic handlers
 ┣ 📂 utils           # Helper functions (sitemap, image optimization)
 ┣ 📜 index.js        # Main Express server file
 ┣ 📜 .env            # Environment variables
 ┣ 📜 package.json    # Project metadata and dependencies
 ┗ 📜 README.md       # Project documentation
```

---

## 🔗 SEO & Performance Enhancements
- **✅ Sitemap Auto-Generated & Updated** (`sitemap.xml`)
- **✅ Robots.txt Configured** (`robots.txt`)
- **✅ Google Analytics & Conversion Tracking**
- **✅ WebP Image Optimization & Lazy Loading**
- **✅ Gzip Compression & Minified Assets**

---

## 🚀 Deployment
### **Deploy to Vercel**
```sh
npm install -g vercel
vercel
```

### **Deploy to DigitalOcean**
1. Setup a **Droplet** (Ubuntu 22.04)
2. Install Node.js:
```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Clone repo & run server:
```sh
git clone https://github.com/yourusername/ojo-law-center.git
cd ojo-law-center
npm install
npm start
```

---

## 📞 Contact
For any legal assistance, visit **[The Ojo Law Center](https://www.ojolaw.com)** or contact:
📧 Email: ojo@ojolaw.com
📞 Phone: +1 (240) 486-1996

---

© 2025 The Ojo Law Center, LLC. All Rights Reserved.
