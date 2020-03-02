<template functional>
  <AppModal v-on:close="listeners.close">
    <h3 class="confirmation-message">
      {{ props.message }}
    </h3>
    <div class="buttons">
      <AppButton v-on:click="listeners.confirm">
        Confirm
      </AppButton>
      <AppButton type="secondary" v-on:click="listeners.close">
        Cancel
      </AppButton>
    </div>
  </AppModal>
</template>

<script>
import AppModal from "@/components/AppModal";

export default {};
</script>

<style lang="css" scoped>
</style>
