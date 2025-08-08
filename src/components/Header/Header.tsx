import "./header.scss";

interface HeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

const Header = ({ onMenuToggle, menuOpen }: HeaderProps) => {
  return (
    <nav className="header">
      <div className="header__left">
        <div className="header__menu" onClick={onMenuToggle}>
          <div className={`header__burger ${menuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header__logo">
          <img src="/images/logo.svg" alt="FinTrack" />
        </div>
      </div>
      
      <div className="header__right">
        <button className="header__icon">
          <img src="/images/search.svg" alt="Search" />
        </button>
        <button className="header__icon">
          <img src="/images/app-grid.svg" alt="Grid" />
        </button>
        <div className="header__profile">
          <img 
            src="images/avatar.png" 
            alt="Profile" 
            className="profile-avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
