import Image from "next/image";
import localFont from "next/font/local";
import ImageSlider from "./comp/ImageSlider";
import Navbar from "./comp/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} items-center grid justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] relative min-h-screen bg-gray-800`}
    >
      {/* <img
        src="/images/bg.jpg" // Replace with your image path
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover" // Make image cover the full screen
      /> */}
      <Navbar/>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
        {/* <Image
              // className="dark:invert"
              src="/images/1.jpg"
              alt="Vercel logomark"
              width={1000}
              height={2000}
              /> */}

          <ImageSlider/>
          <p>IMAGES CAPTION</p>

        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              pages/index.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/*BUTTON 1 
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a> */}
          {/* BUTTON 2
           <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        </div>
      </main>

      </div>
  );
}
