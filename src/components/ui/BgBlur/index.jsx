import "./style.css";
const BgBlur = () => {
  return (
    <div className="bg-blur w-100 h-100 position-absolute">
      <img
        src="assets/images/backgrounds-svg/bg-gradient-img1.svg"
        id="bg-blur-1"
        loading="lazy"
        alt="Background Image"
      />
      <img
        src="assets/images/backgrounds-svg/bg-gradient-img2.svg"
        id="bg-blur-2"
        loading="lazy"
        alt="Background Image"
      />
      <img
        src="assets/images/backgrounds-svg/circles-1.svg"
        id="bg-blur-3"
        loading="lazy"
        alt="Background Image"
      />
      <span className="bg-watermark position-absolute mt-5 py-5">
        <img
          src="assets/images/logos/logo-clean.svg"
          alt="Logotipo Acordo Corretora de Seguros como Marca D'água"
          loading="lazy"
        />
      </span>
    </div>
  );
};
export default BgBlur;
