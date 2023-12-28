<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coache in filterCoaches" :key="coache.id">
        {{ coache.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
