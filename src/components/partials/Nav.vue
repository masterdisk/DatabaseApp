<template>
  <nav aria-label="main navigation" class="navbar container" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Digital Marker Portal</strong>
      </a>
      <a aria-expanded="false" aria-label="menu" class="navbar-burger burger" data-target="navbarBasicExample" role="button">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/database">Database</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
        <router-link class="navbar-item" to="/whitepapers">White Papers</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark">
              <strong>Sign In</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav'
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
