import React, { useState } from 'react';
import { Wallet as WalletIcon, CreditCard, ArrowUpRight, ArrowDownLeft, TrendingUp } from 'lucide-react';

interface WalletProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'Farmer Wallet',
    subtitle: 'Your carbon credit earnings and payment history',
    balance: 'Current Balance',
    totalEarned: 'Total Earned',
    creditsBalance: 'Credits Balance',
    pendingPayment: 'Pending Payment',
    recentTransactions: 'Recent Transactions',
    paymentMethods: 'Payment Methods',
    cashout: 'Cash Out',
    upiId: 'UPI ID',
    bankAccount: 'Bank Account',
    addPaymentMethod: 'Add Payment Method',
    creditEarned: 'Carbon Credit Payment',
    bonus: 'Data Quality Bonus',
    withdrawal: 'Withdrawal to UPI',
    processed: 'Processed',
    pending: 'Pending',
    failed: 'Failed'
  },
  hi: {
    title: 'किसान वॉलेट',
    subtitle: 'आपकी कार्बन क्रेडिट आय और भुगतान इतिहास',
    balance: 'वर्तमान शेष',
    totalEarned: 'कुल आय',
    creditsBalance: 'क्रेडिट शेष',
    pendingPayment: 'भुगतान प्रतीक्षित',
    recentTransactions: 'हाल के लेन-देन',
    paymentMethods: 'भुगतान विधि',
    cashout: 'नकदी निकालें',
    upiId: 'UPI आईडी',
    bankAccount: 'बैंक खाता',
    addPaymentMethod: 'भुगतान विधि जोड़ें',
    creditEarned: 'कार्बन क्रेडिट भुगतान',
    bonus: 'डेटा गुणवत्ता बोनस',
    withdrawal: 'UPI में निकासी',
    processed: 'प्रसंस्कृत',
    pending: 'प्रतीक्षित',
    failed: 'असफल'
  }
};

export function Wallet({ language }: WalletProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [cashoutAmount, setCashoutAmount] = useState('');

  const t = translations[language];

  const transactions = [
    {
      id: 'TXN-001',
      type: 'credit',
      description: t.creditEarned,
      amount: 1250,
      credits: 2.5,
      status: 'processed',
      date: '2024-01-20',
      plotId: 'AG-001'
    },
    {
      id: 'TXN-002',
      type: 'bonus',
      description: t.bonus,
      amount: 125,
      credits: 0,
      status: 'processed',
      date: '2024-01-18',
      plotId: 'AG-001'
    },
    {
      id: 'TXN-003',
      type: 'withdrawal',
      description: t.withdrawal,
      amount: -500,
      credits: 0,
      status: 'pending',
      date: '2024-01-15',
      plotId: null
    },
    {
      id: 'TXN-004',
      type: 'credit',
      description: t.creditEarned,
      amount: 830,
      credits: 1.66,
      status: 'processed',
      date: '2024-01-10',
      plotId: 'AG-002'
    }
  ];

  const paymentMethods = [
    {
      id: 'upi-1',
      type: 'UPI',
      details: 'rajesh@paytm',
      primary: true
    },
    {
      id: 'bank-1',
      type: 'Bank',
      details: 'SBI - ****6789',
      primary: false
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'credit':
      case 'bonus':
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
      case 'withdrawal':
        return <ArrowUpRight className="h-4 w-4 text-red-600" />;
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <WalletIcon className="h-8 w-8" />
          <h2 className="text-2xl font-bold">{t.title}</h2>
        </div>
        <p className="opacity-90 mb-6">{t.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">₹6,250</div>
            <div className="text-sm opacity-80">{t.balance}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">₹12,450</div>
            <div className="text-sm opacity-80">{t.totalEarned}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">12.5</div>
            <div className="text-sm opacity-80">{t.creditsBalance}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">₹2,500</div>
            <div className="text-sm opacity-80">{t.pendingPayment}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('transactions')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.recentTransactions}
            </button>
            <button
              onClick={() => setSelectedTab('cashout')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'cashout'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.cashout}
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Earnings Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Monthly Earnings
                  </h3>
                  <div className="h-32 flex items-end space-x-2">
                    {[40, 65, 45, 80, 50, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-green-500 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t.paymentMethods}</h3>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                          <div>
                            <div className="font-medium">{method.type}</div>
                            <div className="text-sm text-gray-500">{method.details}</div>
                          </div>
                        </div>
                        {method.primary && (
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Primary</span>
                        )}
                      </div>
                    ))}
                    <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600">
                      {t.addPaymentMethod}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'transactions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.recentTransactions}</h3>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getTransactionIcon(transaction.type)}
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-gray-500">
                          {transaction.date} • {transaction.plotId || 'Wallet'}
                          {transaction.credits > 0 && ` • ${transaction.credits} credits`}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)}`}>
                        {transaction.status === 'processed' ? t.processed : 
                         transaction.status === 'pending' ? t.pending : t.failed}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'cashout' && (
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-6 text-center">{t.cashout}</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
                  <input
                    type="number"
                    value={cashoutAmount}
                    onChange={(e) => setCashoutAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter amount"
                    max="6250"
                  />
                  <p className="text-xs text-gray-500 mt-1">Available: ₹6,250</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>UPI - rajesh@paytm</option>
                    <option>Bank Account - SBI ****6789</option>
                  </select>
                </div>

                <button className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Confirm Withdrawal
                </button>

                <div className="text-center text-xs text-gray-500">
                  <p>Processing time: 1-3 business days</p>
                  <p>No transaction fees</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}