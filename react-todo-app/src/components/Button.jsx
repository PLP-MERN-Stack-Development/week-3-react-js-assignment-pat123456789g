export default function Button({ children, variant = 'primary', ...props }) {
  const styles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white',
  };

  return (
    <button className={`px-4 py-2 rounded ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
