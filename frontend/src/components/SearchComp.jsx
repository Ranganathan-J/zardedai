import { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

function SearchComp() {
  const [jobUrl, setJobUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/generate-cover-letter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job_url: jobUrl }),
      }
    );

    const data = await response.json();
    setCoverLetter(data.cover_letter);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          AI Cover Letter Generator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label
            htmlFor="jobUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Job URL:
          </label>
          <input
            type="text"
            id="jobUrl"
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="Paste the job posting URL here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Generate Cover Letter
          </button>
        </form>

        {coverLetter && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4 relative">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Your Generated Cover Letter:
            </h2>
            <pre className="whitespace-pre-wrap text-gray-600">
              {coverLetter}
            </pre>

            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 text-gray-500 hover:text-blue-500"
              aria-label="Copy to clipboard"
            >
              <ClipboardIcon className="w-6 h-6" />
            </button>

            {copied && (
              <span className="absolute top-2 right-10 text-sm text-green-500">
                Copied!
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchComp;
