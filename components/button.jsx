function Button({ title, style, action, type = 'button' }) {
  return (
    <button
      className={`${style} bg-transparent border border-white rounded-md px-7 py-4 font-bold text-white`}
      type={type}
      onClick={action}
    >
      {title}
    </button>
  );
}

export default Button;
