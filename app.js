// Bharat Sats Stacker App JavaScript with Enhanced Error Handling and Sats Focus
// Version 2.1 - Fixed Navigation and Functionality Issues

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global JavaScript Error:', event.error);
  showJSError('A JavaScript error occurred. Some features may not work properly.');
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  showJSError('A system error occurred. Please try refreshing the page.');
});

// Show JavaScript error banner
function showJSError(message) {
  try {
    const errorBanner = document.getElementById('js-error-banner');
    if (errorBanner) {
      errorBanner.querySelector('p').textContent = `⚠️ ${message}`;
      errorBanner.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Could not show error banner:', error);
  }
}

// Hide loading overlay
function hideLoadingOverlay() {
  try {
    const loadingOverlay = document.getElementById('loading-indicator');
    if (loadingOverlay) {
      loadingOverlay.classList.add('hidden');
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }
  } catch (error) {
    console.error('Error hiding loading overlay:', error);
  }
}

// Application data with sats focus - Updated for Bharat Sats Stacker
const appData = {
  user: {
    name: "Arjun Patel",
    email: "arjun.patel@email.com",
    phone: "+91 98765 43210",
    kyc_status: "verified",
    lightning_address: "arjun@bharatsatsstacker.me"
  },
  portfolio: {
    inr_balance: 25000,
    btc_balance: 0.0125,
    sats_balance: 1250000,
    total_invested: 180000,
    current_value: 210000,
    total_gains: 30000,
    gains_percentage: 16.67,
    total_sats_stacked: 1250000
  },
  bitcoin_price: {
    current: 4200000,
    change_24h: 2.5,
    change_7d: -1.2,
    sats_per_rupee: 23.8
  },
  active_sips: [
    {
      id: "sip_001",
      amount: 5000,
      frequency: "weekly",
      start_date: "2024-01-15",
      next_execution: "2025-08-08",
      total_invested: 120000,
      btc_accumulated: 0.0089,
      sats_accumulated: 890000,
      status: "active",
      name: "Weekly Sats Stacker"
    },
    {
      id: "sip_002", 
      amount: 2000,
      frequency: "monthly",
      start_date: "2024-03-01",
      next_execution: "2025-08-01",
      total_invested: 22000,
      btc_accumulated: 0.0036,
      sats_accumulated: 360000,
      status: "active",
      name: "Monthly Accumulator"
    }
  ],
  transactions: [
    {
      id: "tx_001",
      type: "sip_buy",
      amount_inr: 5000,
      amount_btc: 0.00012,
      amount_sats: 12000,
      price: 4150000,
      date: "2025-08-01",
      status: "completed",
      description: "Weekly Sats Stack"
    },
    {
      id: "tx_002",
      type: "one_time_buy", 
      amount_inr: 10000,
      amount_btc: 0.00024,
      amount_sats: 24000,
      price: 4180000,
      date: "2025-07-28",
      status: "completed",
      description: "Bonus Sats Purchase"
    },
    {
      id: "tx_003",
      type: "lightning_receive",
      amount_btc: 0.0001,
      amount_sats: 10000,
      from: "friend@strike.me",
      date: "2025-07-25",
      status: "completed",
      description: "Lightning Sats Received"
    }
  ],
  price_history: [
    {date: "2025-07-01", price: 3800000, sats_per_rupee: 26.3},
    {date: "2025-07-08", price: 3950000, sats_per_rupee: 25.3},
    {date: "2025-07-15", price: 4100000, sats_per_rupee: 24.4},
    {date: "2025-07-22", price: 4050000, sats_per_rupee: 24.7},
    {date: "2025-07-29", price: 4200000, sats_per_rupee: 23.8},
    {date: "2025-08-01", price: 4200000, sats_per_rupee: 23.8}
  ],
  tax_data: {
    current_year_gains: 30000,
    tax_liability: 9000,
    tds_deducted: 1200,
    remaining_tax: 7800
  },
  referral_data: {
    referral_code: "ARJUN2025",
    friends_referred: 3,
    total_earned: 500,
    pending_rewards: 150,
    sats_earned: 50000
  },
  sats_goals: [
    {
      name: "First Million Sats",
      target: 1000000,
      current: 1250000,
      achieved: true,
      achievement_date: "2025-06-15"
    },
    {
      name: "Ten Million Sats Club",
      target: 10000000,
      current: 1250000,
      achieved: false,
      estimated_date: "2026-12-31"
    }
  ]
};
// ...etc