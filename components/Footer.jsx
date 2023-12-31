import Image from "next/image";
import Link from "next/link";
import { logoV } from "@/public";


const Footer = () => {
  return (
    <footer className="w-full text-center py-2">
        <div>
          <p className="text-dimWhite text-[18px]">Copyright © 2024 | Desenvolvido por <Link href="https://www.instagram.com/vertizio_es/" target="_blank" className="text-[#7d2cbf]">Vertizio</Link></p>
        </div>
    </footer>
  )
}

export default Footer