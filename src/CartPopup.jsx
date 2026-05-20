function CartPopup({ cart, setCart, setIsOpen }) {
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white w-full max-w-2xl p-5 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Cart Items</h2>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Cart is empty</p>
                ) : (
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-2"
                            >
                                <p className="text-sm">{item.title}</p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPopup;