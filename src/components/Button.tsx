import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  red?: boolean;
};

const Button = ({
  children,
  className,
  primary,
  secondary,
  red,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        `px-3.5 py-2.5 rounded-[0.3125rem] leading-loose text-[0.9375rem] 
        font-medium whitespace-nowrap`,
        primary && "bg-[var(--blue-600)] text-[var(--white)]",
        secondary && "bg-[var(--grey-50)] text-[var(--grey-600)]",
        red && "bg-[var(--red)] text-[var(--white)]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
