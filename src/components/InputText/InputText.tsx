import { forwardRef, InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import styles from "./InputText.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hasPasswordMask?: boolean;
}

const InputText = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { hasError = false, hasPasswordMask = false, className, type, ...props },
    ref
  ) => {
    const [unmasking, setUnmasking] = useState(false);

    const content = (
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
          {content}
          <button
            className={styles.maskButton}
            onClick={() => setUnmasking(!unmasking)}
          >
            {unmasking ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      );
    }

    return content;
  }
);

export default InputText;
