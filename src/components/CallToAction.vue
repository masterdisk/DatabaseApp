<!-- USP's re-usable component -->
<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Middle box</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Middle box</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          </article>
        </div>


        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Middle box</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
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
</style>
