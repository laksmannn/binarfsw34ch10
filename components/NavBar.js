import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container">
            <a className="navbar-brand" href="/">BinarWave34</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="/gamelist">
                            Game List
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="/auth/register">
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" href="/auth/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar