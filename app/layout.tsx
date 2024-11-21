import "./globals.css";
import type { Metadata } from "next";
import { TitleBar } from "./components/TitleBar";
import { MenuBar } from "./components/MenuBar";

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
      <body className="flex overflow-scroll">
        <TitleBar className="lg:min-w-[400px] lg:max-w-[500px] lg:h-full " />
        <MenuBar className="bg-white" />
        <div className="w-full h-full relative z-1 bg-[#f2f2f2]">
          {children}
        </div>
      </body>
    </html>
  );
}
