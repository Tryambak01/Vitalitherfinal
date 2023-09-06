"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      router.push("/profile");
    } catch (error: any) {
      console.error("Login failed: " + error.message);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#febbcc]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="mr-2"
            fill="none"
          >
            <path
              d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              stroke="#febbcc"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M12 2.45v0"
              stroke="#febbcc"
              stroke-width="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.5 2.85v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.85v0M6.5 21.2v0"
              stroke="#febbcc"
              stroke-width="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 21.5v0M1.55 12v0M22.5 12v0"
              stroke="#febbcc"
              stroke-width="2"
              stroke-linecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          VitalityHer
        </a>
        <div className="w-full bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#fcc2d1] rounded-2xl overflow-hidden shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6 text-black rounded-2xl">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#ffeecc] border border-[#febbcc] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#ffeecc] border border-[#febbcc] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <button
                className="w-full text-white bg-[#54273c] hover:bg-[#54273c]/[0.8] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
                disabled={loading || buttonDisabled}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  className="font-medium text-[#54273c] hover:underline"
                  href="/signup"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
