<!-- USP's re-usable component -->
<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">

        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class=" is-profile ">
              <img class="is-round" src="../../public/images/landingspage/cta/portrait1.webp">
            </figure>
            <div class=" rating">
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
            </div>
            <p class="title">“tempor incididunt ut labore et dolore magna aliqua” </p>
            <p class="subtitle">-Name Surname</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class=" is-profile ">
              <img class="is-round" src="../../public/images/landingspage/cta/portrait2.webp">
            </figure>
            <div class=" rating">
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
            </div>
            <p class="title">“tempor incididunt ut labore et dolore magna aliqua” </p>
            <p class="subtitle">-Name Surname</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class=" is-profile ">
              <img class="is-round" src="../../public/images/landingspage/cta/portrait3.webp">
            </figure>
            <div class=" rating">
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
              <font-awesome-icon class="icon alt" icon="star"/>
            </div>
            <p class="title">“tempor incididunt ut labore et dolore magna aliqua” </p>
            <p class="subtitle">-Name Surname</p>
          </article>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "CallToAction",
}
</script>

<style lang="scss" scoped>
.hero-body {
  position: relative;
  background-image: url('../../public/images/landingspage/cta/cta.png');
}


.title {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: normal;
  font-size: 24.25px;
  margin-top: 24px;
  color: white;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
}

.subtitle {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: bold;
  font-size: 24.25px;
  margin-top: 24px;
  color: white;
  text-align: center;
}

.is-profile {
  padding-bottom: 24px;
  text-align: center;

  .is-round {
    width: 200px;
    height: 200px;
    border: double 4px transparent;

    border-radius: 50%;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f9dca0, #f9dca0);
    background-origin: border-box;
    background-clip: content-box, border-box;

  }
}

.rating {
  text-align: center;
  color: #f3ac3c;
  stroke: red;


  svg {
    width: 30px;
    filter: drop-shadow(1px 1px 0px #f9dca0) drop-shadow(-1px 1px 0px #f9dca0) drop-shadow(1px -1px 0px #f9dca0) drop-shadow(-1px -1px 0px #f9dca0);
    margin: 6px;
  }
}

.box{background-color: #254b8e}
</style>
