
function ThemeButton({ children, className, disabled , onClick }) {
  return (
    
      <button
        className={`${className} bg-primary-color p-3 mt-10 text-white rounded-md duration-500 hover:border-primary-color hover:border hover:border-solid hover:bg-transparent hover:text-primary-color disabled:bg-gray-600 disabled:hover:text-white disabled:hover:border-none`}
        disabled={disabled}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
  );
}

export default ThemeButton;
