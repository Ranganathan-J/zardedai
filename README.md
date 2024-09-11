Cover Letter AI
A web application that generates personalized cover letters and cold emails based on a job description and the user's profile. Simply paste a job link, and the AI will generate a tailored cover letter using the latest NLP models.

Table of Contents
Overview
Demo
Features
Technologies Used
Installation
Usage
Contributing
License
Overview
This application uses React for the frontend, Python (Flask) for the backend, and Groq for AI-based text generation. Users input a job description URL or paste the details directly into the interface, and the system generates a customized cover letter or cold email tailored to the job and the user's profile.

Demo
Video coming soon...

Features
Parse job descriptions from a URL
Generate personalized cover letters and cold emails
Integrate user details such as name, contact information, and skills
Output formatted cover letters with links to GitHub, LinkedIn, and portfolio
Technologies Used
Frontend: React
Backend: Python (Flask)
AI Model: Groq
NLP: Large Language Models (LLMs)
Installation
Prerequisites
Make sure you have the following installed:
Python 3.x
Node.js
npm or yarn
Backend Setup (Flask)
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/coverletter-ai.git
Navigate to the backend folder:
bash
Copy code
cd coverletter-ai/backend

Install dependencies:
pip install -r requirements.txt

Run the Flask server:
python app.py


Frontend Setup (React)
Navigate to the frontend folder:
cd ../frontend

Install dependencies:
npm install
Run the React app:

npm run dev
Usage
Start the Flask server and React app as described above.
Open your browser and go to http://localhost:3000.
Paste a job description link or job details.
Fill in your personal details (e.g., name, email, GitHub, LinkedIn).
Generate your cover letter or cold email.
Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have any improvements or suggestions.

License
This project is licensed under the MIT License - see the LICENSE file for details.
