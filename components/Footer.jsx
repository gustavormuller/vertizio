import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full text-center py-2">
        <div>
          
        </div>
        <div>
          <p className="text-dimWhite text-[18px]">Copyright © 2024 | Desenvolvido por <Link href="https://www.instagram.com/vertizio_es/" target="_blank" className="text-[#7d2cbf]">Vertizio</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer