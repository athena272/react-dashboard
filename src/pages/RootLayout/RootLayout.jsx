import { Link, Outlet } from "react-router-dom";

const RootLayout = () => (
    <>
        <header>
            <Link to="/" className="logo">REACT STOCK</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>
        <div>
            <Outlet />
        </div>
        <footer>
            Feito com React e React Router!
        </footer>
    </>
)

export default RootLayout