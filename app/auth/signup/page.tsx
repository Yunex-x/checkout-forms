"use client";

import Image from "next/image";
import { useState, FormEvent, useRef, useEffect } from "react";

const countries = [
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+34", name: "Spain", flag: "🇪🇸" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
];

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowCountryDropdown(false);
            }
        };

        if (showCountryDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCountryDropdown]);

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must agree to the terms";
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
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // TODO: Replace with actual API call
            console.log("Form submitted:", formData);

            // Redirect to success page or login
            // router.push('/auth/login');
            alert("Account created successfully!");
        } catch (error) {
            console.error("Signup error:", error);
            setErrors({ submit: "Failed to create account. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <main className="flex min-h-screen items-center justify-center">
            {/* Root frame */}
            <div className="flex w-screen h-[1024px] bg-[#FAFAFA]">

                {/* LEFT — Illustration */}
                <div className="w-[720px] h-full p-[30px]">
                    <div className="relative h-full w-full rounded-[24px] bg-[#ECEFF2] overflow-hidden">
                        <Image
                            src="/signup.svg"
                            alt="Signup illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT — Form */}
                <div className="relative w-[720px] h-full flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="flex h-full w-full flex-col items-center justify-center p-[120px] gap-[42px]">

                        {/* Logo */}
                        <div className="absolute top-[40px] right-[60px] flex items-center gap-[6px]">
                            <div className="h-[40px] w-[40px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
                            <span className="font-[var(--font-noto)] text-[25px] font-bold text-[#1B85F3]">
                                Appso
                            </span>
                        </div>

                        {/* Title */}
                        <div className="flex flex-col items-center gap-[16px] text-center w-[480px]">
                            <h1
                                className="font-[var(--font-catamaran)] text-[36px] leading-[42px] font-semibold text-[#39434F]"
                            >
                                Create your account
                            </h1>
                            <p
                                className="font-[var(--font-noto)] text-[16px] leading-[24px] text-[#808B9A]"
                            >
                                Hello there! Let’s create your account.
                            </p>
                        </div>

                        {/* Inputs */}
                        <div className="flex w-[480px] flex-col gap-[34px]">

                            {/* First + Last name */}
                            <div className="flex gap-[24px]">
                                <Input
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={(value) => handleChange("firstName", value)}
                                    onFocus={() => setFocusedField("firstName")}
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === "firstName"}
                                    error={errors.firstName}
                                />
                                <Input
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={(value) => handleChange("lastName", value)}
                                    onFocus={() => setFocusedField("lastName")}
                                    onBlur={() => setFocusedField(null)}
                                    isFocused={focusedField === "lastName"}
                                    error={errors.lastName}
                                />
                            </div>

                            <Input
                                placeholder="Email address"
                                type="email"
                                value={formData.email}
                                onChange={(value) => handleChange("email", value)}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === "email"}
                                error={errors.email}
                            />

                            {/* Phone */}
                            <div className="flex flex-col gap-[6px] bg-white" ref={dropdownRef}>
                                <div className={`flex h-[54px] items-center gap-[10px] rounded-[14px] border px-[16px] relative ${focusedField === "phone" ? "border-[#1B85F3] " : errors.phone ? "border-red-500" : "border-[#D9DFE6]"
                                    }`}>
                                    {/* Country dropdown button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                        className="flex items-center gap-[6px] hover:bg-gray-50 px-[6px] py-[4px] rounded-[6px] transition-colors"
                                    >
                                        <span className="text-[16px]">{selectedCountry.flag}</span>
                                        <span className="font-[var(--font-noto)] text-[14px] text-[#39434F] font-medium">
                                            {selectedCountry.code}
                                        </span>
                                        <svg
                                            className={`w-[12px] h-[12px] text-[#808B9A] transition-transform ${showCountryDropdown ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className="h-[20px] w-[1px] bg-white" />

                                    <input
                                        className="flex-1 font-[var(--font-noto)] text-[14px] outline-none text-[#39434F] "
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        onFocus={() => setFocusedField("phone")}
                                        onBlur={() => setFocusedField(null)}
                                    />

                                    {/* Dropdown menu */}
                                    {showCountryDropdown && (
                                        <div className="absolute top-[58px] left-0 w-[240px] bg-white rounded-[12px] border border-[#D9DFE6] shadow-lg z-50 max-h-[280px] overflow-y-auto">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setShowCountryDropdown(false);
                                                    }}
                                                    className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] hover:bg-[#F5F7FA] transition-colors ${selectedCountry.code === country.code ? "bg-[#F0F7FF]" : ""
                                                        }`}
                                                >
                                                    <span className="text-[20px]">{country.flag}</span>
                                                    <div className="flex-1 text-left">
                                                        <div className="font-[var(--font-noto)] text-[14px] text-[#39434F]">
                                                            {country.name}
                                                        </div>
                                                        <div className="font-[var(--font-noto)] text-[12px] text-[#808B9A]">
                                                            {country.code}
                                                        </div>
                                                    </div>
                                                    {selectedCountry.code === country.code && (
                                                        <svg className="w-[16px] h-[16px] text-[#1B85F3]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {errors.phone && (
                                    <span className="text-[12px] text-red-500 font-[var(--font-noto)] px-[4px]">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>

                            <Input
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(value) => handleChange("password", value)}
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === "password"}
                                error={errors.password}
                                hasIcon
                                onIconClick={() => setShowPassword(!showPassword)}
                            />

                        </div>

                        {/* Checkbox */}
                        <div className="flex flex-col w-[480px] gap-[6px]">
                            <div className="flex items-center gap-[8px] text-[14px] text-[#808B9A] font-[var(--font-noto)]">
                                <button
                                    type="button"
                                    onClick={() => handleChange("agreeToTerms", !formData.agreeToTerms)}
                                    className={`h-[16px] w-[16px] rounded-[4px] border flex items-center justify-center ${errors.agreeToTerms ? "border-red-500" : "border-[#C6CED9]"
                                        } ${formData.agreeToTerms ? "bg-[#1B85F3] border-[#1B85F3]" : "bg-white"}`}
                                >
                                    {formData.agreeToTerms && (
                                        <svg className="w-[10px] h-[10px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </button>
                                <span>
                                    I agree to Platform{" "}
                                    <span className="text-[#1B85F3]">Terms of Service</span> and{" "}
                                    <span className="text-[#1B85F3]">Privacy Policy</span>
                                </span>
                            </div>
                            {errors.agreeToTerms && (
                                <span className="text-[12px] text-red-500 font-[var(--font-noto)] px-[4px]">
                                    {errors.agreeToTerms}
                                </span>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-[480px] h-[54px] rounded-[14px] text-white
              font-[var(--font-noto)] text-[16px] font-medium shadow-[0_1px_4px_rgba(139,158,184,0.2)]
              transition-all ${isSubmitting
                                    ? "bg-[#94C2F3] cursor-not-allowed"
                                    : "bg-[#1B85F3] hover:bg-[#1570D9]"
                                }`}
                        >
                            {isSubmitting ? "Creating account..." : "Create my account"}
                        </button>
                        {errors.submit && (
                            <span className="text-[14px] text-red-500 font-[var(--font-noto)]">
                                {errors.submit}
                            </span>
                        )}

                        {/* Divider */}
                        <div className="w-[480px] border-t border-[#D9DFE6]" />

                        {/* Footer */}
                        <div className="flex gap-[8px] text-[14px] font-[var(--font-noto)]">
                            <span className="text-[#808B9A]">Joined us before?</span>
                            <a href="/auth/login" className="font-bold text-[#1B85F3]">
                                Login
                            </a>
                        </div>

                    </form>
                </div>

            </div>
        </main>
    );
}

/* ---------- Small helper component ---------- */

function Input({
    placeholder,
    type = "text",
    value,
    onChange,
    onFocus,
    onBlur,
    isFocused = false,
    hasIcon = false,
    onIconClick,
    error,
}: {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    isFocused?: boolean;
    hasIcon?: boolean;
    onIconClick?: () => void;
    error?: string;
}) {
    return (
        <div className="flex flex-col gap-[6px] w-full">
            <div
                className={`flex h-[54px] w-full items-center gap-[10px] rounded-[14px] px-[16px]
        border ${isFocused ? "border-[#1B85F3]" : error ? "border-red-500" : "border-[#D9DFE6]"} bg-white`}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="flex-1 font-[var(--font-noto)] text-[14px] outline-none text-[#39434F]"
                />
                {hasIcon && (
                    <button
                        type="button"
                        onClick={onIconClick}
                        className="h-[20px] w-[20px] rounded-full border border-[#A0AEC0] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-[10px] text-[#A0AEC0]">👁</span>
                    </button>
                )}
            </div>
            {error && (
                <span className="text-[12px] text-red-500 font-[var(--font-noto)] px-[4px]">
                    {error}
                </span>
            )}
        </div>
    );
}
