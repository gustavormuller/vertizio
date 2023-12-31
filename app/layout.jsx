import './globals.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Website from "@/components/Website";
import Trafego from "@/components/Trafego";
import Social from "@/components/Social";
import Footer from '@/components/Footer';
import Contato from '@/components/Contato';

export const metadata = {
  title: 'Vertizio',
  description: 'Transformamos experiências digitais em memórias únicas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`sm:px-16 px-4 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary sm:px-16 px-0 flex justify-center items-start`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary sm:px-16 px-4 flex justify-center items-start`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Services />
              <Website />
              <Trafego />
              <Social />
              <Portfolio />
              <Contato />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
