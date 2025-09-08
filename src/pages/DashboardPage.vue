<template>
  <q-page class="dashboard-page">
    <!-- User Header with green background -->
    <div class="user-header">
      <div class="user-info">
        <h3 class="user-name">(SMECloud) Phan Liên</h3>
      </div>
    </div>

    <div class="dashboard-container">
      <!-- Document Section -->
      <div class="document-section">
        <div class="section-card">
          <div class="section-header">
            <h4 class="section-title">Lập chứng từ</h4>
          </div>
          
          <div class="document-grid">
            <!-- Bán hàng -->
            <div class="document-item" @click="navigateTo('sell')">
              <div class="doc-icon-wrapper sell">
                <q-icon name="receipt_long" size="32px" class="q-icon-color" />
              </div>
              <div class="doc-title">Bán hàng</div>
            </div>

            <!-- Thu tiền -->
            <div class="document-item income-container" @click="showIncomeOptions">
              <div class="doc-icon-wrapper income">
                <q-icon name="account_balance_wallet" size="32px" class="q-icon-color" />
              </div>
              <div class="doc-title">Thu tiền</div>
              
              <!-- Income submenu -->
              <div v-if="showIncome" class="income-submenu">
                <div class="submenu-item" @click.stop="navigateTo('receipt.cash.create')">
                  <q-icon name="add_circle" color="green" size="20px" />
                  <span>Thu tiền mặt</span>
                </div>
                <div class="submenu-item" @click.stop="navigateTo('receipt.bank.create')">
                  <q-icon name="add_circle" color="green" size="20px" />
                  <span>Thu tiền gửi</span>
                </div>
              </div>
            </div>

            <!-- Mua hàng -->
            <div class="document-item" @click="navigateTo('purchase')">
              <div class="doc-icon-wrapper purchase">
                <q-icon name="shopping_cart" size="32px" class="q-icon-color" />
              </div>
              <div class="doc-title">Mua hàng</div>
            </div>

            <!-- Chi tiền -->
            <div class="document-item" @click="showOutcomeOptions">
              <div class="doc-icon-wrapper expense">
                <q-icon name="attach_money" size="32px" class="q-icon-color" />
              </div>
              <div class="doc-title">Chi tiền</div>

                            <!-- Outcome submenu -->
              <div v-if="showOutcome" class="income-submenu" >
                <div class="submenu-item" click.stop="navigateTo('receipt.bank.create')">
                  <q-icon name="add_circle" color="green" size="20px" />
                  <span>Chi tiền mặt</span>
                </div>
                <div class="submenu-item" @click.stop="navigateTo('receipt.bank.create')">
                  <q-icon name="add_circle" color="green" size="20px" />
                  <span>Chi tiền gửi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tax Section -->
      <div class="tax-section">
        <div class="tax-header-simple">
          <h4 class="tax-title">Tiền thuế (đồng)</h4>
          <div class="year-selector">
            <span>Năm nay</span>
            <q-icon name="keyboard_arrow_down" />
          </div>
        </div>
        
        <div class="tax-card">
          <div class="tax-content">
            <div class="tax-item">
              <div class="tax-label">Doanh thu tính thuế GTGT</div>
              <div class="tax-amount">437.602.200</div>
            </div>
            
            <div class="tax-item">
              <div class="tax-label">Thuế GTGT</div>
              <div class="tax-amount">4.376.022</div>
            </div>
            
            <div class="tax-item">
              <div class="tax-label">Doanh thu tính thuế TNCN</div>
              <div class="tax-amount">517.602.200</div>
            </div>
            
            <div class="tax-item">
              <div class="tax-label">Thuế TNCN</div>
              <div class="tax-amount">2.588.011</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Report Section -->
      <div class="tax-section">
        <div class="tax-header-simple">
          <h4 class="tax-title">Báo cáo</h4>
        </div>
        
        <div class="tax-card">
          <div class="tax-content">
            <div class="tax-item report-item" @click="navigateTo('report.business.activity')">
              <div class="tax-label">Báo cáo kết quả hoạt động kinh doanh</div>
              <q-icon name="chevron_right" size="20px" color="#9CA3AF" />
            </div>
            
            <div class="tax-item report-item" @click="navigateTo('report.debt.payable')">
              <div class="tax-label">Công nợ phải trả</div>
              <q-icon name="chevron_right" size="20px" color="#9CA3AF" />
            </div>
            
            <div class="tax-item report-item" @click="navigateTo('report.debt.receivable')">
              <div class="tax-label">Công nợ phải thu</div>
              <q-icon name="chevron_right" size="20px" color="#9CA3AF" />
            </div>
            
            <div class="tax-item report-item" @click="navigateTo('report.inventory.overview')">
              <div class="tax-label">Hàng tồn kho</div>
              <div class="report-actions">
                <div class="inventory-badge">Tồn kho âm</div>
                <q-icon name="chevron_right" size="20px" color="#9CA3AF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showIncome = ref(false);  
