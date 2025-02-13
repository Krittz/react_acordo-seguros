import "./style.css"
const NavItem = ({ value, url }) => {
  return (
    <>
      <a href={url} className="nav-link dropdown-item">
        {value}
      </a>
    </>
  );
};

export default NavItem;
