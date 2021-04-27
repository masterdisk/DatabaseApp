<template>

  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1"></h1>
        </div>
      </div>
    </div>

    <div v-if="isPaid=== null"  class="container">
      <p class="org-description is-size-4"></p>
    </div>

    <div v-if="isPaid" class="container">
      <p class="org-description is-size-4">PREMIUM IS ACTIVATED</p>
    </div>

    <div v-if="!isPaid" class="container">
      <p  class="org-description is-size-4">PREMIUM IS NOT ACTIVATED</p>
      <PayButton/>
    </div>


  </div>


</template>

<script>
import EventList from "@/components/EventsList";
import EventService from '@/services/EventService.js';
import PayButton from "@/components/partials/PayButton";

export default {
  name: 'home',
  components: {
    EventList,
    PayButton
  },
  data() {
    return {isPaid: null}
  },
  created() {
    this.verifySubscription(this.$auth.user.email);
  },
  methods: {
    verifySubscription: async function (email) {
      // Get the access token from the auth wrapper
      const accessToken = await this.$auth.getTokenSilently()
      this.isPaid = await EventService.getSubscriptionStatus(email,accessToken);
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
