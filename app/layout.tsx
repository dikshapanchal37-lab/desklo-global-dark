import Header from "@/app/components/layout/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {/* ✅ Header belongs INSIDE <body> */}
        <Header />
        
        {/* Add top padding to your page content so the fixed header doesn't cover it */}
        <main className="pt-24 lg:pt-36">
          {children}
        </main>
      </body>
    </html>
  );
}