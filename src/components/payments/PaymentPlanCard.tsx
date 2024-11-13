import React from 'react';
import { Calendar, CreditCard, CheckCircle } from 'lucide-react';

interface PaymentPlanProps {
  totalAmount: number;
  installments: number;
  monthlyAmount: number;
  nextPaymentDate: string;
  progress: number;
  onSelectPlan: () => void;
}

export default function PaymentPlanCard({
  totalAmount,
  installments,
  monthlyAmount,
  nextPaymentDate,
  progress,
  onSelectPlan
}: PaymentPlanProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {installments} Month Plan
          </h3>
          <p className="text-sm text-gray-600">
            ₹{monthlyAmount.toLocaleString()}/month
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Amount</p>
          <p className="text-xl font-bold text-gray-800">₹{totalAmount.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{progress}% Complete</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Next payment: {nextPaymentDate}</span>
        </div>

        <button
          onClick={onSelectPlan}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <CreditCard className="w-4 h-4" />
          Select Plan
        </button>
      </div>
    </div>
  );
}