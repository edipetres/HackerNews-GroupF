<template>
<center>
  <div class="home">
    
    <table border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
      <tbody>
        <tr>
          <td bgcolor="#ff6600">
            <Header msg="Hacker News Header"/>
          </td>
        </tr>
        <tr style="height:10px"></tr>
        <tr>
          <td>
            <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
            <Article v-for="(article, index) in articles" v-bind:key="index" :data="article" :index="index"></Article>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</center>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Article from '@/views/Article.vue'

export default {
  name: 'home',
  components: {
    Header,
    Article
  },
  data: function() {
    return {
      articles: []
    }
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      const vm = this
      this.$http.get('/posts')
        .then(function (response) {
          // handle success
          vm.articles = response.data
        })
        .catch(function (error) {
          // handle error
          alert('Error loading articles from server.', error)
        })
        .then(function () {
          // always executed
        });
    }
  }
}
</script>
<style lang="scss" scoped>

td, th {
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
</style>
<style>
a:visited {
    color: #828282;
    text-decoration: none;
}
a:link {
    color: #000000;
    text-decoration: none;
}
</style>


