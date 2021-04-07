<!-- USP's re-usable component -->
<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">

        <div class="tile is-parent">
          <article class="tile is-child ">
            <figure class="image is-profile ">
              <img class="is-round" src="https://via.placeholder.com/150/FFFF00/000000%20?Text=Digital.com">
            </figure>
            <div class="is-inline rating">
              <font-awesome-icon class="icon alt" icon="star"/>
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
          <article class="tile is-child ">
            <figure class="image is-profile ">
              <img class="is-round" src="https://via.placeholder.com/150/FFFF00/000000%20?Text=Digital.com">
            </figure>
            <div class="is-inline rating">
              <font-awesome-icon class="icon alt" icon="star"/>
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
          <article class="tile is-child ">
            <figure class="image is-profile ">
              <img class="is-round" src="https://via.placeholder.com/150/FFFF00/000000%20?Text=Digital.com">
            </figure>
            <div class="is-inline rating">
              <font-awesome-icon class="icon alt" icon="star"/>
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
  name: "CallToAction"
}
</script>

<style lang="scss" scoped>
.hero-body {
  position: relative;
  background-image: url('../../public/images/landingspage/cta/cta.png');
}

.is-profile {
  width: 50%;
  margin-left: 25%;
  padding-bottom: 24px;
}

.title {
  font-family: "Lato-BlackItalic", Helvetica, Arial;

  font-size: 24.25px;
  margin-top: 24px;
  color: white;
}

.subtitle {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-size: 24.25px;
  margin-top: 24px;
  color: white;
}

.is-round {
  border-radius: 50%;
}

.rating {
  text-align: center;
  color: #FFD700;
  padding-left: 35%;
  padding-right: 35%;
}

</style>
