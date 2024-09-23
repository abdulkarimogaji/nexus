import { EnvelopeIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="flex justify-center">
        <div className="max-w-xl w-full mt-24">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] text-primary font-extrabold">
              Welcome Back
            </h1>
            <p className="text-2xl">🙂</p>
          </div>
          <p className="mt-5 text-gray-500 font-medium">
            We are glad to see you again
            <br /> You can continue from where you have stopped.
          </p>

          <form className="mt-12" autoComplete="off">
            <div>
              <div className="bg-tertiary rounded-lg flex items-center justify-between px-5">
                <input
                  type="text"
                  autoComplete="off"
                  className="flex-grow rounded-lg text-primary outline-none text-lg bg-transparent py-3 placeholder:text-primary/20"
                  placeholder="Email Address"
                />
                <EnvelopeIcon className="h-7 w-7 text-primary/20" />
              </div>
            </div>
            <div className="mt-12">
              <div className="bg-tertiary rounded-lg flex items-center justify-between px-5">
                <input
                  type="password"
                  autoComplete="off"
                  className="flex-grow rounded-lg text-primary outline-none text-lg bg-transparent py-3 placeholder:text-primary/20"
                  placeholder="Password"
                />
                <EyeIcon className="h-7 w-7 text-primary/20" />
              </div>
            </div>

            <div className="flex justify-end mt-6 font-medium">
              <Link to={"/"} className="text-primary text-lg">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-12 bg-primary rounded-xl font-semibold text-white w-full py-3.5 text-lg"
            >
              Login
            </button>
            <div className="mt-4 flex justify-center">
              <p className="text-primary">
                Don't have an account?{" "}
                <Link to={"/"} className="font-semibold text-secondary">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        className="bg-red-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/login.png')` }}
      ></div>
    </div>
  );
}
