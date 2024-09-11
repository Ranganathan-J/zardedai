# Cover Letter AI

A web application that generates personalized cover letters and cold emails based on a job description and the user's profile. Simply paste a job link, and the AI will generate a tailored cover letter using the latest NLP models.

## Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
This application uses React for the frontend, Python (Flask) for the backend, and Groq for AI-based text generation. Users input a job description URL or paste the details directly into the interface, and the system generates a customized cover letter or cold email tailored to the job and the user's profile.

## Demo

Watch the demo(https://youtu.be/vlSG5fnIQWk)


## Features
- Parse job descriptions from a URL
- Generate personalized cover letters and cold emails
- Integrate user details such as name, contact information, and skills
- Output formatted cover letters with links to GitHub, LinkedIn, and portfolio

## Technologies Used
- **Frontend:** React
- **Backend:** Python (Flask)
- **AI Model:** Groq
- **NLP:** Large Language Models (LLMs)

## Installation

### Prerequisites
Make sure you have the following installed:

- Python 3.x
- Node.js
- npm or yarn

### Backend Setup (Flask)
1. Navigate to the backend folder:
   ```bash
   cd coverletter-ai/backend
   ```
2. Install dependencies:
```bash
  pip install -r requirements.txt
```
3. Run the Flask server:
```bash
  python app.py
```
Frontend Setup (React)
1. Navigate to the frontend folder:
```bash
  cd ../frontend
```
2. Install dependencies:
```bash
  npm install
```
3. Run the React app:
```bash
  npm run dev
```
## Usage
1. Start the Flask server and React app as described above.
2. Open your browser and go to `http://localhost:3000`.
3. Paste a job description link or job details.
4. Fill in your personal details (e.g., name, email, GitHub, LinkedIn).
5. Generate your cover letter or cold email.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you have any improvements or suggestions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

