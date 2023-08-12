import Navbar from '@/components/Navbar';
import './globals.css';
import { Chakra_Petch } from 'next/font/google';
import NotificationItem from '@/components/ProductDescription';
import SideBar from '@/components/SideBar';
import ProductDescription from '@/components/ProductDescription';
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
        <SideBar children={<ProductDescription />} />
        <section className="mt-20 flex justify-center">{children}</section>
      </body>
    </html>
  );
}
