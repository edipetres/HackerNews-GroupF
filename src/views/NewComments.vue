<template>
  <center>
    <div class="newcomments">
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
            <tbody>
                <tr>
                    <td bgcolor="#ff6600">
              <Header/>
            </td>
          </tr>
          <tr style="height:10px"></tr>
          <tr>
            <td>
              <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
                <Comment v-for="(comment, index) in comments" v-bind:key="index" :data="comment" :index="index"></Comment> 
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
      const vm = this
      this.$http
      .get("/comment/new")
        .then(function(response) {
          // handle success
          vm.comments = response.data.payload;
          /*console.log(this.comments); */
        
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
