export const metadata = {
  title: "FlagProID LYVE – Lite MVP",
  description: "Lite MVP deployed on Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
