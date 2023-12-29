<template>
  <base-card>
    <h2>Register as a coach now!</h2>
    <coach-form></coach-form
  ></base-card>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
  components: {
    CoachForm,
    BaseCard
  }
}
</script>

<style scoped></style>
