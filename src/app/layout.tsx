import Navbar from '@/components/Navbar';
import './globals.css';
import { Chakra_Petch } from 'next/font/google';
import ProductsCart from '@/components/ShoppingCart/ProductsCart';
const inter = Chakra_Petch({subsets:['latin'],weight:['300']})

export const metadata = {
  title: 'my Store',
  description: 'it for education porpuses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ProductsCart />
        <section className="mt-20 flex justify-center">
          {children}
        </section>
      </body>
    </html>
  );
}
