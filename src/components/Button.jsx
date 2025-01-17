import { cn } from "../utils"
const Button = ({ children, icon: Icon, variant = "primary", className }) => {
  const primary = variant === "primary" && "bg-black text-white text-sm font-semibold"
  const secondary = variant === "secondary" && "bg-foodie-blue text-black"
  const tertiary = variant === "tertiary" && "bg-custom-white text-black"
  const danger = variant === "danger" && "bg-red-500 text-white"
  return (
    <button
      className={cn(`flexCenter whitespace-nowrap font-semibold ss:py-2 ss:px-4 ss:text-[10px] sm:py-4 sm:text-xs lg:py-5 lg:px-8 lg:text-sm rounded-xl border-none gap-4 ${className}`,
        primary, secondary, danger, tertiary
      )}
    >
      {children}
      {Icon}
    </button>
  );
}

export default Button;