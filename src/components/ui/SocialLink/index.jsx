import "./style.css";
const SocialLink = ({ icon, url }) => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        className="position-relative"
      >
        <i className={`bi ${icon}`}></i>
      </a>
    </>
  );
};
export default SocialLink;
