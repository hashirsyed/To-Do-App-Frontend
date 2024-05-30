function InputField({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  required,
  className,
  ref,
}) {
  return (
    <>
      <div className="mt-6 w-full">
        <form>
          <label>{label}</label>
        <br />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`py-3 px-4 w-[100%] mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-blue-900 ${className}`}
          onChange={onChange}
          value={value}
          required={required}
          ref={ref}
        />
        
        </form>
      </div>
    </>
  );
}

export default InputField;
