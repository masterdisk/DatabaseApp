<template>
  <div class="paybutton">
    <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
    />
    <button class="button  is-dark" @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = 'pk_test_ooAw4OQqFiFEZRSnMKhtXbZB'; //modify this with the API key - public one for testing
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IY75eHtiI59dqYOJGJcHNbQ', // The id of the one-time price you created in your Stripe dashboard - modify this with the API ID
          quantity: 1,
        },
      ],
      successURL: 'https://localhost:8080/contact', //modify this with successful page
      cancelURL: 'https://localhost:8080', //modify this with canceled page
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
