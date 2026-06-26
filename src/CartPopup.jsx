function CartPopup({ cart, setCart, setIsOpen }) {

    const increaseQty = (id) => {
        setCart(
            cart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart
                .map(item =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">

            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl">

                {/* Header */}

                <div className="flex justify-between items-center border-b p-6">

                    <h2 className="text-2xl font-bold">
                        🛒 Shopping Cart
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-2xl hover:text-red-500 cursor-pointer"
                    >
                        ✕
                    </button>

                </div>

                {/* Body */}

                <div className="max-h-[450px] overflow-y-auto p-6 space-y-5">

                    {cart.length === 0 ? (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold text-gray-500">
                                Your cart is empty
                            </h3>
                        </div>
                    ) : (

                        cart.map(item => (

                            <div
                                key={item.id}
                                className="flex items-center justify-between border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                            >

                                {/* Image */}

                                <div className="w-24 h-24 flex justify-center items-center">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-20 object-contain"
                                    />

                                </div>

                                {/* Details */}

                                <div className="flex-1 px-5">

                                    <h3 className="font-semibold line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-green-600 font-bold mt-2">
                                        ${item.price}
                                    </p>

                                </div>

                                {/* Quantity */}

                                <div className="flex items-center gap-3">

                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        className="w-9 h-9 rounded-full bg-red-500 text-white text-xl cursor-pointer"
                                    >
                                        -
                                    </button>

                                    <span className="text-lg font-bold w-6 text-center">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        className="w-9 h-9 rounded-full bg-green-500 text-white text-center text-xl cursor-pointer"
                                    >
                                        +
                                    </button>

                                </div>

                                {/* Price */}

                                <div className="w-32 text-right">

                                    <p className="font-bold text-lg">
                                        $
                                        {(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 mt-2 hover:underline cursor-pointer"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))
                    )}

                </div>

                {/* Footer */}

                {cart.length > 0 && (

                    <div className="border-t p-6">

                        <div className="flex justify-between items-center mb-5">

                            <h2 className="text-2xl font-bold">
                                Total
                            </h2>

                            <h2 className="text-3xl font-bold text-green-600">
                                ${total.toFixed(2)}
                            </h2>

                        </div>

                        <div className="flex gap-4">

                            <button
                                onClick={() => setCart([])}
                                className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            >
                                Clear Cart
                            </button>

                            <button
                                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer"
                            >
                                Checkout
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default CartPopup;