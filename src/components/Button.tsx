import { ReactNode } from "react";

interface ButtonProps {
  color: string;
  icon?: ReactNode;
  width?: string;
  bgColor?: string;
  text?: string;
  borderRadius: string;
  size?: string;
  bgHoverColor?: string;
}

export default function Button({color, icon, bgColor, borderRadius, text, size, bgHoverColor, width}: ButtonProps) {
  return (
    <button 
      type="button" 
      style={{backgroundColor: bgColor, color: color, borderRadius}}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}