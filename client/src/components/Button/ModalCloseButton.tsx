import type { FC } from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <button type="button" onClick={onClose} className="absolute right-4 top-4 z-99 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:h-11 sm:w-11 cursor-pointer">×
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.04289 16.5413C6.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4191L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.956 7.45761C18.3466 7.06708 18.3466 6.43391 17.956 6.04339C17.5655 5.65286 16.9323 5.65286 16.5418 6.04339L11.9997 10.5855L7.45761 6.04339C7.06708 5.65286 6.43391 5.65286 6.04339 6.04339C5.65286 6.43391 5.65286 7.06708 6.04339 7.45761L10.5855 11.9997L6.04289 16.5413Z"
        fill="currentColor"
      />
    </svg>
      </button>
  );
};

export default ModalCloseButton;