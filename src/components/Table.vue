<template>
  <div>
    <vue-table-dynamic
        ref="table"
        :params="params"
    >
    </vue-table-dynamic>
    <button class="button  is-dark" @click="getData">Get All Data PDF</button>
    <button class="button  is-dark" @click="getXLS">Get All Data XLS</button>
    <button class="button  is-dark" @click="getXLSchecked">Get Checked Data XLS</button>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import EventService from '@/services/EventService.js';
import {jsPDF} from "jspdf";
import exportFromJSON from 'export-from-json';

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
        height: 200,
        enableSearch: true,
        pagination: true,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50],
        sort: [0],
        showCheck: true,
        columnWidth: [{column: 0, width: 160}, {column: 1, width: 160}, {column: 2, width: 160}, {
          column: 3,
          width: 160
        }, {column: 4, width: 160}, {column: 5, width: 160}, {column: 6, width: 160}, {
          column: 7,
          width: 160
        }, {column: 8, width: 160},
          {column: 9, width: 160}, {column: 10, width: 160}, {column: 11, width: 160},]

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
    },

    getData() {
      const data = this.$refs.table.getData();

      data.shift();
      const someData = [];
      const finalData = [];


      data.forEach(element => {

        const tempss = [{
          OrganizationName: element[0],
          OrganizationURL: element[1],
          Location: element[2],
          Description: element[3],
          Website: element[4],
          Email: element[5],
          Phone: element[6],
          Status: element[7],
          Industry: element[8],
          Stages: element[9],
          CompanyInvested: element[10]
        }];
        // console.log(tempss)
        someData.push(tempss);
      });

      //header - columns for the export of the pdf
      const headers = [
        'OrganizationName',
        'OrganizationURL',
        'Location',
        'Description',
        'Website',
        'Email',
        'Phone',
        'Status',
        'Industry',
        'Stages',
        'CompanyInvested'
      ]

      for (var i = 0; i < headers.length; i += 1) {
        finalData.push(someData[i][0]);
      }


      const test = new jsPDF('landscape', 'px', [2600, 600]);

      test.table(5, 1, finalData, headers, {autoSize: true, fontSize: 10, padding: 5, margins: 10})
      console.log("data:" + data);
      test.save("ssss.pdf");
    },

    getXLS() {
      const data = this.$refs.table.getData();
      const fileName = 'download'
      const exportType = 'csv'

      exportFromJSON({data, fileName, exportType});
    },

    getXLSchecked() {
      if (this.$refs && this.$refs.table) {

        const headers = ([
          'OrganizationName',
          'OrganizationURL',
          'Location',
          'Description',
          'Website',
          'Email',
          'Phone',
          'Status',
          'Industry',
          'Stages',
          'CompanyInvested'
        ]);

        console.log('[ getCheckedRowDatas ] ', this.$refs.table.getCheckedRowDatas())

        const data = this.$refs.table.getCheckedRowDatas();
        data.unshift(headers);
        console.log(data);
        console.log(typeof data);
        const fileName = 'download'
        const exportType = 'csv'

        exportFromJSON({data, fileName, exportType});
      }

    },
  },

  components: {VueTableDynamic},
  created() {
    this.getDatabase();
  }

}
</script>

<style scoped>

</style>
