# 🚀 Reach AI

> Generate highly personalized cold emails in seconds using your Resume and a Job Description.

Reach AI is a full-stack AI-powered web application that helps job seekers create professional and personalized cold emails. Simply paste your resume and the job description, and Reach AI generates a tailored cold email using Groq LLMs.

---

## ✨ Features

- 🤖 AI-powered personalized cold email generation
- 📄 Resume content analysis
- 💼 Job description analysis
- 🎯 Skill matching between resume and job description
- 📝 Professional email formatting
- 🔒 Secure API integration using Supabase Edge Functions
- ⚡ Fast AI responses using Groq API
- 📱 Fully responsive dark UI

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS

### Backend

- Supabase Edge Functions
- Deno Runtime

### AI

- Groq API
- Llama 3.3 70B Versatile

### Deployment

- Vercel / Netlify (Frontend)
- Supabase (Backend)

---

# 📂 Project Structure

```text
ReachAI/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── left/
│   │   └── right/
│   ├── App.jsx
│   ├── supabase.js
│   └── main.jsx
│
├── supabase/
│   └── functions/
│       └── api/
│           └── index.ts
│
├── .env.example
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/reach-ai.git
```

Go to project folder

```bash
cd reach-ai
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL

VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

> **Note**
>
> Groq API Key is **NOT** stored in the frontend.
>
> It is securely stored inside **Supabase Secrets**.

---

# 🔒 Backend Setup

Install Supabase CLI

```bash
npm install -g supabase
```

Login

```bash
supabase login
```

Initialize

```bash
supabase init
```

Link Project

```bash
supabase link --project-ref YOUR_PROJECT_REF
```

Store Groq Secret

```bash
supabase secrets set GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Deploy Function

```bash
supabase functions deploy api
```

---

# ▶️ Run Locally

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🚀 Deployment

## Frontend

Deploy using

- Vercel
- Netlify

Add these Environment Variables

```env
VITE_SUPABASE_URL=

VITE_SUPABASE_ANON_KEY=
```

---

## Backend

Whenever you update the backend

```bash
supabase functions deploy api
```

---

# 🔐 Security

Unlike traditional frontend AI integrations, Reach AI never exposes the Groq API Key to users.

### Architecture

```text
React Frontend
        │
        ▼
Supabase Edge Function
        │
        ▼
Groq API
        │
        ▼
Generated Cold Email
```

### Why Edge Functions?

- API Key remains secure
- No `dangerouslyAllowBrowser`
- Users cannot access the secret key
- Production-ready architecture
- Better scalability

---

# 📋 How It Works

1. User pastes Resume.
2. User pastes Job Description.
3. React sends data to Supabase Edge Function.
4. Edge Function securely accesses the Groq API Key.
5. Groq generates a personalized cold email.
6. Response is returned to the frontend.

---

# 💡 Future Improvements

- PDF Resume Upload
- DOCX Resume Support
- Email Copy Button
- Download as PDF
- ATS Resume Analysis
- Cover Letter Generator
- LinkedIn Message Generator
- Email Templates
- AI Tone Selection
- Email History
- Authentication
- Database Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Vishwash Soni**

- GitHub: https://vishwash-soni-portfolio.netlify.app/
- LinkedIn: https://www.linkedin.com/in/vishwash-soni-732414263/
- Portfolio: https://vishwash-soni-portfolio.netlify.app/

---

## ⭐ If you found this project helpful, consider giving it a Star!
