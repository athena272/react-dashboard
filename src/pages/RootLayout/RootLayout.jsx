import { Link, Outlet } from "react-router-dom";
import { StockContextProvider } from "../../contexts/StockContext";

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
            <StockContextProvider>
                <Outlet />
            </StockContextProvider>
        </div>
        <footer>
            Feito com React e React Router!
        </footer>
    </>
)

export default RootLayout