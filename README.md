# CV Optimizer AI

A smart, **Next.js and Google Gemini-powered CV review application** built to help job seekers beat the ATS (Applicant Tracking System) algorithm. It analyzes resumes against specific job descriptions to find missing keywords and optimize application success.

🚀 **Live Demo:** [comparecv.vercel.app](https://vercel.app)

---

## 📌 The Problem & The Solution

* **The Problem:** Job seekers apply to dozens of roles on LinkedIn and Indeed but rarely hear back. This is because recruiters use automated ATS scanners that filter out CVs before a human ever sees them. It is hard to "sell" your CV if the system rejects it instantly.
* **The Solution:** This project bridges that gap. It provides a direct, instant comparison between a user's CV and a target Job Description. It highlights **missed keywords**, gaps in phrasing, and gives actionable feedback to improve readability for both algorithms and recruiters.

---

## 🛠️ Tech Stack

* **Framework:** Next.js
* **AI Engine:** Google Gemini API 
* **Deployment:** Vercel

---

## 🧠 Core Engineering & What I Learned

Building this project served as a deep dive into AI integration and full-stack architecture:
* **LLM Workflows:** Mastered how to structure the workflow between user inputs (CV text + Job Description) and the AI model.
* **Prompt Engineering:** Learned how to write strict rules, constraints, and instructions to ensure the AI behaves predictably and accurately.
* **Structured Data:** Forced the AI to return responses matching a strict **Object Data/JSON structure**, making it easy to map data directly to UI components.

---

## 🔮 Roadmap & Upcoming Features (In Progress)

The project is actively being developed. I am currently working on a smart **CV Optimization** engine:
* **Auto-Optimization:** A feature that updates keywords and phrasing to match the job description dynamically.
* **Strict Integrity Rules:** The optimization engine will **never** alter your actual work experience, change your skills, or invent fake details. It improves visibility without turning the user into a liar.
* **Side-by-Side Comparison:** View the original vs. optimized CV to inspect every single change made by the AI.
* **Download CV:** Export the newly optimized resume as a clean file, ready to apply immediately.

---

## 📦 Local Installation & Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your API key:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
