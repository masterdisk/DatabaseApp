<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Check out our upcoming events
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :key="event.id" :event="event" class="column is-one-quarter">
        <router-link :to="'/whitepapers/' + event.id">
          <EventCard :event="event"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard';

export default {
  name: 'EventsList',
  components: {
    EventCard
  },
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
  }
}
</script>

<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>
