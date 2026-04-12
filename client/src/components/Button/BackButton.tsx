import type { FC } from "react";
import { Link } from "react-router";

interface BackButtonProps {
  label: string;
  path: string;
  newClassName?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const BackButton: FC<BackButtonProps> = ({
  label,
  path,
  newClassName,
  className,
  type = "button",
}) => {
  return (
    <>
      <Link
        to={path}
        type={type}
        className={`${
          newClassName
            ? newClassName
            : `px-3 py-4 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className}`
        }`}
      >
        {label}
      </Link>
    </>
  );
};

export default BackButton;