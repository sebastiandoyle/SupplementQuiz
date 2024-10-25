export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}