import Image from "next/image";
export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Root frame */}
      <div className="w-screen h-[1024px] flex bg-[#FAFAFA]">

        {/* LEFT COLUMN */}
        <div className="w-[720px] h-full p-[30px]">
          <div className="w-full h-full rounded-[24px] bg-[#F1F3F5]" >  
<Image
  src="/Auth.svg"
  alt="Login illustration"
  width={660}
  height={964}
  priority
/>            </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[720px] h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center p-[120px]">

            {/* Title + Subtitle */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[36px] font-semibold text-gray-900">
                Login
              </h1>
              <p className="mt-[16px] text-[16px] text-gray-500">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="joe.doe@gmail.com"
              className="mt-[42px] w-full h-[52px] rounded-[14px] border border-gray-200 px-4 text-[14px] focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="mt-[34px] w-full h-[52px] rounded-[14px] border border-gray-200 px-4 text-[14px] focus:outline-none"
            />

            {/* Remember */}
            <div className="mt-[16px] w-full flex items-center gap-2 text-[14px] text-gray-600">
              <input type="checkbox" />
              <span>Remember information</span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-[42px] w-full h-[54px] rounded-[14px] bg-blue-600 text-white text-[14px] font-medium"
            >
              Login
            </button>

            {/* Forgot password */}
            <a
              href="#"
              className="mt-[8px] text-[14px] text-blue-600"
            >
              Forgot password?
            </a>

            {/* Social login */}
            <div className="mt-[42px] w-full flex flex-col gap-[20px]">
              {["Google", "Facebook", "Apple"].map((provider) => (
                <button
                  key={provider}
                  className="w-full h-[54px] rounded-[14px] border border-gray-200 text-[14px]"
                >
                  Login with {provider}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
