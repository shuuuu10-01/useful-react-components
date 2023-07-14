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

const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const Dropdown = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (relatedTarget && dropdownRef.current?.contains(relatedTarget)) {
      // 関連するターゲットがプルダウン内の要素なら何もしない
      return;
    }
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
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

const Toggle = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <div
      className={classNames(styles.toggle, className)}
      {...props}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </div>
  );
};

const Body = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { isOpen } = useContext(DropdownContext);
  if (!children) return null;
  return (
    <>
      {isOpen ? (
        <div className={classNames(styles.menu, className)} {...props}>
          {children}
        </div>
      ) : null}
    </>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.Body = Body;

export default Dropdown;
