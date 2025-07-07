export default function AddToCart({ color = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`size-6 hover:scale-110 transition-all text-${color}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.91
           8.607m0 0H18.1a1.125 1.125 0 0 1 1.098
           1.374l-1.347 5.385a1.125 1.125 0 0 1-1.098.876H8.309a1.125
           1.125 0 0 1-1.098-.876l-1.3-5.2Zm0
           0L4.723 4.418A1.125 1.125 0 0 0
           3.638 3.75H2.25m6 14.25a.75.75 0 1 0
           0 1.5.75.75 0 0 0 0-1.5Zm8.25 0a.75.75
           0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      />
    </svg>
  );
}
