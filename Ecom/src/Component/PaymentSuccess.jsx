// src/components/PaymentSuccess.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
            <p className="text-lg text-center mb-6">
                Thank you for your purchase! Explore more products to find what you love.
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
                Explore More
            </button>
        </div>
    );
};

export default PaymentSuccess;
