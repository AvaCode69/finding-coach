<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filterCoaches" :key="coach.id" :coachInfo="coach"></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </section>
  </base-card>
</template>

<script>
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

export default {
  components: {
    CoachItem,
    CoachFilter,
    BaseDialog
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    },
    filterCoaches() {
      const coaches = this.$store.getters['coaches/coaches']
      return coaches.filter((coach) => {
        if (Array.isArray(coach.areas)) {
          if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
            return true
          }
          if (this.activeFilters.backend && coach.areas.includes('backend')) {
            return true
          }
          if (this.activeFilters.career && coach.areas.includes('career')) {
            return true
          }
        }
        return false
      })
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    }

    //...mapGetters('coaches', ['hasCoaches'])
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadCoaches() {
      this.isLoading = true
      try {
        await this.$store.dispatch('coaches/loadCoaches')
      } catch (error) {
        this.error = error.message || 'Something went wrong!'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
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
