import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Home({ cart, setCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;