import React, { useState } from 'react';
import { CreditCard, Smartphone, Building, Lock } from 'lucide-react';

interface PaymentMethodProps {
  onSubmit: (data: any) => void;
}

type PaymentType = 'card' | 'upi' | 'netbanking';

export default function PaymentMethod({ onSubmit }: PaymentMethodProps) {
  const [paymentType, setPaymentType] = useState<PaymentType>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');

  const banks = [
    'HDFC Bank',
    'ICICI Bank',
    'State Bank of India',
    'Axis Bank',
    'Kotak Mahindra Bank'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paymentData = {
      type: paymentType,
      ...(paymentType === 'card' && { cardNumber, expiry, cvc, name }),
      ...(paymentType === 'upi' && { upiId }),
      ...(paymentType === 'netbanking' && { bank })
    };
    onSubmit(paymentData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Payment Method</h2>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPaymentType('card')}
          className={`flex-1 p-3 rounded-lg border ${
            paymentType === 'card'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200'
          }`}
        >
          <CreditCard className="w-5 h-5 mx-auto mb-2" />
          <span className="text-sm">Card</span>
        </button>
        <button
          onClick={() => setPaymentType('upi')}
          className={`flex-1 p-3 rounded-lg border ${
            paymentType === 'upi'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200'
          }`}
        >
          <Smartphone className="w-5 h-5 mx-auto mb-2" />
          <span className="text-sm">UPI</span>
        </button>
        <button
          onClick={() => setPaymentType('netbanking')}
          className={`flex-1 p-3 rounded-lg border ${
            paymentType === 'netbanking'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200'
          }`}
        >
          <Building className="w-5 h-5 mx-auto mb-2" />
          <span className="text-sm">Net Banking</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {paymentType === 'card' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={19}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={3}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        )}

        {paymentType === 'upi' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              UPI ID
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="username@upi"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        {paymentType === 'netbanking' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Bank
            </label>
            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a bank</option>
              {banks.map((bankName) => (
                <option key={bankName} value={bankName}>
                  {bankName}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
          <Lock className="w-4 h-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}