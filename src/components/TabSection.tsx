import clsx from "clsx";

type TabSectionProps = {
  onPress: () => void;
  children: React.ReactNode;
  active: boolean;
};

const TabSection = ({ onPress, children, active }: TabSectionProps) => {
  console.log(onPress, active);
  return (
    <button
      onClick={() => {
        onPress();
      }}
      className={clsx(
        "w-full py-4 cursor-pointer relative",
        active &&
          `after:content-[''] 
           after:absolute 
           after:bottom-0 
           after:left-1/4 
           sm:after:left-0 
           after:h-1 
           after:w-1/2 
           sm:after:w-full 
           after:bg-[var(--red)]`
      )}
    >
      {children}
    </button>
  );
};

export default TabSection;
