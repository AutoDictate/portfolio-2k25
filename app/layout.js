import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Jayasurya A | Software Engineer",
  description:
    "Software Engineer specializing in Java, Spring Boot, microservices, SAP Commerce Cloud, e-commerce, REST APIs, and cloud technologies.",
  openGraph: {
    title: "Jayasurya A | Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, microservices, SAP Commerce Cloud, e-commerce, REST APIs, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
