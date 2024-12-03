import { ReactNode } from "react"

interface ButtonProps {
    className?: string;
    children:ReactNode;
}
function Button({ children, className, ...props }: ButtonProps) {
  return <button className={className} {...props}>
    {children}
  </button>
}

export default Button
