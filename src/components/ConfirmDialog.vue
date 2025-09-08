<template>
  <q-dialog v-model="show" persistent>
    <q-card class="confirm-dialog">
      <q-card-section class="text-center q-pt-lg">
        <div class="text-h6 q-mb-md">{{ title }}</div>
        <div class="text-body1">{{ message }}</div>
      </q-card-section>
      
      <q-card-actions class="q-px-lg q-pb-lg">
        <q-btn
          flat
          :label="cancelLabel"
          color="grey"
          @click="handleCancel"
          class="col"
        />
        <q-btn
          unelevated
          :label="confirmLabel"
          color="primary"
          @click="handleConfirm"
          class="col q-ml-sm"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Xác nhận',
  confirmLabel: 'Xác nhận',
  cancelLabel: 'Hủy'
});

const emit = defineEmits<Emits>();

const show = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const handleConfirm = () => {
  emit('confirm');
  show.value = false;
};

const handleCancel = () => {
  emit('cancel');
  show.value = false;
};
</script>

<style scoped>
.confirm-dialog {
  min-width: 280px;
  border-radius: 16px;
}

.confirm-dialog .q-card__section {
  padding: 24px 24px 16px 24px;
}

.confirm-dialog .q-card__actions {
  padding: 16px 24px 24px 24px;
  gap: 12px;
}

.confirm-dialog .q-btn {
  border-radius: 12px;
  font-weight: 600;
  height: 44px;
}
</style>