const showOutcome = ref(false);

const navigateTo = (routeName: string) => {
  void router.push({ name: routeName });
};

const toggleMenu = (menuType: 'income' | 'outcome') => {
  if (menuType === 'income') {
    showIncome.value = !showIncome.value;
    if (showIncome.value) showOutcome.value = false;
  } else {
    showOutcome.value = !showOutcome.value;
    if (showOutcome.value) showIncome.value = false;
  }
};

const showIncomeOptions = () => toggleMenu('income');
const showOutcomeOptions = () => toggleMenu('outcome');
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
}

.dashboard-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
}

/* User Header */
.user-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 10px 16px 100px 16px;
  color: white;
  position: relative;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: white;
}

/* Document Section */

.q-icon-color {
  color: #667eea;
}

.document-section {
  margin-top: -70px;
  margin-bottom: 16px;
  padding: 0 16px;
  position: relative;
  z-index: 1;
}

.tax-section {
  margin-bottom: 16px;
  padding: 0 16px;
  position: relative;
}

.section-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-header {
  padding: 16px 16px 8px 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tax-note {
  font-weight: 400;
  color: #6b7280;
}

.year-selector {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
}

/* Document Grid */
.document-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 8px 16px 16px 16px;
}

.document-item {
  background: white;
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
}

.income-container {
  position: relative;
}

.document-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.doc-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.doc-icon-wrapper.sell,
.doc-icon-wrapper.income,
.doc-icon-wrapper.purchase,
.doc-icon-wrapper.expense {
  background: #eaecee;
}

.doc-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.doc-title {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-align: center;
}

.doc-badge {
  font-size: 12px;
  font-weight: 600;
}

/* Income Container */
.income-container {
  position: relative;
}

.income-container {
  position: relative;
  z-index: 10;
}

/* Income Submenu */
.income-submenu {
  position: absolute;
  top: 50%;
  left: -25%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 9999;
  margin-top: 8px;
}

.submenu-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
  color: #374151;
  border-bottom: 1px solid #f0f0f0;
}

.submenu-item:last-child {
  border-bottom: none;
}

.submenu-item:hover {
  background-color: #f9fafb;
}

/* Tax Section */
.tax-section {
  margin-bottom: 16px;
  padding: 0 16px;
  position: relative;
}

.tax-header-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.tax-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.year-selector {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
}

.tax-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tax-content {
  padding: 0;
}

.tax-item {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.tax-item:last-child {
  border-bottom: none;
}

.tax-label {
  font-size: 14px;
  color: #374151;
  font-weight: 400;
}

.tax-amount {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

/* Report Items */
.report-item {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.report-item:hover {
  background-color: #f9fafb;
}

.report-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inventory-badge {
  background: #EF4444;
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
}

/* Responsive */
@media (min-width: 481px) {
  .document-section,
  .tax-section {
    padding: 0 20px;
  }
  
  .section-header {
    padding: 20px 20px 12px 20px;
  }
  
  .document-grid {
    padding: 12px 20px 20px 20px;
  }
  
  .tax-content {
    padding: 0 20px 20px 20px;
  }
  
  .tax-item.highlight {
    margin: 0 -20px;
    padding: 12px 20px;
  }
}

@media (min-width: 769px) {
  .document-section,
  .tax-section {
    padding: 0 24px;
  }
  
  .section-header {
    padding: 20px 24px 12px 24px;
  }
  
  .document-grid {
    padding: 12px 24px 20px 24px;
  }
  
  .tax-content {
    padding: 0 24px 20px 24px;
  }
  
  .tax-item.highlight {
    margin: 0 -24px;
    padding: 12px 24px;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style> 