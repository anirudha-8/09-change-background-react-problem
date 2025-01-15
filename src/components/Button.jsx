const Button = ({ label, color, onClick }) => {
	return (
		<button
			className="color-button"
			style={{ color, borderColor: color }}
			aria-label={`Set background to ${label}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
