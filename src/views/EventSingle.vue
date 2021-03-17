<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :alt="event.name" :src="image">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventSingle',
  data() {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: '10Branch',
          category: 'Portland, Oregon, United States',
          description: '10Branch, LLC combines capital with an operationally proven approach to help companies find deliberate growth.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 2,
          name: '20K Industries',
          category: 'Vienna, Virginia, United States',
          description: '20K Industries, LLC is a closely held family office based in Washington, D.C.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 3,
          name: '2M Companies',
          category: 'Dallas, Texas, United States',
          description: 'Their investment operations are conducted through 2M Companies, Inc. At first glance they appear to be similar to many other investment',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        },
        {
          id: 4,
          name: 'Acquis Capital, LLC',
          category: 'Boston, Massachusetts, United States',
          description: 'Acquis Capital is a private investment firm that specializes in acquisitions.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: '1234 Fancy Ave',
          date: '12-25-2019',
          time: '11:30'
        }
      ]
    }
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>
