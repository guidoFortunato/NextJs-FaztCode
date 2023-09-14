import Navbar from "../components/Navbar";
import { Roboto } from 'next/font/google'


export const metadata = {
  title: "Mi tienda con next Js",
  description: "Esta es la pagina principal"
}

const roboto = Roboto({
  weight: ["300", "400"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
