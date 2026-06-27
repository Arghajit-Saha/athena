<div align="center">
  <img src="./frontend/public/favicon.svg" alt="Athena Logo" width="60" />
  <h1 style="font-family: sans-serif; font-weight: bold; letter-spacing: -0.02em;">Athena</h1>
  <p><b>AI-Powered Career Intelligence</b></p>
  
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/-JSON_Web_Tokens-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT" />
    <img src="https://img.shields.io/badge/-Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  </div>
</div>

<br />

**Athena** is a professional, AI-driven platform designed to analyze resumes, benchmark them against job descriptions, and generate highly targeted interview preparation materials. It is built to optimize the career trajectory of professionals by providing data-driven insights and realistic mock interview scenarios.

---

## Core Functionality

Athena operates as a complete pipeline from resume upload to interview preparation, with a heavy emphasis on generating highly curated, actionable interview strategies.

1. **Intelligent Analysis Engine:** Users upload their resume in PDF format alongside a target job description. The platform utilizes Google's Gemini AI to parse, interpret, and align the candidate's historical experience with the specific requirements of the role.
2. **Match Scoring & Gap Analysis:** The system generates an ATS-style numerical match score, instantly identifying critical skill overlaps and areas requiring development.
3. **Curated Interview Strategy:** Athena transcends generic interview advice by constructing a customized preparation strategy based strictly on the candidate's unique profile:
   - **Technical Questions:** Generates highly specific technical inquiries aimed at validating claimed skills and probing areas where the candidate may fall short of the job description.
   - **Behavioral Scenarios:** Curates bespoke behavioral prompts tailored to the candidate's actual past experiences, ensuring they can articulate their impact in realistic workplace situations.
   - **Targeted Preparation:** Delivers a cohesive strategy on how to address weaknesses proactively and leverage strengths during the actual interview.
4. **Historical Tracking:** A centralized dashboard allows users to manage past analyses, track their match scores over time, and revisit old interview preparation reports.

---

## Installation & Local Development

### Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally or a MongoDB Atlas URI
- A valid Google Gemini API Key

### 1. Repository Setup
```bash
git clone https://github.com/Arghajit-Saha/athena.git
cd athena

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the `backend` and `frontend` directories respectively.

**`backend/.env`**
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
ALLOWED_ORIGIN=http://localhost:5173
```

**`frontend/.env`**
```env
VITE_API_URL=http://localhost:3000
```

### 3. Execution
The platform must be started as two concurrent processes.

**Backend Server:**
```bash
cd backend
npm run dev
```

**Frontend Development Server:**
```bash
cd frontend
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## Project Structure

```text
athena/
├── backend/                  # Node.js & Express Backend
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Request handlers (Auth, Resume, Profile)
│   │   ├── middlewares/      # JWT authentication & Multer upload
│   │   ├── models/           # Mongoose schemas (User, ResumeReport)
│   │   ├── routes/           # Express API endpoints
│   │   └── services/         # External integrations (Google Gemini AI)
│   ├── .env                  # Backend environment variables
│   ├── package.json
│   └── server.js             # Application entry point
├── frontend/                 # React & Vite Frontend
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable UI elements & contexts
│   │   ├── features/         # Feature-driven modules (Auth, Profile, Resume)
│   │   ├── App.jsx           # Root layout and routing
│   │   └── main.jsx          # React DOM entry
│   ├── .env                  # Frontend environment variables
│   ├── index.html
│   ├── package.json
│   └── vite.config.js        # Vite bundler configuration
└── README.md
```
