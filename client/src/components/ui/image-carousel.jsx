import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImageCarousel({
    images,
    autoPlay = true,
    interval = 5000,
    showControls = true,
    showDots = true,
    className = ""
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (images.length === 0) return null;

    return (
        <div className={`relative overflow-hidden rounded-xl ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt || "Carousel image"}
                        className="w-full h-full object-cover"
                    />
                    {images[currentIndex].caption && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
                        >
                            <p className="text-white text-lg font-medium">
                                {images[currentIndex].caption}
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {showControls && images.length > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Dots */}
            {showDots && images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-white w-6"
                                    : "bg-white/50 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
