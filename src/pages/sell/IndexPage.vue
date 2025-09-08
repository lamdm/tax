<template>
  <q-page class="income-expense-page">
    <!-- Header -->
    <q-toolbar class="bg-white text-dark shadow-1">
      <q-space />
      <q-toolbar-title class="text-h5 text-weight-bold text-dark text-center">
        Bán hàng
      </q-toolbar-title>
      <q-space />
      <q-btn
        round
        color="positive"
        icon="add"
        size="sm"
        unelevated
        @click="addTransaction"
      />
    </q-toolbar>

    <!-- Search Bar -->
    <div class="q-pa-md bg-white">
      <q-input
        v-model="searchText"
        outlined
        placeholder="Tìm kiếm"
        dense
        bg-color="grey-1"
        class="search-input"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="grey-6" />
        </template>
      </q-input>
    </div>

    <!-- Filter Tabs -->
    <div class="bg-white tabs-container">
      <q-tabs
        v-model="activeFilter"
        dense
        class="text-grey-7 tabs-scroll"
        active-color="purple-6"
        indicator-color="purple-6"
        align="left"
        narrow-indicator
        no-caps
        mobile-arrows
        outside-arrows
      >
        <q-tab name="thu-tien-mat" label="Thu tiền mặt" class="tab-item" />
        <q-tab name="chi-tien-mat" label="Chi tiền mặt" class="tab-item" />
        <q-tab name="thu-tien-gui" label="Thu tiền gửi" class="tab-item" />
        <q-tab name="chi-tien-gui" label="Chi tiền gửi" class="tab-item" />
      </q-tabs>
    </div>

    <!-- Summary -->
    <div class="summary-section bg-white q-pa-md">
      <div class="row items-center no-wrap">
        <div class="col-auto">
          <span class="text-grey-7 text-body2">{{ filteredTransactions.length }} dòng. Tổng tiền: </span>
          <span class="text-weight-bold text-dark text-body1">{{ formatNumber(totalAmount) }}</span>
        </div>
        <q-space />
        <div class="col-auto">
          <q-btn
            flat
            no-caps
            color="primary"
            size="sm"
            @click="showDatePicker = true"
            class="month-dropdown"
          >
            <span class="text-body2">Tháng này</span>
            <q-icon name="keyboard_arrow_down" size="16px" class="q-ml-xs" />
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Transaction List -->
    <div class="transaction-container q-pa-md">
      <q-card
        v-for="transaction in filteredTransactions"
        :key="transaction.id"
        flat
        bordered
        :class="[
          'transaction-card q-mb-sm cursor-pointer',
          { 'selected-card': selectedTransactionId === transaction.id }
        ]"
        @click="selectTransaction(transaction)"
      >
        <q-card-section class="q-pa-md">
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="company-name text-body1 text-weight-medium text-dark q-mb-xs">
                {{ transaction.companyName }}
              </div>
              <div class="transaction-code text-caption text-grey-6">
                {{ transaction.code }}
              </div>
            </div>
            <div class="col-auto text-right">
              <div class="transaction-date text-caption text-grey-6 q-mb-xs">
                {{ transaction.date }}
              </div>
              <div class="transaction-amount text-body1 text-weight-bold text-dark">
                {{ formatNumber(transaction.amount) }}
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Date Picker Dialog -->
    <q-dialog v-model="showDatePicker">
      <q-card style="min-width: 300px">
        <q-card-section>
          <div class="text-h6">Chọn thời gian</div>
        </q-card-section>
        <q-card-section>
          <q-date v-model="selectedDate" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Hủy" @click="showDatePicker = false" />
          <q-btn flat label="OK" color="primary" @click="applyDateFilter" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Types
interface Transaction {
  id: number
  companyName: string
  code: string
  date: string
  amount: number
  type: 'thu-tien-mat' | 'chi-tien-mat' | 'thu-tien-gui' | 'chi-tien-gui'
}

// Reactive data
const searchText = ref('')
const activeFilter = ref<string>('thu-tien-mat')
const showDatePicker = ref(false)
const selectedDate = ref('')
const selectedTransactionId = ref<number | null>(null)

// Sample data
const transactions = ref<Transaction[]>([
  {
    id: 1,
    companyName: 'Công ty TNHH Lan Tân',
    code: '#PT00150',
    date: '10/07/2023',
    amount: 2500000,
    type: 'thu-tien-mat'
  },
  {
    id: 2,
    companyName: 'CÔNG TY CỔ PHẦN NAM THÁI',
    code: '#PT00149',
    date: '10/07/2023',
    amount: 2500000,
    type: 'thu-tien-mat'
  },
  {
    id: 3,
    companyName: 'CÔNG TY TNHH THƯƠNG MẠI TOÀN THẮNG',
    code: '#PT00148',
    date: '06/07/2023',
    amount: 21602,
    type: 'thu-tien-mat'
  },
  {
    id: 4,
    companyName: 'CÔNG TY TNHH THƯƠNG MẠI TOÀN THẮNG',
    code: '#PT00147',
    date: '05/07/2023',
    amount: 21602,
    type: 'thu-tien-mat'
  }
])

