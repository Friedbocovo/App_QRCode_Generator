const TextField = ({type,name,placeholder,onChange}) => {
    return (
        <input className=" max-sm:w-64 border-2 w-96  border-black p-2 h-12 rounded-lg"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
    />
    )
}

export default TextField