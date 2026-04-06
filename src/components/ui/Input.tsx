interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="text-[10px] text-brand-gold font-bold uppercase ml-2 tracking-widest">
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-gold transition-all placeholder:text-gray-500 [color-scheme:dark]"
      />
    </div>
  );
}