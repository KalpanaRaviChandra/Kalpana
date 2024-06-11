import '../app/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js Tailwind Project</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}