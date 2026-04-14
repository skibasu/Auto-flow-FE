import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import "./../index.css"

type ButtonProps = PropsWithChildren<
    {
        variant?: "primary" | "secondary"
    } & ButtonHTMLAttributes<HTMLButtonElement>
>

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-400",
        secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
            {children}
        </button>
    )
}
