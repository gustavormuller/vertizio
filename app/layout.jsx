import { Navbar, Hero, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from "@/components";
import './globals.css';

export const metadata = {
  title: 'Vertizio',
  description: 'Transformamos experiências digitais em memórias únicas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary flex justify-center items-start`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary sm:px-16 px-6 flex justify-center items-start`}>
            <div className={`xl:max-w-[1280px] w-full`}>
              <Business />
              <CardDeal />
              <Billing />         
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