// Computed properties
const filteredTransactions = computed(() => {
  let filtered = transactions.value

  if (activeFilter.value) {
    filtered = filtered.filter(t => t.type === activeFilter.value)
  }

  if (searchText.value) {
    const search = searchText.value.toLowerCase()
    filtered = filtered.filter(t => 
      t.companyName.toLowerCase().includes(search) ||
      t.code.toLowerCase().includes(search)
    )
  }

  return filtered
})

const totalAmount = computed(() => {
  return filteredTransactions.value.reduce((sum, t) => sum + t.amount, 0)
})

// Methods
const formatNumber = (amount: number) => {
  return amount.toLocaleString('vi-VN')
}

const selectTransaction = (transaction: Transaction) => {
  selectedTransactionId.value = selectedTransactionId.value === transaction.id ? null : transaction.id
}

const addTransaction = () => {
  console.log('Add new transaction')
}

const applyDateFilter = () => {
  console.log('Apply date filter:', selectedDate.value)
  showDatePicker.value = false
}

</script>

<style scoped>
.income-expense-page {
  background-color: #f8f9fa;
}

/* Header styling */
.q-toolbar {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

/* Tabs styling */
.tabs-container {
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  position: relative;
}

/* Scroll icons */
.scroll-icon {
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;
  margin: 0 4px;
  flex-shrink: 0;
}

.scroll-icon:hover {
  background-color: rgba(147, 51, 234, 0.1);
  color: #9333ea;
  transform: scale(1.1);
}

.scroll-icon:active {
  transform: scale(0.95);
}

/* Tabs scroll container */
.tabs-scroll {
  flex: 1;
  overflow: hidden;
}

/* Smooth scroll for mobile */
:deep(.q-tabs__content) {
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  -webkit-overflow-scrolling: touch; /* iOS smooth scrolling */
}

:deep(.q-tabs__content)::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.tab-item {
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
  min-width: 100px;
  flex-shrink: 0;
}

.tab-item:hover {
  background-color: rgba(147, 51, 234, 0.05);
  color: #9333ea;
}

/* Mobile specific improvements */
@media (max-width: 768px) {
  .scroll-icon {
    padding: 12px 6px;
    margin: 0 2px;
  }
  
  .tab-item {
    min-width: 90px;
    font-size: 13px;
    padding: 12px 16px;
  }
  
  :deep(.q-tabs__content) {
    scroll-snap-type: x mandatory;
  }
  
  :deep(.q-tab) {
    scroll-snap-align: start;
  }
}

/* Purple styling for active tabs */
:deep(.q-tab--active) {
  color: #9333ea !important;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.04) 100%);
  border-radius: 8px;
}

:deep(.q-tabs__content .q-tab .q-tab__indicator) {
  background: linear-gradient(90deg, #9333ea 0%, #a855f7 100%);
  height: 3px;
  border-radius: 2px;
}

/* Summary section */
.summary-section {
  border-bottom: 1px solid #e9ecef;
}

.month-dropdown {
  padding: 4px 8px;
  min-height: 32px;
  border-radius: 6px;
}

.month-dropdown:hover {
  background-color: #eff6ff;
}

/* Transaction cards */
.transaction-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: white;
  transition: all 0.3s ease;
}

.transaction-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
  border-color: #c7d2fe;
}

.selected-card {
  border-color: #ef4444 !important;
  background: linear-gradient(135deg, #fef2f2 0%, #fff 100%);
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.15);
}

.selected-card .company-name {
  color: #dc2626 !important;
}

.selected-card .transaction-amount {
  color: #dc2626 !important;
}

/* Typography */
.company-name {
  line-height: 1.3;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.transaction-code {
  font-size: 13px;
  letter-spacing: 0.02em;
}

.transaction-date {
  font-size: 12px;
  opacity: 0.8;
}

.transaction-amount {
  font-size: 15px;
  min-width: 100px;
}

/* Mobile responsive */
@media (max-width: 480px) {
  .transaction-container {
    padding: 8px 12px;
  }
  
  .company-name {
    max-width: 200px;
    font-size: 15px;
  }
  
  .transaction-amount {
    font-size: 14px;
  }
  
  .tab-item {
    font-size: 13px;
  }
}

/* Smooth animations */
.transaction-card {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
