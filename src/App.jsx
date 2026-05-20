import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import CartPopup from "./CartPopup";

function App() {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar cart={cart} setIsOpen={setIsOpen} />
            <Home cart={cart} setCart={setCart} />

            {isOpen && (
                <CartPopup cart={cart} setCart={setCart} setIsOpen={setIsOpen} />
            )}
        </div>
    );
}

export default App;

