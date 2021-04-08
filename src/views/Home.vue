<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <div id="box">
            <div class="columns header">

              <div class="third">

                <h2 class="has-text-left">
                  Digital Marker is the first <br> platform for sustainable retail, fashion, beauty <br> & welness SMVs.
                </h2>

                <div class="button-block ">

                  <button v-if="!$auth.isAuthenticated" class="button  is-dark" @click="login">Register for 50 DKK
                  </button>

<!--                  <a v-if="$auth.isAuthenticated" class="button is-dark" @click="console">Welcome, {{$auth.user.name}}!</a>  activate this for custom name -->
                  <PayButton/>
                </div>
              </div>
              <div class="third"></div>
              <div class="third"></div>
            </div>
          </div>
        </div>


      </div>
      <div class="background-header"></div>
    </section>
    <CallToAction/>
    <EventList/>
  </div>
</template>
<script>
import CallToAction from "@/components/CallToAction";
import EventList from "@/components/EventsList";
import PayButton from "@/components/partials/PayButton";
export default {
  name: 'home',
  components: {
    CallToAction,
    EventList,
    PayButton
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    console() {
      console.log("click click..")
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url('../../public/images/landingspage/header/header.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 857px;
}
.hero-body {
  z-index: 10;
}
//here for transparency effect header and responsiveness
.header {
  margin-top: 6rem;
  h2 {
    font-family: "Lato-Regular", Helvetica, Arial;
    font-weight: 400;
    font-size: 72.3px;
    width: 885px;
    color: white;
  }
}
.button-block {
  position: absolute;
  bottom: -150px;
  .button.is-dark {
    background-color: #283655;
    &:first-child {
      font-family: "Lato", Helvetica, Arial;
      font-weight: 400;
      font-style: italic;
      font-size: 45px;
      margin-top: 24px;
    }
  }
}
.background-header {
  position: absolute;
  background-color: #254b8e;
  clip-path: polygon(0 0, 70% 0%, 40% 91.5%, 0% 91.5%);
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.82;
  z-index: 0;
}
.is-xl {
  font-size: 1.7rem;
}
.third {
  width: 33.33333%;
}
</style>
