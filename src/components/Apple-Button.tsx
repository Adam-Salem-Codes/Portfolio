import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Credit to https://apple.com for inspiration.


/**
 * Renders a Link that is styled like a button from Apple with the specified text, href, and optional className.
 *
 * @param {string} text - The text to display on the button
 * @param {string} href - The URL the button should navigate to
 * @param {string} [className] - Optional additional CSS class for styling
 * @return {JSX.Element} The AppleButton component
 * @example <AppleButton text="Hello, World!" href="https://www.apple.com" className="styles" />
 */
export default function AppleButton({
  text,
  href,
  className,
  onClick,
}: {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div className="w-fit h-fit p-12">
      <Link href={href ? href : "#"} onClick={onClick} className="w-full h-full">
        <motion.div
          className={cn(
            "font-thin border border-blue-500 hover:shadow-xl shadow-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 duration-200 rounded-full px-8 py-3",
            className
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.085, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      </Link>
    </div>
  );
}
// Written by Adam Salem for Atomic UI.