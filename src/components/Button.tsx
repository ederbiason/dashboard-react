
interface ButtonProps {
  color: string;
  bgColor: string;
  text: string;
  borderRadius: string;
  size?: string;
}

export default function Button({color, bgColor, borderRadius, text, size}: ButtonProps) {
  return (
    <button 
      type="button" 
      style={{backgroundColor: bgColor, color: color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}