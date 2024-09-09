import MainHeader from "../../components/MainHeader/main-header";
import "./globals.css";

export const metadata = {
  title: "Gilberto - Desenvolvedor Front-end",
  description: "Gilberto Front-end Developer portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
