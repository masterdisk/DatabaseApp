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

                  <button v-if="!$auth.isAuthenticated" class="button is-dark" @click="login">Register for XX DKK
                  </button>

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
      <!--      <div class="background-header-low"></div>-->
    </section>
    <CallToAction/>
    <Projects/>
    <Footer/>
    <!--    <EventList/>-->
  </div>
</template>

<script>
import CallToAction from "@/components/CallToAction";
import EventList from "@/components/EventsList";
import PayButton from "@/components/partials/PayButton";
import Projects from "@/components/Projects";
import Footer from "@/components/partials/Footer";

export default {
  name: 'home',
  components: {
    CallToAction,
    EventList,
    PayButton,
    Projects,
    Footer
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    console() {
      // console.log("click click..")
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
  height: 700px;
}

.hero-body {
  z-index: 15;
}

//here for transparency effect header and responsiveness
.header {

  h2 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: lighter;
    font-size: 70px;
    width: 885px;
    color: white;
    line-height: 85px;
  }
}

.button-block {
  position: absolute;
  bottom: -150px;

  .button.is-dark {
    background-color: #283655;
    border-radius: 20px;

    &:first-child {
      font-family: 'Lato', ital;
      letter-spacing: 1px;
      border-radius: 20px;
      font-weight: 900;
      font-style: italic;
      font-size: 40px;
      margin-top: 24px;
      background-color: #283655;
    }
  }
}

.background-header {
  position: absolute;
  background-color: #254b8e;
  clip-path: polygon(0 0, 70% 0%, 40% 90%, 0% 90%);
  width: 100%;
  height: 100%;
  opacity: 0.90;
  z-index: 10;
  top: 0px;
}

//.background-header-low {
//  position: absolute;
//  background-color: black;
//  clip-path: polygon(0 85%, 100% 77%, 100% 100%, 0% 100%);
//  width: 100%;
//  height: 100%;
//  opacity: 0.25;
//  z-index: 20;
//  bottom: 155px;
//}

.is-xl {
  font-size: 1.7rem;
}

.third {
  width: 33.33333%;
}
</style>
