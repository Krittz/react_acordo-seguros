import NavItem from "../NavItem";
import "./style.css";
const Navbar = () => {
  const seguros = [
    { value: "Vida", url: "http://" },
    { value: "Saúde", url: "http://" },
    { value: "Automóvel", url: "http://" },
    { value: "Residencial", url: "http://" },
    { value: "Empresarial", url: "http://" },
    { value: "Previdência", url: "http://" },
    { value: "Odontológico", url: "http://" },
    { value: "Acidentes Pessoais", url: "http://" },
    { value: "Transporte de Cargas", url: "http://" },
    { value: "Responsabilidade Civil Geral", url: "http://" },
    { value: "Responsabilidade Civil Profissional", url: "http://" },
    { value: "Máquinas e Equipamentos Agrícolas", url: "http://" },
  ];
  const consorcios = [
    { value: "Automóveis", url: "https://" },
    { value: "Imóveis", url: "https://" },
    { value: "Serviços", url: "https://" },
  ];

  const rastreios = [
    { value: "Motocicletas", url: "http://" },
    { value: "Veículos de Passeio", url: "http://" },
  ];
  const financiamentos = [{ value: "Automóveis", url: "http://" }];
  return (
    <nav className="navbar navbar-expand-lg z-3 w-100">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src="assets/images/logos/logo.svg" alt="Logo Acordo Seguros" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link">Início</a>
            </li>
            <li className="nav-item megamenu dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Serviços
              </a>
              <div className="dropdown-menu">
                <div className="container d-flex">
                  <div className="row">
                    <div className="col-lg megamenu-column">
                      <h2 className="dropdown-header fw-bold fs-6">
                        <i className="bi bi-shield-lock"></i> Seguros
                      </h2>
                      {seguros.map((i, l) => (
                        <NavItem key={l} url={i.url} value={i.value} />
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg megamenu-column">
                      <h2 className="dropdown-header fw-bold fs-6">
                        <i className="bi bi-coin"></i> Consórcios
                      </h2>
                      {consorcios.map((i, l) => (
                        <NavItem key={l} url={i.url} value={i.value} />
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg megamenu-column">
                      <h2 className="dropdown-header fw-bold fs-6">
                        <i className="bi bi-geo-alt"></i> Rastreamento de
                        Veículos
                      </h2>
                      {rastreios.map((i, l) => (
                        <NavItem key={l} url={i.url} value={i.value} />
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg megamenu-column">
                      <h2 className="dropdown-header fw-bold fs-6">
                        <i className="bi bi-bank"></i> Financiamento e
                        Refinanciamento
                      </h2>
                      {financiamentos.map((i, l) => (
                        <NavItem key={l} url={i.url} value={i.value} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link">F.A.Q</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
