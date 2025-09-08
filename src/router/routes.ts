import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // ========== AUTHENTICATION ==========
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('pages/auth/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import('pages/auth/RegisterPage.vue'),
      },
      {
        path: 'logout',
        name: 'auth.logout',
        component: () => import('pages/auth/LogoutPage.vue'),
      },
    ],
  },
  // ========== MAIN LAYOUT ROUTES ==========
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Dashboard
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'dashboard', name: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/user/AccountPage.vue') },
      { path: 'more', name: 'more', component: () => import('pages/more/IndexPage.vue') },

      // ========== DOCUMENTS (CHỨNG TỪ) ==========
      // Thu tiền mặt
      {
        path: 'receipt/cash/create',
        name: 'receipt.cash.create',
        component: () => import('pages/receipt/cash/CreatePage.vue'),
      },
      {
        path: 'receipt/cash/customer',
        name: 'receipt.cash.customer',
        component: () => import('pages/receipt/cash/CustomerPage.vue'),
      },
      {
        path: 'receipt/cash/amount',
        name: 'receipt.cash.amount',
        component: () => import('pages/receipt/cash/AmountPage.vue'),
      },
      {
        path: 'receipt/cash/reason',
        name: 'receipt.cash.reason',
        component: () => import('pages/receipt/cash/ReasonPage.vue'),
      },
      {
        path: 'receipt/cash/account',
        name: 'receipt.cash.account',
        component: () => import('pages/receipt/cash/AccountPage.vue'),
      },
      {
        path: 'receipt/cash/store',
        name: 'receipt.cash.store',
        component: () => import('pages/receipt/cash/StorePage.vue'),
      },

      // Thu tiền gửi
      {
        path: 'receipt/bank/create',
        name: 'receipt.bank.create',
        component: () => import('pages/receipt/bank/CreatePage.vue'),
      },
      {
        path: 'receipt/bank/transfer',
        name: 'receipt.bank.transfer',
        component: () => import('pages/receipt/bank/TransferPage.vue'),
      },
      {
        path: 'receipt/bank/account',
        name: 'receipt.bank.account',
        component: () => import('pages/receipt/bank/AccountPage.vue'),
      },
      {
        path: 'receipt/bank/amount',
        name: 'receipt.bank.amount',
        component: () => import('pages/receipt/bank/AmountPage.vue'),
      },
      {
        path: 'receipt/bank/note',
        name: 'receipt.bank.note',
        component: () => import('pages/receipt/bank/NotePage.vue'),
      },

      // Chi tiền mặt
      {
        path: 'payment/cash/create',
        name: 'payment.cash.create',
        component: () => import('pages/payment/cash/CreatePage.vue'),
      },
      {
        path: 'payment/cash/receiver',
        name: 'payment.cash.receiver',
        component: () => import('pages/payment/cash/ReceiverPage.vue'),
      },
      {
        path: 'payment/cash/amount',
        name: 'payment.cash.amount',
        component: () => import('pages/payment/cash/AmountPage.vue'),
      },
      {
        path: 'payment/cash/reason',
        name: 'payment.cash.reason',
        component: () => import('pages/payment/cash/ReasonPage.vue'),
      },
      {
        path: 'payment/cash/account',
        name: 'payment.cash.account',
        component: () => import('pages/payment/cash/AccountPage.vue'),
      },
      {
        path: 'payment/cash/store',
        name: 'payment.cash.store',
        component: () => import('pages/payment/cash/StorePage.vue'),
      },

      // Chi tiền gửi
      {
        path: 'payment',
        name: 'payment',
        component: () => import('pages/payment/IndexPage.vue'),
      },
      {
        path: 'payment/bank/create',
        name: 'payment.bank.create',
        component: () => import('pages/payment/bank/CreatePage.vue'),
      },
      {
        path: 'payment/bank/transfer',
        name: 'payment.bank.transfer',
        component: () => import('pages/payment/bank/TransferPage.vue'),
      },
      {
        path: 'payment/bank/account',
        name: 'payment.bank.account',
        component: () => import('pages/payment/bank/AccountPage.vue'),
      },
      {
        path: 'payment/bank/amount',
        name: 'payment.bank.amount',
        component: () => import('pages/payment/bank/AmountPage.vue'),
      },
      {
        path: 'payment/bank/note',
        name: 'payment.bank.note',
        component: () => import('pages/payment/bank/NotePage.vue'),
      },

      // Mua hàng
      {
        path: 'purchase',
        name: 'purchase',
        component: () => import('pages/purchase/IndexPage.vue'),
      },
      {
        path: 'purchase/create',
        name: 'purchase.create',
        component: () => import('pages/purchase/CreatePage.vue'),
      },
      {
        path: 'purchase/supplier',
        name: 'purchase.supplier',
        component: () => import('pages/purchase/SupplierPage.vue'),
      },
      {
        path: 'purchase/items',
        name: 'purchase.items',
        component: () => import('pages/purchase/ItemsPage.vue'),
      },
      {
        path: 'purchase/amount',
        name: 'purchase.amount',
        component: () => import('pages/purchase/AmountPage.vue'),
      },
      {
        path: 'purchase/vat',
        name: 'purchase.vat',
        component: () => import('pages/purchase/VatPage.vue'),
      },
      {
        path: 'purchase/total',
        name: 'purchase.total',
        component: () => import('pages/purchase/TotalPage.vue'),
      },
      {
        path: 'purchase/payment',
        name: 'purchase.payment',
        component: () => import('pages/purchase/PaymentPage.vue'),
      },
      {
        path: 'purchase/store',
        name: 'purchase.store',
        component: () => import('pages/purchase/StorePage.vue'),
      },

      // Bán hàng
      {
        path: 'sell',
        name: 'sell',
        component: () => import('pages/sell/IndexPage.vue'),
      },
      {
        path: 'sell/create',
        name: 'sell.create',
        component: () => import('pages/sell/CreatePage.vue'),
      },
      {
        path: 'sell/customer',
        name: 'sell.customer',
        component: () => import('pages/sell/CustomerPage.vue'),
      },
      {
        path: 'sell/items',
        name: 'sell.items',
        component: () => import('pages/sell/ItemsPage.vue'),
      },
      {
        path: 'sell/amount',
        name: 'sell.amount',
        component: () => import('pages/sell/AmountPage.vue'),
      },
      {
        path: 'sell/vat',
        name: 'sell.vat',
        component: () => import('pages/sell/VatPage.vue'),
      },
      {
        path: 'sell/total',
        name: 'sell.total',
        component: () => import('pages/sell/TotalPage.vue'),
      },
      {
        path: 'sell/payment',
        name: 'sell.payment',
        component: () => import('pages/sell/PaymentPage.vue'),
      },

      // Hóa đơn
      {
        path: 'invoice/issue',
        name: 'invoice.issue',
        component: () => import('pages/invoice/IssuePage.vue'),
      },
      {
        path: 'invoice/from-sell',
        name: 'invoice.from-sell',
        component: () => import('pages/invoice/FromSellPage.vue'),
      },
      {
        path: 'invoice/auto-number',
        name: 'invoice.auto-number',
        component: () => import('pages/invoice/AutoNumberPage.vue'),
      },
      {
        path: 'invoice/print',
        name: 'invoice.print',
        component: () => import('pages/invoice/PrintPage.vue'),
      },
      {
        path: 'invoice/send',
        name: 'invoice.send',
        component: () => import('pages/invoice/SendPage.vue'),
      },

      // ========== TAX REPORTS ==========
      {
        path: 'tax/overview',
        name: 'tax.overview',
        component: () => import('pages/tax/OverviewPage.vue'),
      },
      {
        path: 'tax/output',
        name: 'tax.output',
        component: () => import('pages/tax/OutputPage.vue'),
      },
      {
        path: 'tax/input',
        name: 'tax.input',
        component: () => import('pages/tax/InputPage.vue'),
      },
      {
        path: 'tax/payable',
        name: 'tax.payable',
        component: () => import('pages/tax/PayablePage.vue'),
      },
      {
        path: 'tax/report',
        name: 'tax.report',
        component: () => import('pages/tax/ReportPage.vue'),
      },

      // ========== REPORTS ==========
      // Báo cáo kết quả hoạt động kinh doanh
      {
        path: 'report',
        name: 'report',
        component: () => import('pages/report/IndexPage.vue'),
      },

      // Báo cáo công nợ
      {
        path: 'report/debt/receivable',
        name: 'report.debt.receivable',
        component: () => import('pages/report/debt/ReceivablePage.vue'),
      },
      {
        path: 'report/debt/customers',
        name: 'report.debt.customers',
        component: () => import('pages/report/debt/CustomersPage.vue'),
      },
      {
        path: 'report/debt/customer-amount',
        name: 'report.debt.customer-amount',
        component: () => import('pages/report/debt/CustomerAmountPage.vue'),
      },
      {
        path: 'report/debt/period',
        name: 'report.debt.period',
        component: () => import('pages/report/debt/PeriodPage.vue'),
      },
      {
        path: 'report/debt/age',
        name: 'report.debt.age',
        component: () => import('pages/report/debt/AgePage.vue'),
      },
      {
        path: 'report/debt/payable',
        name: 'report.debt.payable',
        component: () => import('pages/report/debt/PayablePage.vue'),
      },
      {
        path: 'report/debt/suppliers',
        name: 'report.debt.suppliers',
        component: () => import('pages/report/debt/SuppliersPage.vue'),
      },
      {
        path: 'report/debt/supplier-amount',
        name: 'report.debt.supplier-amount',
        component: () => import('pages/report/debt/SupplierAmountPage.vue'),
      },
      {
        path: 'report/debt/due-date',
        name: 'report.debt.due-date',
        component: () => import('pages/report/debt/DueDatePage.vue'),
      },
      {
        path: 'report/debt/history',
        name: 'report.debt.history',
        component: () => import('pages/report/debt/HistoryPage.vue'),
      },

      // Báo cáo tồn kho
      {
        path: 'report/inventory/overview',
        name: 'report.inventory.overview',
        component: () => import('pages/report/inventory/OverviewPage.vue'),
      },
      {
        path: 'report/inventory/items',
        name: 'report.inventory.items',
        component: () => import('pages/report/inventory/ItemsPage.vue'),
      },
      {
        path: 'report/inventory/quantity',
        name: 'report.inventory.quantity',
        component: () => import('pages/report/inventory/QuantityPage.vue'),
      },
      {
        path: 'report/inventory/value',
        name: 'report.inventory.value',
        component: () => import('pages/report/inventory/ValuePage.vue'),
      },
      {
        path: 'report/inventory/flow',
        name: 'report.inventory.flow',
        component: () => import('pages/report/inventory/FlowPage.vue'),
      },

      // Báo cáo tài chính
      {
        path: 'report/finance/profit-loss',
        name: 'report.finance.profit-loss',
        component: () => import('pages/report/finance/ProfitLossPage.vue'),
      },
      {
        path: 'report/finance/revenue',
        name: 'report.finance.revenue',
        component: () => import('pages/report/finance/RevenuePage.vue'),
      },
      {
        path: 'report/finance/cogs',
        name: 'report.finance.cogs',
        component: () => import('pages/report/finance/CogsPage.vue'),
      },
      {
        path: 'report/finance/gross-profit',
        name: 'report.finance.gross-profit',
        component: () => import('pages/report/finance/GrossProfitPage.vue'),
      },
      {
        path: 'report/finance/operating-cost',
        name: 'report.finance.operating-cost',
        component: () => import('pages/report/finance/OperatingCostPage.vue'),
      },
      {
        path: 'report/finance/net-profit',
        name: 'report.finance.net-profit',
        component: () => import('pages/report/finance/NetProfitPage.vue'),
      },
      // ========== MISC FEATURES ==========
      {
        path: 'user/account',
        name: 'user.account',
        component: () => import('pages/user/AccountPage.vue'),
      },
      {
        path: 'app/rating',
        name: 'app.rating',
        component: () => import('pages/app/RatingPage.vue'),
      },
      {
        path: 'app/feedback',
        name: 'app.feedback',
        component: () => import('pages/app/FeedbackPage.vue'),
      },
      {
        path: 'app/share',
        name: 'app.share',
        component: () => import('pages/app/SharePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
