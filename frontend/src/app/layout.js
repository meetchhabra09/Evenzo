import "./globals.css";

export const metadata = {
  title: "Evenzo — College Event Management, Reimagined",
  description:
    "Say goodbye to messy Google Forms. Evenzo is the all-in-one event management platform for college students and organizers. Create events, smart registrations, QR tickets, and real-time dashboards.",
  keywords: "college events, event management, campus events, student platform, QR tickets, registration",
  openGraph: {
    title: "Evenzo — College Event Management, Reimagined",
    description: "The all-in-one event management platform built for college students.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
