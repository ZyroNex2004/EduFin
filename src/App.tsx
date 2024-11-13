import { type ReactElement } from 'react';
import { GraduationCap } from 'lucide-react';
import LoanCalculator from './components/LoanCalculator';
import FinancialDashboard from './components/FinancialDashboard';
import ResourceCenter from './components/ResourceCenter';
import InstallmentPayments from './components/payments/InstallmentPayments';
import LoginButton from './components/LoginButton';

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">EduFin</h1>
            </div>
            <LoginButton className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Payment Plans Section */}
          <section>
            <InstallmentPayments />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Loan Calculator */}
            <div className="lg:col-span-1">
              <LoanCalculator />
            </div>

            {/* Right Column - Dashboard and Resources */}
            <div className="lg:col-span-2 space-y-8">
              <FinancialDashboard />
              <ResourceCenter />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} EduFin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;