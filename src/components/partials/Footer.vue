<!-- Projcects's re-usable component -->

<template>
  <div class="footer">
    <div class="container ">
      <div class="columns">

        <div class="column c1">
          <img src="../../../public/images/landingspage/footer/logofooter.png">
        </div>


        <div class="column c2">

          <aside class="menu">
            <p class="menu-label">
              Funding
            </p>
            <ul class="menu-list">
              <li><a>How to receive it</a></li>
              <li><a>Proportional pay</a></li>
              <li><a>Avoiding disinterest</a></li>
              <li><a>Newest methods</a></li>
              <li><a>Investors and you</a></li>
            </ul>
          </aside>

        </div>

        <div class="column c3">

          <aside class="menu">
            <p class="menu-label">
              Financing
            </p>
            <ul class="menu-list">
              <li><a>Financing materials</a></li>
              <li><a>Financing approaches</a></li>
              <li><a>Developing a plan</a></li>
              <li><a>Advanced tutorials</a></li>
              <li><a>Documentation</a></li>
            </ul>
          </aside>

        </div>

        <div class="column c4">

          <aside class="menu">
            <p class="menu-label">
              Entrepreneurship
            </p>
            <ul class="menu-list">
              <li><a>Starting advice</a></li>
              <li><a>How to get investors</a></li>
              <li><a>Increasing revenue</a></li>
              <li><a>Marketing advice</a></li>
              <li><a>The modern approach</a></li>
            </ul>
          </aside>

        </div>

        <div class="column c5">

          <img src="../../../public/images/landingspage/footer/map.png">
          <p class="contact address">Ormhøjgårdvej 27, 8700 Horsens.</p>

        </div>

      </div>
      <p class="contact">+45 41 33 33 20 - kontakt@digitalmarker.dk - Copyright Digital Marker @2021</p>
    </div>

  </div>

</template>

<script>


export default {
  name: "Footer",
}


</script>

<style lang="scss" scoped>


.columns {

  .column {
    padding: 24px;

    .menu {
      .menu-list {
        li {
          color: white;
          font-size: 20px;
          font-family: 'Lato', ital;
        }
      }

      .menu-label {
        text-transform: none;
        font-family: 'Lato', ital;
        letter-spacing: 0px;
      }
    }
  }

  .c1 {
    width: auto;
    height: auto;

    max-width: 300px;
    max-height: 361px;

  }
}

.footer {
  background-color: #254B8F;
}

.container {
  background-color: #254B8F;

  .contact {
    text-align: center;
    color: #E8E8E8;
    font-size: 20px;

    &.address {
      font-family: 'Lato', ital;
      font-weight: bold;
      font-size: 20px;
    }
  }
}

</style>
