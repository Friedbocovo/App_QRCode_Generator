import logo from './image/icons8-qr-code-64.png';
import menu from './image/icons8-menu.svg'
import { motion } from "framer-motion";
import './index.css';
import QRCodeGenerator from "./QRCodeGenerator"
import Footer from './Footer';
function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-200  shadow-lg text-center justify-center item-center max-sm:ml-0  max-sm:mr-0">
      <header className="fixed top-0 left-0 w-full shadow-md p-4 z-50 backdrop-blur-md">
        {/* Header Desktop */}
        <div className="hidden md:flex justify-between items-center">
          <img src={logo} alt="" className="" />
          <nav>
            <h1 className="text-2xl font-bold text-gray-800">QRCode Generator</h1>

          </nav>
        </div>

        {/* Header Mobile */}
        <div className="md:hidden flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">QR Code</h1>
          <button className="text-gray-600 hover:text-blue-500">☰</button> {/* Menu burger */}
        </div>
      </header>

      <QRCodeGenerator />
      <Footer />
    </motion.div>
  );
}

export default App;
