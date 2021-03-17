<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">WhitePapers</h1>
        </div>
      </div>
    </div>

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
.org-description {
  margin-top: 50px;
}
</style>
