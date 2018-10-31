<template>
  <center>
    <div class="newcomments">
      <table border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          <tr class="header-line">
            <td bgcolor="#ff6600">
              <Header/>
            </td>
          </tr>
          <tr style="height:10px"></tr>
          <tr>
            <td>
              <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
                <!-- <Article v-for="(article, index) in articles" v-bind:key="index" :data="article" :index="index"></Article> -->
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </center>
</template>




<script>
import Header from "@/components/Home/Header.vue";
import Comment from "@/components/Comments/Comment.vue";
export default {
  name: "newcomments",
  components: {
    Header,
    Comment
  },
  data: function() {
    return {
      comments: []
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      const vm = this;
      this.$http
        .get("/newcomments")
        .then(function(response) {
          // handle success
          vm.comments = response.data;
        })
        .catch(function(error) {
          // handle error
          alert("Error loading comments from server.", error);
        })
        .then(function() {
          // always executed
        });
    }
  }
};
</script>
