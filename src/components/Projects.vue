<!-- Projcects's re-usable component -->
<template>

  <div class="">
    <div class="topimg">
      <img src="../../public/images/landingspage/projects/topimg.png">
    </div>


    <div class="container">
      <div class="columns first">
        <div class="is-text">
          <p>Digital marker offers a fully stocked database for finance and enterprising that will be thrice as useful
            as any article, This is statisticaly proven.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/firstgui.png"></div>
      </div>

      <div class="columns index">
        <div class="is-text">
          <p>We offer an user friendly interface that will allow you to browse any amount of documents without issue.</p></div>
        <div class="is-image">
          <img class="is-round" src="../../public/images/landingspage/projects/secondgui.png"></div>
      </div>

      <div class="columns last">
        <div class="is-text">
          <p>The insights provided by our database will show you the tips and tricks needed to land any funding deal from investors and receive appriate funds.</p></div>
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

.is-text {
  font-family: "Lato-Regular", Helvetica, Arial;
  font-weight: bold;
  font-size: 24.25px;
  color: white;
  text-align: left;
  background-color: #254b8e;
  text-align: center;
  padding: 10%;
}

//.topimg>img {
//  content: "after";
//  background-color: red;
//}

.columns{
  padding: 24px;
 .is-text{
   width:100%
 }
}
</style>
