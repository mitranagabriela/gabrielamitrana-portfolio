import { useState, useRef } from "react";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  className?: string;
  magnifierSize?: number;
  zoomLevel?: number;
}

export const ImageMagnifier = ({
  src,
  alt,
  className = "",
  magnifierSize = 150,
  zoomLevel = 2.5,
}: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the position for the magnifier background
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    setCursorPosition({ x, y });
    setMagnifierPosition({ x: bgX, y: bgY });
  };

  return (
    <div className="relative inline-block">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} cursor-crosshair`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />

      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-primary/50 rounded-full shadow-2xl overflow-hidden bg-background"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            left: `${cursorPosition.x - magnifierSize / 2}px`,
            top: `${cursorPosition.y - magnifierSize / 2}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imgRef.current?.width ? imgRef.current.width * zoomLevel : 0}px ${
              imgRef.current?.height ? imgRef.current.height * zoomLevel : 0
            }px`,
            backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
};
