"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(""); // Add error state

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const OnSignUp = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error state before making the request

      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.error("SignUp failed", error.message);
      setError("Sign up failed. Please try again."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#febbcc]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* ... Your logo and other content ... */}

        <div className="w-full bg-gradient-to-tr from-[#febbcc] via-[#ffeecc] to-[#fcc2d1] rounded-2xl overflow-hidden shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up for an account
            </h1>
            <div className="space-y-4 md:space-y-6 text-black rounded-2xl">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-[#ffeecc] border border-[#febbcc] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="username"
                  required
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
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

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button
                className={`w-full text-white bg-[#54273c] hover:bg-[#54273c]/[0.8] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={OnSignUp}
                disabled={loading || buttonDisabled}
              >
                {loading ? "Signing up..." : "Create an account"}
              </button>
              <p className="text-sm font-light text-gray-500">
                Already a user?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#54273c] hover:underline"
                >
                  Login Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
