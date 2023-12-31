import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-full text-center py-3 border-t border-[#9d67ca]">
          <p className="text-dimWhite text-[20px]">Copyright © 2024 | Desenvolvido por <Link href="https://www.instagram.com/vertizio_es/" target="_blank">Vertizio</Link></p>      
      </div>
    </footer>
  )
}

export default Footer