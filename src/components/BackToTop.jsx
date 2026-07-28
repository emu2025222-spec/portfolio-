import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-400 text-black p-4 rounded-full shadow-lg z-50 transition-all"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;