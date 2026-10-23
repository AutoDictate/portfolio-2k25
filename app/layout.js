import "./globals.css";
import "./liquid-glass.css";

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
      <body className="antialiased overflow-x-hidden dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}
