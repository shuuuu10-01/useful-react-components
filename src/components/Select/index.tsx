import classNames from "classnames";
import {
  ComponentPropsWithoutRef,
  FocusEvent,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Select.module.css";

type Option = {
  value: string;
  label?: string;
};

type Props = ComponentPropsWithoutRef<"select"> & {
  options: Option[];
  upper?: boolean;
  defaultValue?: string;
  onSelect?: (value: string) => void;
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, upper = false, onSelect, defaultValue = "", ...props }, ref) => {
    const [selected, setSelected] = useState<string>(defaultValue);

    const [isOpen, setIsOpen] = useState(false);

    const selectedLabel = useMemo(() => {
      const selectItem = options.find(({ value }) => value === selected);
      if (selectItem === undefined) {
        return "";
      } else {
        return selectItem?.label || selectItem.value;
      }
    }, [options, selected]);

    const optionsRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };

    const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (optionsRef.current?.contains(relatedTarget)) return;

      setIsOpen(false);
    };

    const handleSelect = (value: string) => {
      setSelected(value);
      // 親に変更を伝播
      onSelect?.(value);
      // 選択後、選択肢を閉じない場合は以下のコメントアウトを外す
      // toggleRef.current?.focus();
      // 選択後、選択肢を閉じる場合は以下のコメントアウトを外す
      setIsOpen(false);
    };

    const optionsHeight = useMemo(() => {
      // isOpen ? 選択肢の数 x 選択肢の高さ + トグルボタンの高さ : トグルボタンの高さ
      return isOpen ? `${options.length * 40 + 40}px` : "40px";
    }, [isOpen]);

    return (
      <div className={styles.wrapper}>
        <select
          ref={ref}
          hidden
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          {...props}
        >
          {options.map(({ value, label = value }) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <button
          ref={toggleRef}
          className={styles.button}
          onClick={handleToggle}
          onBlur={handleBlur}
          type="button"
        >
          <p>{selectedLabel}</p>
          <IoIosArrowDown
            className={classNames(styles.buttonIcon, isOpen && styles.open)}
          />
        </button>
        <div
          ref={optionsRef}
          className={classNames(
            styles.options,
            upper ? styles.upper : styles.lower,
            isOpen && styles.open
          )}
          style={{ height: optionsHeight }}
        >
          {isOpen && !upper && <div className={styles.lastOption} />}
          {options.map(({ value, label = value }) => {
            return (
              <button
                key={value}
                className={styles.option}
                onClick={() => handleSelect(value)}
                type="button"
              >
                {label}
              </button>
            );
          })}
          {isOpen && upper && <div className={styles.lastItem} />}
        </div>
      </div>
    );
  }
);

// ESLint:Component definition is missing display name の対処
Select.displayName = "Select";

export default Select;
