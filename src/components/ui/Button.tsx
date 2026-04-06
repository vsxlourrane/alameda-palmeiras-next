interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "inline-block font-black py-5 px-10 rounded-sm uppercase text-xs tracking-widest transition-all duration-500 shadow-xl";
  const variants = {
    primary: "bg-brand-gold text-brand-primary hover:bg-white hover:text-brand-primary shadow-brand-gold/20",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };

  return (
    <a {...props} className={`${baseStyles} ${variants[variant]} ${props.className}`}>
      {children}
    </a>
  );
}