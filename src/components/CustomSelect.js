function CustomSelect({ children, selectName, className , label , ref , required , onChange }) {
  return (
    <div className="mt-6 w-full">
    <form>
      <label>{label}</label>
        <br />
      <select
      name={selectName}
      ref={ref}
      required={required}
      onChange={onChange}
      className={`py-3 px-4 w-[100%] mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-blue-900 ${className}`}
    >
      {children}
    </select>
    </form>
    </div>
  );
}

export default CustomSelect;
