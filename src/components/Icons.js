export function LowPriorityIcon({ color = "black", size = 18, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color={color}
      height={size}
      width={size}
      {...props}
    >
      <path
        d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm1,23h-4V2c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v21ZM13,6h-2c-1.103,0-2,.897-2,2v16h6V8c0-1.103-.897-2-2-2Zm1,17h-4v-15c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v15ZM6,14v10H0v-10c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function MediumPriorityIcon({ color = "black", size = 18, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color={color}
      height={size}
      width={size}
      {...props}
    >
      <path
        d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm1,23h-4V2c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v21Zm-8-15v16h-6V8c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Zm-9,6v10H0v-10c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function HighPriorityIcon({ color = "black", size = 15, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color={color}
      height={size}
      width={size}
      {...props}
    >
      <path
        d="m24,2v22h-6V2c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Zm-11,4h-2c-1.103,0-2,.897-2,2v16h6V8c0-1.103-.897-2-2-2Zm-9,6h-2c-1.103,0-2,.897-2,2v10h6v-10c0-1.103-.897-2-2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function OptionsTaskIcon({ color = "black", size = 15, ...props }) {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 6h.01M12 12h.01M12 18h.01"
      />
    </svg>
  );
}
export function TrashIcon({ color = "black", size = 20, className, onClick , ...props }) {
  return (
    <svg
      className={`w-6 h-6 ml-0 mr-2 text-${color}-500 dark:text-white ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onClick={onClick}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </svg>
  );
}
export function TickIcon({ size = 15, className }) {
  return (
    <svg
      className={`w-6 h-6 text-green-500 dark:text-white ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 11.917 9.724 16.5 19 7.5"
      />
    </svg>
  );
}
export function EditPencilIcon({ size = 20, className , onMouseEnter , onMouseLeave , onClick }) {
  return (
    <svg
      className={`w-6 h-6 dark:text-white ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
      />
    </svg>
  );
}
