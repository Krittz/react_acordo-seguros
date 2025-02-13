import { useState, useEffect } from "react";

const TypingEffect = () => {
  const texts = ["Agilidade", "Qualidade", "Credibilidade"];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const delayBetweenWords = 2000;
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span
      id="variant-text"
      className="text-uppercase text-center fs-1 fw-semibold"
    >
      {currentText}
    </span>
  );
};
export default TypingEffect;
