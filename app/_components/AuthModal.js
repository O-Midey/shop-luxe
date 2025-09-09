"use client";
import React, { useState, useContext } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthContext from "../_context/AuthContext";

const AuthModal = ({ isOpen, onClose }) => {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      if (isLogin) {
        // Simulate API call for login
        await new Promise((resolve) => setTimeout(resolve, 1500));
        login({
          token: "fake-jwt-token",
          name: formData.email.split("@")[0],
          userId: "12345",
        });
      } else {
        // Simulate API call for registration
        await new Promise((resolve) => setTimeout(resolve, 1500));
        login({
          token: "fake-jwt-token",
          name: formData.firstName,
          userId: "12345",
        });
      }
      onClose();
    } catch (error) {
      console.error("Authentication failed:", error);
      // Set an error state to display to the user
    } finally {
      setIsLoading(false);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
      });
    }
  };

  // Placeholder for Google Sign-in
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Google sign-in authentication
      await new Promise((resolve) => setTimeout(resolve, 1500));
      login({
        token: "google-fake-jwt-token",
        name: "Google User",
        userId: "google-12345",
      });
      onClose();
    } catch (error) {
      console.error("Google sign-in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
  };

  // If the modal is not open, do not render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Overlay with blur effect */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content with subtle animation */}
      <div className="z-50 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg relative animate-fadeIn">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin
              ? "Sign in to access your account."
              : "Fill in the details below to create a new account."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-1 ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-1 ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-1 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className={`block w-full rounded-md border py-2 pl-3 pr-10 focus:outline-none focus:ring-1 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border py-2 px-3 focus:outline-none focus:ring-1 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-black py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading
                ? isLogin
                  ? "Signing In..."
                  : "Creating Account..."
                : isLogin
                ? "Sign In"
                : "Create Account"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={toggleMode}
            className="font-medium text-black hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign-in button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.5-6.5C36.8 4.1 30.6 2 24 2 12.9 2 4 10.9 4 22c0 11.1 8.9 20 20 20 11.1 0 19-8.9 19-20 0-1.4-.2-2.8-.5-4z" />
              <path
                d="M24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.5-6.5C36.8 4.1 30.6 2 24 2 12.9 2 4 10.9 4 22c0 11.1 8.9 20 20 20 11.1 0 19-8.9 19-20 0-1.4-.2-2.8-.5-4z"
                fill="#4285F4"
              />
              <path
                d="M12.9 20c-1.1 3.2-1.7 6.6-1.7 10s.6 6.8 1.7 10c-3.1-3.2-5.1-7.2-5.1-11c0-3.8 2-7.8 5.1-11z"
                fill="#F4B400"
              />
              <path
                d="M24 2c-3.1 0-5.9 1.1-8.1 2.9L9.4 11.4C12.5 8.2 16.5 6.2 20.3 6.2c3.8 0 7.8 2 11 5.1L36.8 4.1C34.6 2.3 31.8 1.2 28.7 1.2c-3.1 0-5.9 1.1-8.1 2.9l-6.5 6.5C14.1 12.2 11.2 11.1 8.1 11.1c-3.1 0-5.9 1.1-8.1 2.9z"
                fill="#DB4437"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
