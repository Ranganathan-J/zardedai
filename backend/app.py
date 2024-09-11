from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_core.prompts import PromptTemplate
from langchain.document_loaders import WebBaseLoader
from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Get API key and model name from environment variables
groq_api_key = os.getenv('GROQ_API_KEY', 'your_default_key')
model_name = os.getenv('MODEL_NAME', 'llama-3.1-70b-versatile')

llm = ChatGroq(
    temperature=0, 
    groq_api_key=groq_api_key, 
    model_name=model_name
)

links = {
    "GitHub": "https://github.com/RanganathanJ",
    "LinkedIn": "https://linkedin.com/in/RanganathanJ",
    "Portfolio": "https://ranganathan-j.vercel.app"
}

def format_links(links):
    formatted_links = "\n".join([f"{key}: {value}" for key, value in links.items()])
    return formatted_links

# Function to scrape and extract job data from a webpage
def extract_job_data(url):
    try:
        # Scrape the webpage using LangChain WebBaseLoader
        loader = WebBaseLoader(url)
        page_data = loader.load().pop().page_content

        # Define the prompt template for extracting job details
        prompt_extract = PromptTemplate.from_template(
            """
            ### SCRAPED TEXT FROM WEBSITE:
            {page_data}
            ### INSTRUCTION:
            The scraped text is from the career's page of a website.
            Your job is to extract the job postings and return them in JSON format containing the 
            following keys: `role`, `experience`, `skills` and `description`.
            Only return the valid JSON.
            ### VALID JSON (NO PREAMBLE):
            """
        )

        # Run the prompt through the LLM to extract job details
        chain_extract = prompt_extract | llm
        res = chain_extract.invoke(input={'page_data': page_data})
        
        return res.content  # Return the extracted JSON

    except Exception as e:
        return jsonify({"error": str(e)})

# Function to generate a concise cover letter based on the job description
def generate_cover_letter(job_description):
    prompt_cover_letter = PromptTemplate.from_template(
        """
        ### JOB DESCRIPTION:
        {job_description}
        
        ### INSTRUCTION:
        You are Ranganathan J, a recent graduate in Computer Science and Engineering with skills in software development, machine learning, and web technologies. 
        Your job is to write a concise and formal cover letter for the job posting provided. 
        Highlight how your skills, projects, and achievements align with the job requirements and how you can contribute to the company's goals. 
        Include your contact links at the end of the letter.

        ### COVER LETTER:
        """
    )
    
    chain_cover_letter = prompt_cover_letter | llm
    result = chain_cover_letter.invoke({"job_description": job_description})
    
    # Add formatted links to the end of the cover letter
    cover_letter = result.content
    formatted_links = format_links(links)
    return f"{cover_letter}\n\n{formatted_links}"

# API endpoint to scrape the job description and generate a cover letter
@app.route('/generate-cover-letter', methods=['POST'])
def generate_cover_letter_route():
    try:
        data = request.json
        job_url = data.get('job_url')

        if not job_url:
            return jsonify({"error": "Job URL is required"}), 400

        # Step 1: Extract the job data from the URL
        job_data = extract_job_data(job_url)

        if 'error' in job_data:
            return job_data, 500

        # Step 2: Generate the cover letter based on the extracted job data
        cover_letter = generate_cover_letter(job_data)

        return jsonify({"cover_letter": cover_letter})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
