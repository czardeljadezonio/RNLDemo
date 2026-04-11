import type { ChangeEvent, FC } from "react";

interface FloatingLabelInputProps {
  label: string;
  type: "text" | "date" | "password";
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  newLabelClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: string[];
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  newLabelClassName,
  labelClassName,
  inputClassName,
  required,
  autoFocus,
  disabled,
  readonly,
  error,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readonly}
        className={`${
          inputClassName
            ? inputClassName
            : "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        }`}
      />

      <label
        htmlFor={name}
        className={`${
          newLabelClassName
            ? newLabelClassName
            : `absolute text-sm text-gray-500 duration-300 transform -translate-y-4 
               scale-75 top-2 z-10 origin bg-white px-2 
               peer-focus:px-2 
               peer-focus:text-blue-600 
               peer-placeholder-shown:scale-100 
               peer-placeholder-shown:-translate-y-1/2 
               peer-placeholder-shown:top-1/2 
               peer-focus:top-2 
               peer-focus:scale-75 
               peer-focus:-translate-y-4 
               rtl:peer-focus:translate-x-1/4 
               rtl:peer-focus:left-auto insent-s-1 ${labelClassName}`
        }`}
      >
        {label}
        {required && (
            <span className="text-red-600 ml-1">*</span>
        )}
      </label>
      {error && error.length > 0 && (
        <span className="text-red-600 text-xs">{error[0]}</span>
      )}
    </div>
  );
};

export default FloatingLabelInput;