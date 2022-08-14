function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: false,
  type: 'button'
};

export default Button;
