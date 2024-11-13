import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import PaymentPlanCard from './PaymentPlanCard';
import PaymentMethod from './PaymentMethod';
import PaymentSuccess from './PaymentSuccess';

export default function InstallmentPayments() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const plans = [
    {
      totalAmount: 120000,
      installments: 12,
      monthlyAmount: 10000,
      nextPaymentDate: 'March 15, 2024',
      progress: 25
    },
    {
      totalAmount: 120000,
      installments: 6,
      monthlyAmount: 20000,
      nextPaymentDate: 'March 15, 2024',
      progress: 0
    },
    {
      totalAmount: 120000,
      installments: 3,
      monthlyAmount: 40000,
      nextPaymentDate: 'March 15, 2024',
      progress: 0
    }
  ];

  const handlePlanSelect = (index: number) => {
    setSelectedPlan(index);
    setShowPaymentMethod(true);
  };

  const handlePaymentSubmit = (paymentData: any) => {
    console.log('Payment submitted:', paymentData);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setShowPaymentMethod(false);
    setSelectedPlan(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <CreditCard className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Payment Plans</h2>
      </div>

      {showSuccess ? (
        <div className="max-w-md mx-auto">
          <PaymentSuccess onClose={handleSuccessClose} />
        </div>
      ) : !showPaymentMethod ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PaymentPlanCard
              key={index}
              {...plan}
              onSelectPlan={() => handlePlanSelect(index)}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-md">
          <PaymentMethod onSubmit={handlePaymentSubmit} />
          <button
            onClick={() => setShowPaymentMethod(false)}
            className="mt-4 text-blue-600 hover:text-blue-700 text-sm"
          >
            ← Back to payment plans
          </button>
        </div>
      )}
    </div>
  );
}