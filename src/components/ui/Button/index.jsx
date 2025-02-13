import "./style.css";
const Button = ({ content, type, variant }) => {
  return (
    <>
      <button className={`btn ${variant}`} type={type}>
        <span>{content}</span>
        <i></i>
      </button>
    </>
  );
};
export default Button;
