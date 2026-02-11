type Variant =
  | "primary"
  | "secondary"
  | "card"
  | "cardIcon"
  | "clear"
  | "cardWithIcon";

type Props = {
  text: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
};

const Button = ({ text, variant = "primary", onClick, icon }: Props) => {
  const baseStyle: string =
    "group cursor-pointer rounded-lg text-center text-sm font-semibold shadow-md transition lg:rounded-xl";

  const variants: Record<Variant, string> = {
    primary: "text-primary bg-white px-4 py-2.5 hover:bg-white/90",
    secondary: "bg-blue-600 px-4 py-2.5 text-white",
    card: "bg-primary hover:bg-primary/90 px-4 py-2.5 text-white",
    cardIcon: "hover:bg-primary/90 bg-blue-200 p-2 text-blue-600",
    cardWithIcon:
      "bg-primary hover:bg-primary/90 mx-auto flex w-full items-center justify-center gap-2 p-2 text-white",
    clear: "w-full bg-gray-300 px-4 py-2.5 text-black",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {icon} {text}
    </button>
  );
};

export default Button;
