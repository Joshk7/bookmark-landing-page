import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `px-3.5 py-2.5 rounded-[0.3125rem] bg-[var(--blue-600)] text-[var(--white)]
        leading-loose text-[0.9375rem] font-medium whitespace-nowrap
        `,
        className
      )}
    >
        {children}
    </button>
  );
};

export default Button;
