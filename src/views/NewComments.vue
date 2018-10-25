
<template>
    <tr>
      <td>
        <table>
          <tbody>
            
          </tbody>
        </table>
      </td>
    </tr>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Home/Header.vue'

export default {
  name: 'NewComments',
  components: {
    Header
  },
  data: function() {
    return {
        
    }
  },
  created() {
      
  },
  methods: {
    fetchComments() {
      const vm = this
      this.$http.get('/newcomments')
        .then(function (response) {
          // handle success
          vm.comments = response.data
        })
        .catch(function (error) {
          // handle error
          alert('Error loading newcomments from server.', error)
        })
        .then(function () {
          // always executed
        });
    }
  }
}
</script>
<style lang="scss" scoped>

td,
th {
  display: table-cell;
  vertical-align: inherit;
}

center {
  display: block;
  text-align: -webkit-center;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;

  .header-info {
    color: black;
  }
}

table {
  white-space: normal;
  line-height: normal;
  font-weight: normal;
  font-size: medium;
  font-style: normal;
  color: -internal-quirk-inherit;
  text-align: start;
  font-variant: normal;
}

a:visited {
  color: #828282;
  text-decoration: none;
}

a:link {
  color: #000000;
  text-decoration: none;
}

</style>


