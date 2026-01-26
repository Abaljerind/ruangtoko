type Variant = "primary" | "secondary" | "card" | "cardIcon" | "clear";

type Props = {
  text: string | React.ReactNode;
  variant?: Variant;
};

const Button = ({ text, variant = "primary" }: Props) => {
  const baseStyle: string =
    "cursor-pointer group rounded-lg text-center transition font-semibold text-sm shadow-md lg:rounded-xl";

  const variants: Record<Variant, string> = {
    primary: "py-2.5 px-4 text-primary bg-white hover:bg-white/90",
    secondary: "py-2.5 px-4 bg-blue-600 text-white",
    card: "py-2.5 px-4 bg-primary text-white hover:bg-primary/90",
    cardIcon: "p-2 bg-blue-200 text-blue-600 hover:bg-primary/90",
    clear: "py-2.5 px-4 bg-gray-300 w-full text-black",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>{text}</button>
  );
};

export default Button;
