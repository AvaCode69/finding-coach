<template>
  <base-card>
    <h2>Register as a coach now!</h2>
    <coach-form @save-data="saveData"></coach-form
  ></base-card>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
  components: {
    CoachForm,
    BaseCard
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data)
      //  console.log('Store State:', this.$store.state.coaches.coaches)

      this.$router.replace('/coaches')
    }
  }
}
</script>

<style scoped></style>
