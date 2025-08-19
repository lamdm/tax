<template>
  <q-page class="reports-page">
    <div class="page-header">
      <h2 class="text-h4 q-mb-md">{{ t('reports') }}</h2>
      <p class="text-body1 q-mb-lg">{{ t('reportsDesc') }}</p>
    </div>

    <div class="row q-gutter-md">
      <!-- Report Cards -->
      <q-card class="report-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="trending_up" size="48px" color="positive" />
          <div class="text-h6 q-mt-sm">{{ t('monthlyReport') }}</div>
          <div class="text-caption text-grey-6">{{ t('monthlyReportDesc') }}</div>
        </q-card-section>
      </q-card>

      <q-card class="report-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="assessment" size="48px" color="primary" />
          <div class="text-h6 q-mt-sm">{{ t('quarterlyReport') }}</div>
          <div class="text-caption text-grey-6">{{ t('quarterlyReportDesc') }}</div>
        </q-card-section>
      </q-card>

      <q-card class="report-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="bar_chart" size="48px" color="warning" />
          <div class="text-h6 q-mt-sm">{{ t('yearlyReport') }}</div>
          <div class="text-caption text-grey-6">{{ t('yearlyReportDesc') }}</div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Recent Reports -->
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-md">{{ t('recentReports') }}</div>
        <q-list>
          <q-item v-for="(report, index) in recentReports" :key="index">
            <q-item-section avatar>
              <q-avatar :color="report.color" text-color="white">
                <q-icon :name="report.icon" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ report.title }}</q-item-label>
              <q-item-label caption>{{ report.description }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>{{ report.date }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Generate Report Button -->
    <div class="text-center q-mt-lg">
      <q-btn
        color="primary"
        icon="add"
        :label="t('createNewReport')"
        size="lg"
        @click="generateReport"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { t } = useI18n();

const recentReports = ref([
  {
    title: t('taxReportDec'),
    description: t('taxReportDesc'),
    date: t('timeAgo2hours'),
    icon: 'description',
    color: 'primary'
  },
  {
    title: t('revenueReportQ4'),
    description: t('revenueReportDesc'),
    date: t('timeAgo1day'),
    icon: 'trending_up',
    color: 'positive'
  },
  {
    title: t('costReport'),
    description: t('costReportDesc'),
    date: t('timeAgo3days'),
    icon: 'account_balance',
    color: 'warning'
  }
]);

const generateReport = () => {
  $q.notify({
    type: 'positive',
    message: t('creatingReport'),
    position: 'top'
  });
};
</script>

<style scoped>
.reports-page {
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 24px;
}

.report-card {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  border-radius: 12px;
}

.q-card {
  border-radius: 12px;
}

.q-btn {
  border-radius: 8px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .reports-page {
    padding: 16px;
  }
  
  .report-card {
    min-width: 150px;
  }
}
</style> 