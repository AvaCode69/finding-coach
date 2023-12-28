<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ coachInfo.hourlyRate }}/hour</h4>
    <base-badge v-for="area in coachInfo.areas" :key="area" :type="area" :title="area">
    </base-badge>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue'
export default {
  components: { BaseBadge },
  props: {
    coachInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName() {
      return this.coachInfo.firstName + ' ' + this.coachInfo.lastName
    },
    coachContactLink() {
      return this.$route.path + '/' + this.coachInfo.id
      //   return '/coaches/' + this.coachInfo.id + '/contact'
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.coachInfo.id + '/contact'

      //  return '/coaches/' + this.coachInfo.id
    }
  }
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
