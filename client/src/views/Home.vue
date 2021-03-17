<template>
  <div class="home">
    <section class="hero is-black">
      <div class="hero-body">
        <div class="container">

          <h1 class="title">Welcome to the Database</h1>
          <h2 class="subtitle">Digital Marker Database</h2>

          <div class="button-block">
            <button class="button is-xl is-dark" to="../contact">Access the main dashboard</button>
          </div>

        </div>
      </div>
    </section>
    <EventList />
  </div>
</template>

<script>
import EventList from '../components/EventList';
export default {
  name: 'Home',
  components: {
    EventList
  }
}

</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("https://picsum.photos/200/300");
  background-size:cover;
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
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}
</style>
