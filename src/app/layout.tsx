// src/app/layout.jsx
import "@/styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50/30">
        {children}
      </body>
    </html>
  );
}
