"use client";
import axios from "axios";

import { useEffect, useState } from "react";
import Options from "../components/Options";

const API = "http://localhost:5000/";
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const getQuestions = async () => {
    let res = await axios.get(`${API}get-questions`);
    console.log("res", res);
    setQuestions(res.data);
    setAnswers(Array(res.data.length).fill(null));
  };

  const saveResult = async (res) => {
    try {
      //   setLoading(true);
      const response = await axios.put("/api/users/me", {
        result: res,
      });
      console.log(response);

      //   router.push("/profile");
    } catch (error) {
      console.error("Login failed: " + error.message);
      //   setError("Login failed. Please check your credentials.");
    } finally {
      //   setLoading(false);
    }
  };

  const handleSelect = async (choiceIndex) => {
    setDisabled(true);
    if (current < questions?.length - 1) {
      if (choiceIndex >= 0 && choiceIndex < questions.length) {
        setCurrent(current + 1);
        const updatedAnswers = [...answers];
        updatedAnswers[current] = choiceIndex + 1;
        setAnswers(updatedAnswers);
        setSelected(null);
      }
    } else if (current === questions?.length - 1) {
      const updatedAnswers = [...answers];
      updatedAnswers[current] = choiceIndex + 1;
      setAnswers(updatedAnswers);
      setSelected(null);
      try {
        let res = await axios.post(`${API}predict`, {
          answers: answers,
        });
        // console.log(res);
        setResult(res.data);
        saveResult(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    setDisabled(false);
  };
  console.log(answers);

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#febbcc]">
      <div className="flex flex-col justify-center w-1/2 h-screen transition-all duration-300 ease-in items center">
        {!result ? (
          <>
            <h2 className="p-4 text-xl font-semibold rounded-lg bg-[#febbcc] bg-opacity-20 shadow-lg border border-[#ffeecc] text-center">
              {questions[current]?.question}
            </h2>
            <Options
              choices={questions[current]?.options}
              onSelect={handleSelect}
              value={answers[current]}
              selected={selected}
              disabled={disabled}
            />
          </>
        ) : (
          <div className="text-center flex flex-col justify-center items-center border-spacing-y-4 rounded-lg min-h-[80vh] ">
            <div className="pb-1 text-4xl border-b-4 border-[#54273c] mb-8 tracking-widest">
              RESULT
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                stroke="#FF8A65"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M12 2.45v0"
                stroke="#FF8A65"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.5 2.85v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.85v0M6.5 21.2v0"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 21.5v0M1.55 12v0M22.5 12v0"
                stroke="#FF8A65"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div
              className="mt-8 text-2xl font-bold"
              style={{ whiteSpace: "pre-line" }}
            >
              {result.substring(0, result?.indexOf("."))}
            </div>
            <div className="mt-8 text-xl" style={{ whiteSpace: "pre-line" }}>
              {result.substring(result?.indexOf(".") + 1, result.length)}
            </div>
            <a href="/profile" className="w-full">
              <button className="w-full md:w-1/2 mt-8 px-3 py-2 bg-[#54273c] text-white rounded-lg">
                Back to Profile
              </button>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
