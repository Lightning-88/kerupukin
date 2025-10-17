const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={() => (window.location.href = props.link || "#")}
    >
      {props.name || "Button"}
    </button>
  );
};

export default Button;
