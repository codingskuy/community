import { motion } from "framer-motion";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
  content: string;
  textColor?: string;
  background?: string;
  iconSize?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  content,
  textColor,
  background,
  iconSize = "w-4 h-4",
}) => {
  const handleCopy = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast.success("Copied successfully!");
        })
        .catch(() => {
          toast.error("Failed to copy content.");
        });
    } else {
      toast.error("Clipboard API not available in this browser.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCopy(e);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      whileTap={{ scale: 0.9 }}
      className={`group cursor-pointer ${background}`}
      aria-label="Copy content"
    >
      <CopyIcon
        className={`${iconSize} transition-colors duration-150 ${textColor ?? ""} group-hover:text-gray-500`.trim()}
      />
    </motion.button>
  );
};
