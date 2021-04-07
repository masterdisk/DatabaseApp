import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

// Import the Auth0 configuration
import {audience, clientId, domain} from "../auth_config.json";

// Import the plugin here
import {Auth0Plugin} from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    audience,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        );
    }
});

//import FontAwesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faTwitter, faFacebook, faStackOverflow, faGithub);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
