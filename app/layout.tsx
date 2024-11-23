import "./globals.css";
import type { Metadata } from "next";
import ReactQueryProvider from "@common/utils/ReactQueryProvider"


export const metadata: Metadata = {
  title: "LogSomething",
  description: "LogSomething by Dunzae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ ReactQueryProvider >
      </body>
    </html>
  );
}
