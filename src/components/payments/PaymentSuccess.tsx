import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PaymentSuccessProps {
  onClose: () => void;
}

export default function PaymentSuccess({ onClose }: PaymentSuccessProps) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful!</h3>
      <p className="text-gray-600 mb-4">Your payment has been processed successfully.</p>
      <button
        onClick={onClose}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Continue
      </button>
    </div>
  );
}