import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export const metadata = {
   title: "Hîncu Ștefan | Full Stack Developer",
   description: "Personal portfolio of Hîncu Ștefan, a full stack developer.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html
         lang='en'
         suppressHydrationWarning
         className={`${inter.variable} scroll-smooth`}
      >
         <body className={inter.className}>
            <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
               <Navbar />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}

import "./globals.css";
