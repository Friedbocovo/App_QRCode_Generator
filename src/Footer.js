import Linkedin from "./image/linkedin.svg"
import Github from "./image/github_3291695.png"
import { motion } from "framer-motion";

const Footer= ()=>{
    return (
        <>
                    <motion.div
        
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 4 }}
                        viewport={{ once: true }}
                        className=" shadow-lg text-center justify-center item-center max-sm:ml-0  max-sm:mr-0 ">
        
        <footer class="bg-gray-800 text-white py-6 max-md:hidden max-sm:hidden">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-center md:text-left mb-4 md:mb-0">
              <h2 class="text-lg font-semibold">QRCode Generator</h2>
              <p class="text-sm">Générez rapidement et facilement vos QR codes personnalisés.</p>
            </div>
            <div class="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white ">
                <h2 className="flex items-center gap-2"><img src={Linkedin} className="w-10 bg-white h-10 rounded-lg" alt=""/>Likedin</h2>
              </a>
              <a href="https://github.com/Friedbocovo/App_QRCode_Generator" className="text-gray-400 hover:text-white">
                <h2 className="flex items-center gap-2"> <img src={Github} alt="" className="w-10 bg-white rounded-md h-10"/>  Github</h2>
              </a>
            </div>
          </div>
          <div class="mt-4 text-center text-sm text-gray-400">
            <p>© 2025 QRCode Generator. Tous droits réservés.</p>
          </div>
          <div class="text-center mt-4">
            <a href="#" class="text-gray-400 hover:text-white text-sm">Retour en haut</a>
          </div>
        </div>
      </footer>

      </motion.div>
        </>
    )
}

export default Footer