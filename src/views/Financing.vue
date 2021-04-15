<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1"></h1>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="org-description is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam
        eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi
        consectetur neque laudantium, libero asperiores.</p>
      <p class="org-description is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam
        eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi
        consectetur neque laudantium, libero asperiores.</p>
    </div>
    <EventList/>
  </div>

</template>

<script>
import EventList from "@/components/EventsList";

export default {
  name: 'home',
  components: {

    EventList

  }

}

</script>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}

.hero.is-primary {
  height: 108px;
}
</style>
