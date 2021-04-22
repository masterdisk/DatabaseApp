<!-- NavBar code -->
<template>
  <div class="background-nav">
    <nav aria-label="main navigation" class="navbar container" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item logo" href="/">
          <img alt="logo" src="../../../public/images/logo.png">
        </a>
        <a role="button" class="navbar-burger " aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" class="navbar-menu" v-bind:class="{'is-active background-nav': isOpen}">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/financing">Financing</router-link>
          <router-link class="navbar-item" to="/funding">Funding</router-link>
          <router-link class="navbar-item" to="/entrepreneurship">Entrepreneurship</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <!-- Check that the SDK client is not currently loading before accessing is methods -->
              <div v-if="!$auth.loading">
                <!-- show login when not authenticated -->
                <a v-if="!$auth.isAuthenticated" class="button " @click="login"><strong>Sign in</strong></a>
                <!-- show logout when authenticated -->
                <a v-if="$auth.isAuthenticated" class="button" @click="logout"><strong>Log out</strong></a>
                <!-- show purchase when authenticated -->
                <a v-if="$auth.isAuthenticated" class="button " @click="logout"><strong>Purchase</strong></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
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
  },
  data: function() {
    return {
      isOpen: false
    }
  }
}


</script>

<style lang="scss" scoped>
.background-nav {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 20;

  nav {
    background-color: transparent;
    position: relative;
    z-index: 20;
  }

  .logo {
    padding-left: 0px !important;
    padding-right: 0px !important;

    img {
      width: auto;
      height: auto;
      max-height: 135px;
    }
  }

  .navbar-item {
    font-family: "Lato-Bold", "Lato-Bold", Helvetica, Arial;
    font-size: 32.5px;
    font-weight: bold;
    -webkit-text-stroke: 2px black;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 24px;
    padding-right: 24px;
    color: white;

    &:hover {
      color: red;
      background-color: transparent;
    }

    &.router-link-exact-active {
      color: blue;
      background-color: transparent;
    }
    .buttons {
      &:first-child{
        padding-left: 48px;
      }
      .button {
        background-color: transparent;
        border-color: transparent;
        font-family: "Lato-Bold", "Lato-Bold", Helvetica, Arial;
        font-size: 32.5px;
        font-weight: bold;
        -webkit-text-stroke: 2px black;
        color: white;
        &:hover {
          color: red;
          background-color: transparent;
        }
      }
    }
  }
}

</style>
