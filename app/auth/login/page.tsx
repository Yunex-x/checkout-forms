"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login attempt:", formData);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ submit: "Invalid email or password. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    try {
      console.log(`Logging in with ${provider}`);
      alert(`${provider} login coming soon!`);
    } catch (error) {
      console.error(`${provider} login error:`, error);
    }
  };
  return (
    <main className="flex screen h-[1024px] mx-auto bg-[#FAFAFA]">

      {/* LEFT ILLUSTRATION */}
      <div className="w-[720px] h-full p-[30px]">
        <div className="w-full h-full bg-[#ECEFF2] rounded-[24px] flex items-center justify-center">
          <Image
            src="/Auth.svg"
            alt="Illustration"
            width={500}
            height={720}
            priority
          />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-[720px] h-full flex flex-col items-center justify-center px-[120px] relative">

        {/* LOGO */}
        <div className="absolute top-[40px] right-[40px] flex items-center gap-[6px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
          <span className="text-[25px] font-bold text-[#1B85F3]">Appso</span>
        </div>

        {/* TITLE */}
        <div className="text-center mb-[42px]">
          <h1 className="text-[36px] font-semibold text-[#39434F] mb-[16px]">
            Login
          </h1>
          <p className="text-[16px] text-[#808B9A]">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="w-[480px] flex flex-col">

          {/* EMAIL */}
          <div className="flex flex-col gap-[6px] mb-[34px]">
            <input
              type="email"
              placeholder="joe.doe@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`h-[54px] px-[16px] rounded-[14px] border focus:outline-none bg-white transition-colors ${focusedField === "email" ? "border-[#1B85F3]" : errors.email ? "border-red-500" : "border-[#D9DFE6]"
                }`}
            />
            {errors.email && (
              <span className="text-[12px] text-red-500 px-[4px]">
                {errors.email}
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-[6px] mb-[16px]">
            <div className={`flex items-center h-[54px] px-[16px] rounded-[14px] border bg-white gap-[8px] ${focusedField === "password" ? "border-[#1B85F3]" : errors.password ? "border-red-500" : "border-[#D9DFE6]"
              }`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className="flex-1 outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-[12px] text-red-500 px-[4px]">
                {errors.password}
              </span>
            )}
          </div>

          {/* REMEMBER */}
          <label className="flex items-center gap-[8px] text-[14px] text-[#808B9A] mb-[42px] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.remember}
              onChange={(e) => handleChange("remember", e.target.checked)}
              className="w-[16px] h-[16px] cursor-pointer"
            />
            Remember information
          </label>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`h-[54px] rounded-[14px] text-white font-medium mb-[8px] transition-colors ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-[#1B85F3] hover:bg-[#1570D9]"
              }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          {errors.submit && (
            <span className="text-[14px] text-red-500 text-center mb-[8px]">
              {errors.submit}
            </span>
          )}

          {/* FORGOT */}
          <a
            href="#"
            className="text-center text-[14px] text-[#1B85F3] mb-[42px]"
          >
            Forget password?
          </a>

          {/* DIVIDER */}
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="flex-1 h-px bg-[#D9DFE6]" />
            <span className="text-[14px] text-[#808B9A]">or</span>
            <div className="flex-1 h-px bg-[#D9DFE6]" />
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-[20px]">
            {[
              { name: "Google" },
              { name: "Facebook" },
              { name: "Apple" },
            ].map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleSocialLogin(item.name)}
                className="
        h-[54px]
        w-full
        bg-white
        border border-[#D9DFE6]
        rounded-[14px]
        flex items-center
        px-[20px]
        text-[14px]
        text-[#39434F]
        hover:bg-gray-50
        transition-colors
      "
              >
                {/* ICON */}
                {item.name === "Google" && (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.44 14.3182C27.44 13.3255 27.3509 12.371 27.1854 11.4546H14V16.87H21.5345C21.21 18.62 20.2236 20.1028 18.7409 21.0955V24.6082H23.2654C25.9127 22.1709 27.44 18.5819 27.44 14.3182Z" fill="#4285F4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9999 28.0001C17.7799 28.0001 20.949 26.7465 23.2653 24.6083L18.7408 21.0956C17.4872 21.9356 15.8835 22.432 13.9999 22.432C10.3535 22.432 7.26719 19.9692 6.16628 16.6602H1.48901V20.2874C3.79265 24.8629 8.52719 28.0001 13.9999 28.0001Z" fill="#34A853" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.16636 16.6602C5.88636 15.8202 5.72726 14.9229 5.72726 14.0002C5.72726 13.0774 5.88636 12.1802 6.16636 11.3402V7.71289H1.48909C0.540908 9.60289 0 11.7411 0 14.0002C0 16.2592 0.540908 18.3974 1.48909 20.2874L6.16636 16.6602Z" fill="#FBBC05" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9999 5.56817C16.0554 5.56817 17.9008 6.27454 19.3517 7.66181L23.3672 3.64636C20.9426 1.38727 17.7735 0 13.9999 0C8.52718 0 3.79265 3.13727 1.48901 7.71272L6.16628 11.34C7.26719 8.0309 10.3535 5.56817 13.9999 5.56817Z" fill="#EA4335" />
                  </svg>
                )}
                {item.name === "Facebook" && (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#1877F2" />
                    <path d="M19.5 14C19.5 10.9624 17.0376 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 16.7089 10.4578 18.9822 13.0312 19.4297V15.7031H11.5781V14H13.0312V12.7469C13.0312 11.3116 13.9271 10.4844 15.2464 10.4844C15.8803 10.4844 16.5469 10.6016 16.5469 10.6016V12.0156H15.8121C15.0889 12.0156 14.8594 12.4662 14.8594 12.9281V14H16.4766L16.2146 15.7031H14.8594V19.4297C17.4329 18.9822 19.5 16.7089 19.5 14Z" fill="white" />
                  </svg>
                )}
                {item.name === "Apple" && (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5833 14.7778C21.5685 12.0667 23.8685 10.7593 23.9722 10.6889C22.7148 8.87407 20.7722 8.62963 20.0648 8.60741C18.4037 8.43704 16.7981 9.62963 15.9537 9.62963C15.0944 9.62963 13.7722 8.62222 12.363 8.65185C10.5519 8.68148 8.8537 9.75556 7.92593 11.4593C5.99815 14.9481 7.42593 20.0444 9.27963 22.8815C10.2074 24.2815 11.2963 25.8444 12.7037 25.7926C14.0833 25.7333 14.5981 24.9111 16.2519 24.9111C17.8907 24.9111 18.3648 25.7926 19.8019 25.7556C21.2833 25.7333 22.2296 24.3481 23.1204 22.9333C24.1926 21.3185 24.6296 19.7333 24.6444 19.6481C24.613 19.637 21.6019 18.5185 21.5833 14.7778Z" fill="black" />
                    <path d="M18.6963 6.57037C19.4481 5.65185 19.963 4.40741 19.8148 3.14815C18.7481 3.19259 17.4296 3.88889 16.6481 4.79259C15.9593 5.58519 15.3444 6.87037 15.5074 8.08148C16.7037 8.17778 17.9296 7.48148 18.6963 6.57037Z" fill="black" />
                  </svg>
                )}

                {/* DIVIDER */}
                <span className="mx-[16px] h-[24px] w-px bg-[#D9DFE6]" />

                {/* TEXT */}
                <span className="flex-1 text-center">
                  Login with {item.name}
                </span>
              </button>
            ))}
          </div>


          {/* FOOTER */}
          <p className="text-center text-[14px] text-[#808B9A] mt-[42px]">
            First time here?{" "}
            <Link href="/auth/signup" className="text-[#1B85F3] font-semibold">
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
