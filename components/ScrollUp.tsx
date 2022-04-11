import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {
  yOffset: number;
  smoothingFactor: number;
};

declare const window: any;

const ScrollUp = ({ yOffset, smoothingFactor }: Props): JSX.Element | null => {
  const [showButton, setShowButton] = useState<boolean>();

  useEffect(() => {
    let lastScroll = Number.MAX_SAFE_INTEGER;
    setShowButton(window.scrollY > yOffset);

    window.smoothScroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (lastScroll < currentScroll) {
        lastScroll = Number.MAX_SAFE_INTEGER;
        return;
      }

      lastScroll = currentScroll;

      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothScroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / smoothingFactor));
      } else {
        lastScroll = Number.MAX_SAFE_INTEGER;
      }
    };

    window.addEventListener("scroll", showScrollButton);
    return () => {
      window.removeEventListener("scroll", showScrollButton);
    };
  }, []);

  const showScrollButton = () => setShowButton(window.scrollY > yOffset);

  if (!showButton) {
    return null;
  }
  return (
    <button
      onClick={window.smoothScroll}
      className="rounded-full bg-[#212121] bg-opacity-75 fixed right-6 bottom-6 sm:right-12 sm:bottom-12 z-20"
    >
      <RiArrowUpSLine size={64} />
    </button>
  );
};

export default ScrollUp;
