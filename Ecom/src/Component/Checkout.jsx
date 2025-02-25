// src/components/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
    const { state, clearCart } = useCart(); // Get cart items and clearCart function from context
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Calculate total amount from cart items
    const totalAmount = state.items.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://zoroz-backend-w2wh.onrender.com/api/checkout", {
                items: state.items,
                totalAmount: totalAmount,
            });

            // Check if the backend response has a success flag
            if (response.data && response.data.success) {
                toast.success("Payment successful!");
                clearCart(); // Clear the cart after successful payment
                navigate("/payment-success"); // Navigate to the payment success page
            } else {
                toast.error("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error("Payment error:", error);
            toast.error("Payment failed. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Redirect to home if cart is empty
        if (state.items.length === 0) {
            navigate("/"); 
        }
    }, [state.items, navigate]);

    return (
        <div className="container mx-auto my-10 p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
            {state.items.length === 0 ? (
                <div className="text-center">
                    <p className="text-gray-700">Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Cart Items</h3>
                        <ul>
                            {state.items.map((item) => (
                                <li key={item.id} className="flex items-center border-b py-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded" />
                                    <div className="flex justify-between w-full">
                                        <span>{item.name}</span>
                                        <span>Rs {item.price}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between font-bold mb-4">
                        <span>Total:</span>
                        <span>Rs {totalAmount}</span>
                    </div>
                    <button
                        onClick={handlePayment}
                        className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Proceed to Payment"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Checkout;

