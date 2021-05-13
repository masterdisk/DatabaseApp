<template>
  <div>
    <vue-table-dynamic
        ref="table"
        :params="params"
    >
    </vue-table-dynamic>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import EventService from '@/services/EventService.js';

export default {
  name: 'TableFamilies',
  data() {
    return {
      params: {
        data: [
          ['OrganizationName', 'OrganizationURL', 'Location', 'Description', "Website", "Email", "Phone", "Status", "Industry", "Stages", "CompanyInvested"],
        ],
        header: 'row',
        border: true,
        stripe: true,
        height: 500,
        enableSearch: true,
        pagination: true,
        pageSize: 16,
        pageSizes: [5, 10, 20, 50],
        sort: [0],
        showCheck: true

      }
    }
  },
  methods: {
    getDatabase: async function () {
      // // Get the access token from the auth wrapper
      const accessToken = await this.$auth.getTokenSilently()
      let data = await EventService.getData(accessToken);

      let i = 1;
      data.forEach(element => {
        const row = Object.values(element);
        row.shift();
        this.params.data.splice(i, 0, row);
        i++;
      });
    }
  },
  components: {VueTableDynamic},
  created() {
    this.getDatabase();
  }

}
</script>

<style scoped>

</style>
