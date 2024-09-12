export default function BrandTag({ className, label, variant = "light" }) {
  const variantClass = {
    light: "text-black bg-primary-200 hover:bg-primary-300 ",
    dark: "bg-primary-400 text-white hover:bg-primary-300",
  };
  return (
    <div
      className={`rounded-full px-3 py-1 font-jakarta text-xs mb-1 font-medium ${variantClass[variant]} ${className}`}
    >
      {label}
    </div>
  );
}
