import axios from "axios"

export default {
    async getEvents() {
        let res = await axios.get("https://databaseappdigitalmarker.herokuapp.com/events");
        return res.data;
    },

    async getEventSingle(eventId, accessToken) {
        let res = await axios.get("https://databaseappdigitalmarker.herokuapp.com/events/" + eventId, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    },

    async getSubscriptionStatus(id, accessToken) {

        let res = await axios.get("http://localhost:8000/subscription/verify/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    },

    async getId(email, accessToken) {

        let res = await axios.get("https://databaseappdigitalmarker.herokuapp.com/users/id/" + email, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    },

    async changeSubscriptionStatus(id, accessToken) {

        let res = await axios.get("https://databaseappdigitalmarker.herokuapp.com/subscription/change/" + id, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res.data;
    }

}
