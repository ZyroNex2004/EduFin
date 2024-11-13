import { type ReactElement } from 'react';
import { PieChart, Wallet, TrendingUp, Bell } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
  type: 'warning' | 'info' | 'alert';
}

interface Expense {
  category: string;
  amount: number;
}


export default function FinancialDashboard(): ReactElement {
  const notifications: Notification[] = [
    { id: 1, message: "Upcoming loan payment due in 5 days", type: "warning" },
    { id: 2, message: "New scholarship opportunity available", type: "info" },
    { id: 3, message: "You've reached 80% of your monthly budget", type: "alert" }
  ];

  const expenses: Expense[] = [
    { category: "Tuition", amount: 50000 },
    { category: "Books", amount: 3000 },
    { category: "Housing", amount: 8000 },
    { category: "Food", amount: 4000 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Balance Overview */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Balance Overview</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Current Balance</span>
            <span className="text-xl font-bold">₹24,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pending Payments</span>
            <span className="text-red-500">-₹3,500</span>
          </div>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Expense Breakdown</h3>
        </div>
        <div className="space-y-3">
          {expenses.map((expense, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{expense.category}</span>
              <span className="font-medium">₹{expense.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Notifications</h3>
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg ${
                notification.type === 'warning'
                  ? 'bg-yellow-50 text-yellow-700'
                  : notification.type === 'info'
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}