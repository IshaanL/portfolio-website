import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeContext";
import type { ChangeEvent } from "react";
import { useState, useEffect, useRef } from "react";

export default function ThemeSlider() {
  const { setTheme } = useTheme();
  const [sliderValue, setSliderValue] = useState<number>(100);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateTheme = (value: number) => {
    setSliderValue(value);

    if (value === 0) setTheme("theme1");
    else if (value === 25) setTheme("theme2");
    else if (value === 50) setTheme("theme3");
    else if (value === 75) setTheme("theme4");
    else if (value === 100) setTheme("theme5");
  };

  // Handle slider drag
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTheme(Number(e.target.value));
  };

  // Custom wheel handler
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let newValue = sliderValue;
    if (e.deltaY < 0) {
      newValue = Math.min(100, sliderValue + 25); // scroll up → darker
    } else {
      newValue = Math.max(0, sliderValue - 25); // scroll down → lighter
    }
    updateTheme(newValue);
  };

  // Attach non-passive wheel listener
  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    sliderEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      sliderEl.removeEventListener("wheel", handleWheel);
    };
  }, [sliderValue]);

  return (
    <div className="flex items-center space-x-2 w-64 ">
      <SunIcon className="w-6 h-6 text-yellow-400" />

      <div className="flex-1 relative" ref={sliderRef}>
        {/* Background bar */}
        <div
          className={`w-full bg-gray-200 rounded-full h-2.5 ${
            sliderValue === 0 ? "border border-gray-400" : ""
          }`}
        >
          {/* Filled progress */}
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all"
            style={{ width: `${sliderValue}%` }}
          ></div>
        </div>

        {/* Invisible slider input */}
        <input
          type="range"
          min={0}
          max={100}
          step={25}
          value={sliderValue}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-2.5 opacity-0 cursor-pointer"
        />
      </div>

      <MoonIcon className="w-6 h-6 text-gray-800" />
    </div>
  );
}
