import { FC, FocusEvent, ReactNode, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  label: string | number | JSX.Element;
  children: ReactNode;
  menuClassName?: string;
}

const Dropdown: FC<DropdownProps> = ({ label, children, menuClassName }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (relatedTarget && dropdownRef.current?.contains(relatedTarget)) {
      // 関連するターゲットがプルダウン内の要素なら何もしない
      return;
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} onBlur={handleBlur} ref={dropdownRef}>
      <button className={styles.button} onClick={handleToggle}>
        {label}
      </button>
      {isOpen && (
        <div
          className={classNames(styles.dropdownMenu, menuClassName)}
          tabIndex={1}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
