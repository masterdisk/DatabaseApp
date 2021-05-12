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
      <div v-if="isPaid === null"  class="container">
        <p class="org-description is-size-4"></p>
      </div>

      <div v-if="isPaid" class="container">
        <p class="org-description is-size-4">PAYMENT SUCCESSFUL</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
</style>

<script>

import EventService from '@/services/EventService.js';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {isPaid: null}
  },
  created() {
    this.changeSubscription(this.$auth.user.email);
  },
  methods: {
    changeSubscription: async function (email) {

      // Get the access token from the auth wrapper
      const accessToken = await this.$auth.getTokenSilently()
      let id = await EventService.getId(email,accessToken);
      this.isPaid = await EventService.changeSubscriptionStatus(id,accessToken);

    }
  }

}

</script>
