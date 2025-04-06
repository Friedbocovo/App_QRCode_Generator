import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import download from "./image/download-solid.svg"
import TextField from './components/inputs/TextField';
import countryCodes from './CountryCode';
import lien from "./image/link.svg"
import text from "./image/text.svg"
import email from "./image/email.svg"
import appel from "./image/call.svg"
import sms from "./image/sms.svg"
import vcard from "./image/card.svg"
import whatapp from "./image/whatsapp.svg"
import { motion } from "framer-motion";

const QRCodeGenerator = () => {
    const [category, setCategory] = useState('lien');
    const [qrCodeData, setQrCodeData] = useState('');

    const [formData, setFormData] = useState({
        countryCode: "",
        phoneNumber: "",
        message: ""
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerateQRCode = () => {
        if (category === "lien") {
            setQrCodeData(formData.lien);
        } else if (category === "text") {
            setQrCodeData(formData.text);
        } else if (category === "email") {
            setQrCodeData(`mailto:${formData.email}?subject=${formData.subject}&body=${formData.message}`);
        } else if (category === "appel") {
            setQrCodeData(`tel:${formData.countryCode}${formData.phoneNumber}`);
        } else if (category === "sms") {
            setQrCodeData(`sms:${formData.countryCode}${formData.phoneNumber}?body=${formData.message}`);
        } else if (category === "v-card") {
            setQrCodeData(`
        BEGIN:VCARD
        VERSION:3.0
        FN:${formData.firstName} ${formData.lastName}
        TEL:${formData.phoneNumber}
        TEL;CELL:${formData.mobile}
        EMAIL:${formData.email}
        URL:${formData.website}
        ORG:${formData.company}
        TITLE:${formData.jobTitle}
        ADR:${formData.address}, ${formData.city}, ${formData.postCode}, ${formData.country}
        END:VCARD
      `);
        } else if (category === "whatsApp") {
            console.log("Code Pays:", formData.countryCode);
            console.log("Numéro:", formData.phoneNumber);
            console.log("Message:", formData.message);

            setQrCodeData(`https://wa.me/${formData.countryCode}${formData.phoneNumber}?text=${formData.message}`);
        }
    };

    const handleDownloadQRCode = () => {
        const canvas = document.getElementById("qrCodeCanvas");
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "QRCode.svg";
        link.click();
    };

    return (

        <>
            <motion.div

                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 4 }}
                viewport={{ once: true }}
                className=" shadow-lg text-center justify-center item-center max-sm:ml-0  max-sm:mr-0 pb-5">

                <div className=" lg:w-auto  mt-28 max-md:grid max-sm:grid  flex justify-evenly bg-gradient-to-r from-amber-300 to-blue-500 items-center rounded-3xl p-5 bg-white  max-sm:w-screen">

                    <h1 className="max-sm:text-xl max-sm:w-auto  font-bold text-3xl w-96">Transformez vos informations en Code QR et partagez-les rapidement.</h1>

                    <div className="">
                        <div className=" bg-[url('./image/bg-qrcode.jpeg')] bg-cover bg-center bg-blend-lighten bg-white/60
                     bg-slate-200 w-96 h-96 border-2 rounded-lg max-sm:w-auto max-sm:h-80 max-md:mt-10 flex justify-center items-center flex-col ">

                            {qrCodeData && (
                                <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "8px" }}>
                                    <QRCodeCanvas value={qrCodeData} bgColor="white"
                                        size={230} id="qrCodeCanvas" />
                                </div>
                            )}


                        </div>
                        <div className=" grid gap-3 mt-5 justify-center " >
                            {qrCodeData && (
                                <button className='max-sm:w-64  w-80 bg-blue-400 pl-3 pr-3 h-12 rounded-lg  font-bold justify-center items-center flex transmition-all duration-700 transform hover:scale-110 hover:bg-cyan-500' onClick={handleDownloadQRCode}> <img src={download} className='h-6 w-6' alt="" /> Télécharger le QR Code</button>
                            )}
                        </div>
                    </div>


                </div>

                <div className="grid   max-md:flex-col mb-20 justify-center max-sm:flex-col  items-center">



                    <h1 className=" max-sm:ml-5 max-sm:mr-5 max-sm:text-lg font-bold text-2xl mt-10">Pour quelle information voudriez-vous generer un Code QR ?</h1>
                    <div className="max-sm:ml-5 max-sm:mr-5">
                        <div className=" max-sm:ml-10 max-sm:mr-10 flex-wrap justify-center  flex items-center gap-4 mt-10">
                            <button onClick={() => setCategory("lien")} className=" flex items-center gap-2 border-2  border-stone-400 hover:border-0 p-2 hover:text-white  rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 ' src={lien} alt="" />Lien</button>
                            <button onClick={() => setCategory("text")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={text} alt="" />Text</button>
                            <button onClick={() => setCategory("email")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={email} alt="" />Email</button>
                            <button onClick={() => setCategory("appel")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={appel} alt="" />Appel</button>
                            <button onClick={() => setCategory("sms")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={sms} alt="" />Sms</button>
                            <button onClick={() => setCategory("v-card")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={vcard} alt="" />V-Card</button>
                            <button onClick={() => setCategory("whatsApp")} className=" flex items-center gap-2  border-2 border-stone-400 hover:border-0 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-125 hover:bg-blue-500 "><img className='h-4 w-4 flex items-center' src={whatapp} alt="" />WhatsApp</button>
                        </div>

                        <div className="max-sm:m-4 max-sm:w-auto  mt-10 p-10 justify-csenter items-center rounded-xl bg-gradient-to-t from-yellow-300 to-slate-300">
                            {category === "lien" && (
                                <div className="flex justify-center items-center">
                                    <div className=" grid gap-5 ">
                                        <label className=' font-bold text-left'>Lien</label>
                                        <TextField
                                            type="text"
                                            name="lien"
                                            placeholder="Entrez un lien..."
                                            onChange={handleInputChange}
                                        />

                                    </div></div>
                            )}

                            {category === "text" && (

                                <div className="flex justify-center items-center">
                                    <div className="grid gap-5">
                                        <label className='font-bold text-left'>Text</label>
                                        <TextField
                                            type="text"
                                            name="text"
                                            placeholder="Entrez un texte..."
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                            )}
                            {category === "email" && (
                                <div className='grid gap-5'>
                                    <div className="flex gap-10 justify-center items-10 max-sm:grid max-md:grid">
                                        <div className="grid gap-5">                                <label className=' font-bold text-left'>Email</label>
                                            <TextField
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="grid gap-5">   <label className=' font-bold text-left'>Sujet</label>
                                            <TextField
                                                type="text"
                                                name="subject"
                                                placeholder="Sujet"
                                                onChange={handleInputChange}
                                            /></div>
                                    </div>

                                    <label className=' font-bold text-left'>Message</label>
                                    <textarea
                                        className='border-2 border-neutral-500 sidth rounded-lg p-2'
                                        name="message"
                                        placeholder="Message"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                            {category === "appel" && (
                                <div className=" max-md:grid max-sm:grid flex justify-center items-center gap-5">
                                    <div className="grid gap-5">
                                        <label className=' font-bold text-left'>Country code</label>
                                        <select name="countryCodes" onChange={handleInputChange} className="max-md:w-96  max-sm:w-64 h-12 rounded-xl p-2  w-80">
                                            {countryCodes.map((country, index) => (
                                                <option key={index} value={country.code}>
                                                    {country.country} ({country.code})
                                                </option>
                                            ))}
                                        </select></div>
                                    <div className="grid gap-5">
                                        <label className=' font-bold text-left'>Phone number</label>
                                        <TextField
                                            type="tel"
                                            name="phoneNumber"
                                            placeholder="Numéro de téléphone"
                                            onChange={handleInputChange}
                                        /></div>
                                </div>
                            )}
                            {category === "sms" && (
                                <div className='grid gap-10 '>
                                    <div className=" max-sm:grid max-md:grid flex justify-center items-center gap-10">
                                        <div className="grid gap-5">
                                            <label className=' font-bold text-left'>Country code</label>
                                            <select
                                                name="countryCodes"
                                                onChange={(e) => {
                                                    setFormData({ ...formData, countryCode: e.target.value });
                                                    console.log("Nouveau Code Pays:", e.target.value);
                                                }}
                                                className="max-md:w-96 max-sm:w-64 h-12 w-80 rounded-lg p-2"
                                            >
                                                {countryCodes.map((country, index) => (
                                                    <option key={index} value={country.code}>
                                                        {country.country} ({country.code})
                                                    </option>
                                                ))}

                                            </select></div>
                                        <div className="grid gap-5">
                                            <label className=' font-bold text-left'>Phone number</label>
                                            <TextField
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Numéro de téléphone"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-5">
                                        <label className=' font-bold text-left'>Message</label>
                                        <textarea
                                            className=' border-neutral-500 border-2 rounded-lg p-2'
                                            name="smsMessage"
                                            placeholder="Message SMS"
                                            onChange={(e) => {
                                                setFormData({ ...formData, message: e.target.value });
                                                console.log("Nouveau message:", e.target.value);
                                            }}
                                        /></div>
                                </div>
                            )}
                            {category === "v-card" && (
                                <div className="flex flex-col gap-10 justify-center items-center">
                                    <div className="max-md:grid max-sm:grid flex gap-10">
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>First name</label>
                                            <TextField
                                                type="text"
                                                name="firstName"
                                                placeholder="Prénom"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Last name</label>
                                            <TextField
                                                type="text"
                                                name="lastName"
                                                placeholder="Nom"
                                                onChange={handleInputChange}
                                            /></div>
                                    </div>

                                    <h2 className="font-bold italic text-xl">Contact Information</h2>
                                    <div className="flex gap-10 max-sm:grid max-md:grid">
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Phone number</label>
                                            <TextField
                                                type="tel"
                                                name="phone"
                                                placeholder="Numéro de téléphone"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Mobile</label>
                                            <TextField
                                                type="text"
                                                name="mobile"
                                                placeholder="Mobile"
                                                onChange={handleInputChange}
                                            /></div></div>
                                    <div className="flex gap-10 max-sm:grid max-md:grid" >
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Email</label>
                                            <TextField
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>website (URL)</label>
                                            <TextField
                                                type="url"
                                                name="website"
                                                placeholder="Site web"
                                                onChange={handleInputChange}
                                            /></div>
                                    </div>
                                    <h2 className="font-bold italic text-xl">Company Information</h2>
                                    <div className="flex flex-col gap-4">
                                        <label className=' font-bold text-left'>Company</label>
                                        <input className="max-md:w-96 max-sm:w-64 border-2 width border-black p-2 h-12 rounded-lg"
                                            type="text"
                                            name="company"
                                            placeholder="Entreprise"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="flex gap-10 max-sm:grid max-md:grid">

                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Job title</label>
                                            <TextField
                                                type="text"
                                                name="jobTitle"
                                                placeholder="Poste"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Fax</label>
                                            <TextField
                                                type="text"
                                                name="fax"
                                                placeholder="Fax"
                                                onChange={handleInputChange}
                                            />
                                        </div></div>
                                    <h2 className="font-bold italic text-xl">Loction</h2>
                                    <div className="flex gap-10 max-sm:grid max-md:grid">
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Address</label>
                                            <TextField
                                                type="text"
                                                name="address"
                                                placeholder="Adresse"
                                                onChange={handleInputChange}
                                            /></div>

                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>City</label>
                                            <TextField
                                                type="text"
                                                name="city"
                                                placeholder="Ville"
                                                onChange={handleInputChange}
                                            /></div>

                                    </div>

                                    <div className="flex gap-10 max-sm:grid max-md:grid">

                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Post code</label>
                                            <TextField
                                                type="text"
                                                name="postCode"
                                                placeholder="Code post"
                                                onChange={handleInputChange}
                                            /></div>
                                        <div className="flex flex-col gap-4">
                                            <label className=' font-bold text-left'>Country</label>
                                            <TextField
                                                type="text"
                                                name="country"
                                                placeholder="Pays"
                                                onChange={handleInputChange}
                                            /></div>
                                    </div>
                                </div>

                            )}
                            {category === "whatsApp" && (

                                <div className="grid gap-10">
                                    <div className="max-md:grid max-sm:grid  flex gap-10 justify-center items-center">
                                        <div className="grid gap-5">
                                            <label className=' font-bold text-left'>Country code</label>
                                            <select name="countryCodes" className='max-md:w-96 max-sm:w-64 h-12 w-80 rounded-lg p-2'
                                                onChange={(e) => {
                                                    setFormData({ ...formData, countryCode: e.target.value });
                                                    console.log("Nouveau Code Pays:", e.target.value);
                                                }}
                                            >

                                                {countryCodes.map((country, index) => (
                                                    <option key={index} value={country.code}>
                                                        {country.country} ({country.code})
                                                    </option>
                                                ))}
                                            </select></div>
                                        <div className="grid gap-5">
                                            <label className=' font-bold text-left'>Phone number</label>
                                            <TextField
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Numéro de téléphone"
                                                onChange={handleInputChange}
                                            /></div>
                                    </div>
                                    <div className="grid gap-5">
                                        <label className=' font-bold text-left'>Messages</label>
                                        <textarea
                                            className='border-2 border-neutral-500  rounded-lg p-2'
                                            name="whatsappMessage"
                                            placeholder="Message WhatsApp"
                                            onChange={(e) => {
                                                setFormData({ ...formData, message: e.target.value });
                                                console.log("Nouveau message:", e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center items-center">
                            <button className='max-sm:border-0 max-sm:rounded-none fixed bottom-0 font-semibol justify-center  transform  md:px-6 md:py-3 shadow-lg md:relative md:bottom-auto md:left-auto m:translate-x-0 mt-12 border-2 pl-3 pr-3 bg-amber-800 h-12 rounded-lg text-white font-bold w-80 max-sm:w-screen transmition-all duration-700  hover:scale-110 hover:text-black hover:bg-green-500' onClick={handleGenerateQRCode}><a href="#" className="">Générer Code QR </a></button>

                        </div>
                    </div>

                </div>
            </motion.div>
        </>

    )
}

export default QRCodeGenerator