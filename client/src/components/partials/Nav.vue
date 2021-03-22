<template>
  <nav aria-label="main navigation" class="navbar container" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Digital Marker Database</strong>
      </a>
      <a aria-expanded="false" aria-label="menu" class="navbar-burger burger" data-target="navbarBasicExample"
         role="button">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- Check that the SDK client is not currently loading before accessing is methods -->
            <div v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <a v-if="!$auth.isAuthenticated" class="button is-dark" @click="login"><strong>Sign in</strong></a>
              <!-- show logout when authenticated -->
              <a v-if="$auth.isAuthenticated" class="button is-dark" @click="logout"><strong>Log out</strong></a>
              <!-- show logout when authenticated -->
              <a v-if="$auth.isAuthenticated" class="button is-dark" @click="logout"><strong>Purchase</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>
