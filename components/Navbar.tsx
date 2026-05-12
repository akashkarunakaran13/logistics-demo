"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="font-bold text-2xl tracking-wide">
        LOGO
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-sm font-medium">
        <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Services
        </li>
        <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          Tracking
        </li>
        <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
          About
        </li>
      </ul>

      {/* Contact Button */}
      <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md font-semibold transition-colors duration-200">
        Contact
      </button>
    </nav>
  );
}
