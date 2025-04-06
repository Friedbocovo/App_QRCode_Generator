import React from 'react'
import logo from './image/logo.png';
import { motion } from "framer-motion";
import './index.css';
import QRCodeGenerator from "./QRCodeGenerator"
import Footer from './Footer';

const Home = () => {

    return (
        <>

            <header className="fixed top-0 left-0 w-full shadow-md p-4 z-50 backdrop-blur-md ">
                {/* Header Desktop */}
                <motion.div

                    initial={{ opacity: 0, x: 100, y: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 4 }}
                    viewport={{ once: true }}
                    className="">
                    <div className="hidden md:flex justify-between items-center">
                        <img src={logo} alt="" className="h-10 w-10" />
                        <nav>
                            <h1 className="text-2xl font-bold text-gray-800">QRCode Generator</h1>

                        </nav>
                    </div>

                    {/* Header Mobile */}
                    <div className="md:hidden items-center">
                        <h1 className="text-xl font-bold text-gray-800">QRCode</h1>
                    </div>
                </motion.div >
            </header>

            <QRCodeGenerator />
            <Footer />

        </>
    )

}
export default Home