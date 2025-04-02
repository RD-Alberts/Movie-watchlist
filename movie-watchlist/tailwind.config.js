/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          default: {
            DEFAULT: "#9ca3af",  // Tailwind gray-400
            hover: "#6b7280",    // Tailwind gray-500
            content: "#ffffff",  // Wit, want contrast met donkergrijs
          },
          primary: {
            DEFAULT: "#F5C518",     // IMDb yellow
            hover: "#e4b400",       // Donkere variant voor hover
            content: "#000000",     // Zwart voor goede leesbaarheid op geel
          },
          warning: {
            DEFAULT: "#f59e0b",       // Tailwind amber-500
            hover: "#d97706",         // Tailwind amber-600
            content: "#1f2937",       // Tailwind gray-800 voor goede leesbaarheid
          },
          danger: {
            DEFAULT: "#dc2626",       // Tailwind red-600
            hover: "#b91c1c",         // Tailwind red-700
            content: "#ffffff",       // Wit
          },
          success: {
            DEFAULT: "#16a34a",    // Tailwind green-600
            hover: "#15803d",      // Tailwind green-700
            content: "#ecfdf5",    // Lichtgroen/witachtig
          },
          info: {
            DEFAULT: "#2563eb",    // Tailwind blue-600
            hover: "#1d4ed8",      // Tailwind blue-700
            content: "#eff6ff",    // Lichtblauw/witachtig
          },
        },
      },
    },
    plugins: [],
  };
  