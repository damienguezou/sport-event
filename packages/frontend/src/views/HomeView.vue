<template>
  <div class="sp-container-full-centered">
    <div class="home-view">
      <h1>Créez vos évènements sportifs</h1>
      <div class="home-view__actions">
        <RouterLink :to="{ name: 'groupCreate' }">
          <Button>{{ t('createNewGroupBtnLabel') }}</Button>
        </RouterLink>
        <RouterLink :to="{ name: 'eventCreate' }">
          <Button theme="secondary">{{ t('createNewEventBtnLabel') }}</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from 'ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  gap: 9rem;
  align-items: center;
  &__actions {
    display: flex;
    gap: 16px;
  }
}
</style>
