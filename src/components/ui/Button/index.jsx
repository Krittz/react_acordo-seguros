import "./style.css";
const Button = ({ content, type, variant, url }) => {
  return (
    <>
      {url ? (
        <a
          className={`btn ${variant}`}
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          <span>{content}</span>
          <i></i>
        </a>
      ) : (
        <button className={`btn ${variant}`} type={type}>
          <span>{content}</span>
          <i></i>
        </button>
      )}
    </>
  );
};
export default Button;
