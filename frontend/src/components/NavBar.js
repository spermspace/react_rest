import React from 'react';

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search //путь в адресной строке
  const liClassName = (props.path === pageURI) ? 'nav-item active' : 'nav-item';
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link'
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
      {props.name}
      {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}</a>
    </li>
  )
}

class NavDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const classDropMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false" onClick={(e) => {this.showDropdown(e)}}>
          {this.props.name}
        </a>
        <div className={classDropMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <NavItem path="/" name="Home" />
            <NavItem path="/page2" name="Зачем?" />
            <NavItem path="/page3" name="Disabled" disabled="true" />

            <NavDrop name="Dropdown">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Something else here</a>
            </NavDrop>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default NavBar;
