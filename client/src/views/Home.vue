<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="columns">

            <div class="third">

              <h2 class="subtitle has-text-left">
                Digital Marker is the first <br> platform for sustainable retail, fashion, beauty <br> & welness SMVs.
              </h2>

              <div class="button-block ">

                <button v-if="!$auth.isAuthenticated" class="button  is-dark" @click="login">Sign Up to Browse Events</button>

                <a v-if="$auth.isAuthenticated" class="button is-dark" @click="console" >Welcome, {{ $auth.user.name }}!</a>

              </div>
            </div>

            <div class="third"></div>
            <div class="third"></div>
          </div>

        </div>
      </div>
    </section>

    <CallToAction/>
  </div>
</template>
<script>


import CallToAction from "@/components/CallToAction";

export default {
  name: 'home',
  components: {
    CallToAction
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    console(){
      console.log("click click..")
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}

.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}

.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
  margin-bottom: 0px !important;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;

  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .welcome {
    width: 250px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.is-xl {
  font-size: 1.7rem;
}

.third {
  width: 33.33333%;
}
</style>
