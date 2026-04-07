interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string; 
}

export function Button({ variant = 'primary', children, href, ...props }: any) {
  const baseStyles = "inline-block font-black py-5 px-10 rounded-sm uppercase text-xs tracking-widest transition-all duration-500 shadow-xl text-center cursor-pointer";
  const variants = {
    primary: "bg-brand-gold text-brand-primary hover:bg-white hover:text-brand-primary shadow-brand-gold/20",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };

  const className = `${baseStyles} ${variants[variant as keyof typeof variants]} ${props.className || ""}`;

  
  if (href) {
    return (
      <a {...props} href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}