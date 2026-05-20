function Navbar({ cart, setIsOpen }) {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
            <h1 className="text-2xl font-semibold">DuDu Store</h1>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg cursor-pointer"
            >
                Cart ({cart.length})
            </button>
        </nav>
    );
}

export default Navbar;