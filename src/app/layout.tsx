import type { Metadata } from "next"
import localFont from "next/font/local"
import { ReactQueryProvider } from "@/components/react-query-provider"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { config } from "@/config"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
<<<<<<< HEAD
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Damfai",
  description: "Приложения для чтения книг разного жанра, с AI ассистентом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
=======
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: config.name,
  description: config.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
>>>>>>> 0e8d4dbaaacbf24ff45c87e7e3f5ee01c243a863
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
<<<<<<< HEAD
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
=======
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
>>>>>>> 0e8d4dbaaacbf24ff45c87e7e3f5ee01c243a863
}
