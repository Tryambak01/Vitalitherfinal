"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [data, setData] = useState({});
  const [result, setResult] = useState("");
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout"); //gets response from logout route.ts
      console.log("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data);
    setResult(res?.data?.data?.result);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="my-4 text-center flex flex-col justify-center items-center border-spacing-y-4 rounded-lg min-h-[80vh] ">
      <div className="pb-1 text-4xl border-b-4 border-[#54273c] mb-8 tracking-widest">
        LATEST TEST RESULT
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
      {result ? (
        <>
          {" "}
          <div
            className="mt-8 text-2xl font-bold w-1/2"
            style={{ whiteSpace: "pre-line" }}
          >
            {result.substring(0, result?.indexOf("."))}
          </div>
          <div
            className="mt-8 text-xl w-1/2"
            style={{ whiteSpace: "pre-line" }}
          >
            {result.substring(result?.indexOf(".") + 1, result.length)}
          </div>
        </>
      ) : (
        <div
          className="mt-8 text-2xl font-bold w-1/2"
          style={{ whiteSpace: "pre-line" }}
        >
          {"You haven't taken a test yet, Take test!"}
        </div>
      )}
      <a href="/take-test" className="w-full">
        <button className="w-full md:w-1/4 mt-8 px-3 py-2 bg-[#54273c] text-white rounded-lg">
          {result ? "Take Test Again" : "Take Test"}
        </button>
      </a>

      <button
        onClick={logout}
        className="w-full md:w-1/4 mt-8 px-3 py-2 bg-[#54273c] text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
