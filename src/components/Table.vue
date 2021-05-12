<template>
  <div style="width: 600px">
    <vue-table-dynamic
        :params="params"
        ref="table"
    >
    </vue-table-dynamic>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'Demo',
  data() {
    return {
      params: {
        data: [
          ['Index', 'Data1', 'Data2', 'Data3'],
          [1, 'b3ba90', '7c95f7', '9a3853'],
          [2, 'ec0b78', 'ba045d', 'ecf03c'],
          [3, '63788d', 'a8c325', 'aab418']
        ],
        header: 'row',
        enableSearch: true
      }
    }
  },
  methods: {
  },
  components: { VueTableDynamic }
}
</script>

<style scoped>

</style>
