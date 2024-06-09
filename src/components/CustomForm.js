
export function CustomTextArea({
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
          <textarea
            name={name}
            type={type}
            placeholder={placeholder}
            className={`py-3 px-4 w-[100%] mt-1 text-[14px] rounded-md focus:ring-0 focus:outline-none border-2 focus:border-primary-color ${className}`}
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

  export function InputField({
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
            className={`py-3 px-4 w-[100%] mt-1 rounded-md focus:ring-0 focus:outline-none border-2 focus:border-primary-color ${className}`}
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

  export function ThemeButton({ children, className, disabled , onClick , onSubmit }) {
    return (
      
        <button
          className={`${className} bg-primary-color p-3 mt-10 text-white rounded-md duration-500 hover:border-primary-color hover:border hover:border-solid hover:bg-transparent hover:text-primary-color disabled:bg-gray-400 disabled:hover:text-white disabled:hover:border-none`}
          disabled={disabled}
          type="submit"
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </button>
    );
  }

  export function CustomSelect({ children, selectName, className , label , ref , required , onChange  }) {
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

  export function CustomFileSelect({ children, selectName, className , label , ref , required , onChange }) {
    return (
      <div className="mt-6 w-full">
      <form>
        <label>{label}</label>
          <br />
        <input type="file" className="rounded-md" onChange={onChange} ref={ref}/>
      </form>
      </div>
    );
  }