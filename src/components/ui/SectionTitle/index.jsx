import "./style.css";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="d-flex flex-column justify-content-center text-center align-items-center mb-5">
      <h1 className="my-3 section-title position-relative fw-bold">{title}</h1>
      <p className="section-subtitle w-50">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
