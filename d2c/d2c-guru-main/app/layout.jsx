import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProgressBarProvider from "./ui/progress-bar";
import { unstable_noStore as noStore } from "next/cache";
import { GoogleTagManager } from "@next/third-parties/google";

export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  noStore();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body">
        <ProgressBarProvider>
          <Header />
          <main className="relative bg-offWhite-500" id="main-content">
            {children}
          </main>
          <Footer />
          <GoogleTagManager gtmId={process.env.NEXT_GMT_KEY} />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
