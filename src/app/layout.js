
import "./globals.css";

export const metadata = {
  title: "Reduan Ahmed | Junior Full Stack Developer",
  description:
    "Official portfolio of Reduan Ahmed, Junior Full Stack Web Developer from Sylhet, Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
