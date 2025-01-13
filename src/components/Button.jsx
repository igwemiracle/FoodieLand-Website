import { cn } from "../utils"
const Button = ({ children, icon: Icon, variant = "primary", className }) => {
  const primary = variant === "primary" && "bg-black text-white text-sm font-semibold"
  const secondary = variant === "secondary" && "bg-foodie-blue text-black"
  const tertiary = variant === "tertiary" && "bg-[#FFFFFF] text-black"
  const danger = variant === "danger" && "bg-red-500 text-white"
  return (
    <button
      className={cn(`font-semibold py-5 px-10 rounded-xl border-none flex items-center justify-center gap-4 ${className}`,
        primary, secondary, danger, tertiary
      )}
    >
      {children}
      {Icon}
    </button>
  );
}

export default Button;