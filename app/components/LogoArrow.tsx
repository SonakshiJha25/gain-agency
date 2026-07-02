export default function LogoArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 
        A geometric, sharp upward arrow representing GAIN.
        Designed to look premium and structured like the letters in the logo. 
      */}
      <path
        d="M20 80 L80 20 M80 20 L40 20 M80 20 L80 60"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-current"
      />
      
      {/* Outer framing lines (abstract 'G'/'A' hint) */}
      <path
        d="M10 90 L30 90 L30 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-50 text-current"
      />
      <circle cx="80" cy="20" r="4" fill="currentColor" className="text-current" />
    </svg>
  );
}
