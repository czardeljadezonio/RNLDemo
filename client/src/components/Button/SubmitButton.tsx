import type { FC } from "react";
import Spinner from "../Spinner/Spinner";

interface SubmitButtonProps {
  label: string;
  newClassName?: string;
  className?: string;
  loading?: boolean;
  loadingLabel?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  label,
  newClassName,
  className,
  loading,
  loadingLabel,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-3 bg-green-600 hover:bg-green-700 tex-sm font-medium mt-3 cursor-pointer text-white rounded-lg shadow-lg ${className}`
        }`}
        disabled={loading}
        
      >
        {loading ? (
        <>
          <div className="flex gap-1">
            {<Spinner size="xs" />}
            {loadingLabel}
          </div>
        </>) : label}
      </button>
    </>
  );
};

export default SubmitButton;