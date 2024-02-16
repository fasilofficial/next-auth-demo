import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import AuthProvider from "./(components)/AuthProvider";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Next-Auth Authentication",
  description: "Next-Auth example project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className}>
          <Nav />
          <div className="flex justify-center m-10">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
