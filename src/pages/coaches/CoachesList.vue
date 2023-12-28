<template>
  <section>Filter</section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filterCoaches" :key="coach.id" :coachInfo="coach"></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </section>
  </base-card>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import { mapGetters } from 'vuex'
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton
  },
  computed: {
    filterCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    // hasCoaches(){
    //   return this.$store.getters['coaches/hasCoaches']
    // }
    ...mapGetters('coaches', ['hasCoaches'])
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
