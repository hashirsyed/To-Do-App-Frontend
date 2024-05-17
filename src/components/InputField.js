

function InputField ({label,type,name,placeholder,onChange,value}){
return (
    <>
    <div className="mt-2">
              <label>{label}</label>
              <br />
              <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="py-3 px-4 w-[100%] mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-blue-900"
                required
                onChange={onChange}
                value={value}
              />
            </div>
    </>
)

}

export default InputField;