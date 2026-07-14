import "./App.css";
import logo from "./assets/logo.svg";
import Leftside from "./components/left/Leftside";
import Right from "./components/right/Right";
import { useState } from "react";
import supabase from "./supabase";

function App() {
  const [resumeData, setResumeData] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  async function generateEmail() {
    const { data, error } = await supabase.functions.invoke("api", {
      body: {
        resumeData,
        jobDescription,
      },
    });

    if (error) {
      console.error(error);
      return;
    }

    setGeneratedEmail(data.email);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-center gap-4 py-4 border-b border-gray-700 px-4">
        <img src={logo} alt="Logo" className="w-14 h-14 sm:w-16 sm:h-16" />

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Reach <span className="text-blue-500">AI</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Generate personalized cold emails in seconds.
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col lg:flex-row flex-1 gap-4 p-4 overflow-hidden">
        {/* Left */}
        <div className="w-full lg:w-1/3 bg-gray-800 rounded-xl p-4">
          <Leftside
            resumeData={resumeData}
            jobDescription={jobDescription}
            setResumeData={setResumeData}
            setJobDescription={setJobDescription}
            generateEmail={generateEmail}
          />
        </div>

        {/* Right */}
        <div className="w-full lg:w-2/3 bg-gray-800 rounded-xl p-4 flex flex-col min-h-[400px]">
          <Right generatedEmail={generatedEmail} />
        </div>
      </main>
    </div>
  );
}

export default App;