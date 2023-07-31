import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
  ComponentPropsWithoutRef,
} from "react";
import classNames from "classnames";
import styles from "./Dropdown.module.css";
import { useElementPosition } from "../../utils/useElementPosition";
import Button from "../Button/Button";

const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isInUpperHalf: boolean;
}>({
  isOpen: false,
  setIsOpen: () => {},
  isInUpperHalf: false,
});

const Dropdown = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isInUpperHalf } = useElementPosition<HTMLDivElement>(dropdownRef);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (relatedTarget && dropdownRef.current?.contains(relatedTarget)) {
      // 関連するターゲットがプルダウン内の要素なら何もしない
      return;
    }
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, isInUpperHalf }}>
      <div
        ref={dropdownRef}
        className={classNames(styles.dropdown, className)}
        tabIndex={0}
        onBlur={handleBlur}
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const ToggleButton = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Button>) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <Button
      className={classNames(styles.toggle, className)}
      {...props}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </Button>
  );
};

const Body = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { isOpen, isInUpperHalf } = useContext(DropdownContext);
  if (!children) return null;
  return (
    <>
      {isOpen ? (
        <div
          className={classNames(
            styles.menu,
            isInUpperHalf ? styles.lower : styles.upper,
            className
          )}
          {...props}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

Dropdown.ToggleButton = ToggleButton;
Dropdown.Body = Body;

export default Dropdown;
