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
    const optionsRef = useRef<HTMLDivElement>(null);

    const selectedLabel = useMemo(() => {
      const selectItem = options.find(({ value }) => value === selected);
      if (selectItem) {
        return selectItem.label ?? selectItem.value;
      } else {
        return "";
      }
    }, [options, selected]);

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
      onSelect?.(value);
      setIsOpen(false);
    };

    return (
      <div className={styles.wrapper}>
        <button
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
        >
          <div>
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
          </div>
        </div>
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
      </div>
    );
  }
);

// ESLint:Component definition is missing display name の対処
Select.displayName = "Select";

export default Select;
