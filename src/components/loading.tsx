import { useEffect, useState } from "react";

interface LoadingProps {
  duration?: number; 
}

const Loading: React.FC<LoadingProps> = ({ duration = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-stone-900/90 z-50 text-white">
      {/* Rotating Hourglass Icon */}
      <svg
        className="w-16 h-16 animate-spin mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 2h12M6 22h12M12 2v6m0 8v6M6 8h12M6 16h12"
        />
      </svg>

      <p className="text-xl font-semibold">... in construction</p>
    </div>
  );
};

export default Loading;
