import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import download from "./image/download-solid.svg"
import TextField from './components/inputs/TextField';
import countryCodes from './CountryCode';
import BgQrCode from "./image/bg-qrcode.jpeg"
const QRCodeGenerator = () => {
    const [category, setCategory] = useState('lien');
    const [formData, setFormData] = useState({});
    const [qrCodeData, setQrCodeData] = useState('');

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

            <div className=" max-md:grid max-sm:grid  flex justify-evenly bg-gradient-to-r from-amber-300 to-blue-500 items-center rounded-3xl p-5 bg-white  max-sm:w-screen">

                <h1 className="max-sm:text-xl max-sm:w-auto  font-bold text-4xl w-96">Transformez vos informations en QR Code et partagez-les rapidement.</h1>

                <div className="">
                    <div className=" bg-[url('./image/bg-qrcode.jpeg')] bg-cover bg-center bg-blend-lighten bg-white/60
                     bg-slate-200 w-96 h-96 border-2 rounded-lg max-sm:w-auto max-sm:h-80 max-md:mt-10 flex justify-center items-center flex-col bg-gradient-to-r from-black to-purple-200 p-10 ">

                        {qrCodeData && (
                            <div >
                                <QRCodeCanvas value={qrCodeData} size={230} id="qrCodeCanvas" />
                            </div>
                        )}


                    </div>
                    <div className=" grid gap-3 mt-5 justify-center">
                        {qrCodeData && (
                            <button className='max-sm:w-64  w-80 bg-blue-400 pl-3 pr-3 h-12 rounded-lg  font-bold justify-center items-center flex transmition-all duration-700 transform hover:scale-110 hover:bg-cyan-500' onClick={handleDownloadQRCode}> <img src={download} className='h-6 w-6' alt="" /> Télécharger le QR Code</button>
                        )}
                    </div>
                </div>


            </div>

            <div className="grid   max-md:flex-col mb-20 justify-center max-sm:flex-col  items-center">



                <h1 className=" max-sm:text-2xl font-bold text-3xl mt-10">Pour Quelle Information voudriez-vous Generer Un QR Code ?</h1>
                <div className="">
                    <div className=" flex-wrap  space-x-5 space-y-5 items-center ">
                        <button onClick={() => setCategory("lien")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">Lien</button>
                        <button onClick={() => setCategory("text")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">Text</button>
                        <button onClick={() => setCategory("email")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">Email</button>
                        <button onClick={() => setCategory("appel")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">Appel</button>
                        <button onClick={() => setCategory("sms")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">Sms</button>
                        <button onClick={() => setCategory("v-card")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">V-Card</button>
                        <button onClick={() => setCategory("whatsApp")} className="border-2 p-2 hover:text-white rounded-lg transmition-all duration-700 transform hover:scale-150 hover:bg-blue-500 ">WhatsApp</button>
                    </div>

                    <div className="max-sm:m-4 max-sm:w-auto  mt-10 p-10 justify-center items-center rounded-xl bg-gradient-to-t from-yellow-300 to-slate-300">
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
                                            onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                            onChange={handleInputChange} >

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
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <button className='mt-12 border-2 pl-3 pr-3 bg-amber-800 h-12 rounded-lg text-white font-bold w-80  transmition-all duration-700 transform hover:scale-110 hover:text-black hover:bg-green-500' onClick={handleGenerateQRCode}>Générer QR Code</button>

                </div>

            </div>

        </>

    )
}

export default QRCodeGenerator