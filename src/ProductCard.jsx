function ProductCard({ product, cart, setCart }) {
    const addToCart = () => {
        const exists = cart.find(item => item.id === product.id);

        if (exists) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col p-4">
            <div className="h-40 flex items-center justify-center mb-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full object-contain"
                />
            </div>

            <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
                {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">${product.price}</p>

            <button
                onClick={addToCart}
                className="mt-auto bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;