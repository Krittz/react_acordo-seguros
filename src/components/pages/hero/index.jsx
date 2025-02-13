import SocialLink from "../../ui/SocialLink";
import TypingEffect from "../../ui/TypingEffect";
import "./style.css";

const Hero = () => {
  const socialMedia = [
    {
      media: "instagram",
      icon: "bi-instagram",
      url: "https://www.instagram.com/acordocorretoradeseguros/",
    },
    {
      media: "whatsapp",
      icon: "bi-whatsapp",
      url: "https://api.whatsapp.com/send/?phone=5538999838896&text=Olá%20Acordo%20Seguros,%20encontrei%20vocês%20pelo%20site.%0A%0AEu%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.&app_absent=0",
    },
    {
      media: "e-mail",
      icon: "bi-envelope-at",
      url: "mailto:acordo@acordoseguros.com?subject=Contato%20do%20site&body=Olá%20Acordo%20Seguros,%20encontrei%20vocês%20pelo%20site.%0A%0AEu%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
    },
  ];
  return (
    <>
      <div className="hero position-relative container-fluid d-flex justify-content-center align-items-center">
        <div className="hero-links position-relative d-flex flex-column gap-3 fs-3">
          {socialMedia.map((i) => (
            <SocialLink icon={i.icon} url={i.url} key={i.media} />
          ))}
        </div>
        <div className="hero-data w-100 container">
          <div className="hero-content text-center">
            <div className="hero-title">
              <h1 className="text-uppercase">Acordo</h1>
              <h2>Corretora de Seguros</h2>
              <TypingEffect />
            </div>
            <h3 className="hero-subtitle fs-5 mt-2 mb-5 fw-bold">
              Esse é o nosso acordo com você.
            </h3>
            <p className="hero-description text-center container fs-5">
              Protegendo o que mais importa com soluções sob medida. Garantimos
              sua tranquilidade com um atendimento personalizado, transparente e
              rápido, para que você esteja sempre seguro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
