import { forwardRef, InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import styles from "./InputText.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hasPasswordMask?: boolean;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    { hasError = false, hasPasswordMask = false, className, type, ...props },
    ref
  ) => {
    const [unmasking, setUnmasking] = useState(false);

    const inputText = (
      <input
        ref={ref}
        className={classNames(
          styles.inputText,
          hasError && styles.error,
          hasPasswordMask && styles.passwordMask,
          className
        )}
        type={unmasking ? "text" : type}
        {...props}
      />
    );

    if (hasPasswordMask) {
      return (
        <div className={styles.maskInput}>
          {inputText}
          <button
            className={styles.maskButton}
            type="button"
            onClick={() => setUnmasking((s) => !s)}
          >
            {unmasking ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      );
    }

    return inputText;
  }
);

// ESLint:Component definition is missing display name の対処
InputText.displayName = "InputText";
export default InputText;
