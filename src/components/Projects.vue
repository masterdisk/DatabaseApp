<!-- Projcects's re-usable component -->
<template>

  <div class="">
    <div class="topimg">
      <img src="../../public/images/landingspage/projects/topimg.png">
    </div>


    <div class="container">

      <!-- Top part  -->
      <div class="columns first">
        <div class="is-text-first">
          <p>Digital marker offers a fully stocked database for finance and enterprising that will be thrice as useful
            as any article, This is statisticaly proven.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/firstgui.png">
        </div>

      </div>

      <!-- Middle part  -->

      <div class="columns index">
        <div class="is-text-middle">
          <p>We offer an user friendly interface that will allow you to browse any amount of documents without
            issue.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/secondgui.png"></div>
      </div>

      <div class="columns index">
        <div class="is-text-middle">
          <p>We offer an user friendly interface that will allow you to browse any amount of documents without
            issue.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/secondgui.png"></div>
      </div>

      <div class="columns index">
        <div class="is-text-middle">
          <p>We offer an user friendly interface that will allow you to browse any amount of documents without
            issue.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/secondgui.png"></div>
      </div>

      <!-- Bottom part  -->

      <div class="columns last">
        <div class="is-text-last">
          <p>The insights provided by our database will show you the tips and tricks needed to land any funding deal
            from investors and receive appriate funds.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/thirdgui.png"></div>

      </div>

    </div>


    <div class="botimg">
      <img src="../../public/images/landingspage/projects/botimg.png">
    </div>

  </div>

</template>

<script>

export default {
  name: "Projects",
}
</script>

<style lang="scss" scoped>

.is-full {
  background-color: #254b8e;
  margin: 100px;
}

.is-text-first {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: bold;
  font-size: 24.25px;
  color: white;

  background-image: url('../../public/images/landingspage/projects/toptext.png');
  background-size: cover;


  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;

  display: block;
  max-width: 600px;
  max-height: 365px;
  width: auto;
  height: auto;

  p {
    text-align: left;
  }
}

.is-text-middle {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: bold;
  font-size: 24.25px;
  color: white;

  background-image: url('../../public/images/landingspage/projects/middletext.png');
  background-size: cover;

  margin-top: 5%;

  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;

  display: block;
  max-width: 600px;
  max-height: 365px;
  width: auto;
  height: auto;

  p {
    text-align: left;
  }
}

.is-text-last {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: bold;
  font-size: 24.25px;
  color: white;

  background-image: url('../../public/images/landingspage/projects/bottomtext.png');
  background-size: cover;

  margin-top: 5%;

  padding-top: 7%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;

  display: block;
  max-width: 600px;
  max-height: 365px;
  width: auto;
  height: auto;

  p {
    text-align: left;
  }
}

.columns {
  padding: 48px;

  .is-text {
    width: 100%;
    position: relative;
    z-index: 10;

  }

  .is-image {
    position: relative;
    z-index: 20;
    box-shadow: 2rem 25px rgba(37, 75, 142, 0.8);
    margin-right: 36px;
    img{
    float: left;
    width:  788px;
    height: 468px;
    object-fit: fill ;
  }}
}


.topimg {
  img {
    width: 100%;
    position: relative;
    top: -14px;
  }
}

.botimg {
  padding-top: 48px;
  img {
    width: 100%;
  }
}
</style>
