<template>

  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1"></h1>
        </div>
      </div>
    </div>
    <div class="container">
      <p v-if="isPaid=== null" class="org-description is-size-4"></p>
      <p v-if="isPaid" class="org-description is-size-4">PREMIUM IS ACTIVATED</p>
      <p v-if="!isPaid" class="org-description is-size-4">PREMIUM IS NOT ACTIVATED</p>
    </div>
  </div>


</template>

<script>
import EventList from "@/components/EventsList";
import EventService from '@/services/EventService.js';


export default {
  name: 'home',
  components: {
    EventList
  },
  data() {
    return {isPaid: null}
  },
  created() {
    this.verifySubscription(this.$auth.user.email);
  },
  methods: {
    verifySubscription: async function (email) {
      console.log(email);
      this.isPaid = await EventService.getSubscriptionStatus(email);
      console.log(this.isPaid);
    }
  }

}

</script>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}

.hero.is-primary {
  height: 108px;
}
</style>
