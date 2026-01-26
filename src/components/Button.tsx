type Variant = "primary" | "secondary" | "card" | "clear";

type Props = {
  text: string;
  variant?: Variant;
};

const Button = ({ text, variant = "primary" }: Props) => {
  const baseStyle: string =
    "py-2.5 px-4 cursor-pointer rounded-lg text-center transition font-semibold text-sm lg:rounded-xl";

  const variants: Record<Variant, string> = {
    primary: "text-primary bg-white hover:bg-white/90",
    secondary: "bg-blue-600 text-white",
    card: "bg-primary w-full text-white hover:bg-primary/90",
    clear: "bg-gray-300 w-full text-black",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>{text}</button>
  );
};

export default Button;
