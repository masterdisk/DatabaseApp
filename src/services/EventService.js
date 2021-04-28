import axios from "axios"

export default {
    async getEvents() {
        let res = await axios.get("http://localhost:8000/events");
        return res.data;
    },
    async getEventSingle(eventId, accessToken) {
        let res = await axios.get("http://localhost:8000/events/" + eventId, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    },
    async getSubscriptionStatus(email, accessToken) {

        let res = await axios.get("http://localhost:8000/subscription/verify/" + email, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    },

    async changeSubscriptionStatus(email, accessToken) {

        let res = await axios.get("http://localhost:8000/subscription/change/" + email, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    }
}
