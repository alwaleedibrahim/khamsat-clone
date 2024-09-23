import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        {children}
      </body>
    </html>
  );
}
