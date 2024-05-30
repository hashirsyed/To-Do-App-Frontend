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
