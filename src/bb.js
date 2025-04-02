import { useState } from "react";

const ButtonGroup = () => {
    const [activeButton, setActiveButton]= useState(null)

    const buttons =["Lien" , "Text","Email","Aplle" ,"Sms", "v-card", "Whatsapp"]


  return (
    <div className=" flex-wrap  space-x-5 space-y-5 items-center border-black border-2 h-64">

                    
    {buttons.map((btn, index)=>{
        <button
        key={index}
        onClick={()=>setActiveButton(index)}
        className={` border-2 p-2 rounded-lg transmition-all duration-700 transform  
        ${ activeButton === index ? "bg-blue-500 text-white ":"scale-150"}`}
        > {btn}</button>
    })}

    

    </div>
  );
};

export default ButtonGroup;