function ThemeButton({ children, className, disabled }) {
  return (
      <button
        className={`${className} bg-blue-900 p-3 mt-10 text-white rounded-md duration-500 hover:border-blue-900 hover:border hover:border-solid hover:bg-transparent hover:text-blue-900 disabled:bg-gray-600 disabled:hover:text-white disabled:hover:border-none`}
        disabled={disabled}
        type="submit"
      >
        {children}
      </button>
  );
}

export default ThemeButton;
