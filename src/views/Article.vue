<template>
<div>
        <tr>
            <td>{{ index+1 }}</td>
            <td> ^ </td>
            <td><a :href="data.articleUrl" class="title" >{{ data.title }}</a> (<span class="sitebit comhead"> <a href="#" class="title" >{{ data.articleUrl }}</a></span>)</td>
        </tr>
        <tr>
            <td colspan="2"></td>
            <td>{{ data.votes }} points by {{ data.user.userName }} {{ data.dateAdded }} | HIDE | {{ data.commentCount }}</td>            
        </tr>
            <tr class="spacer" style="height:5px"></tr>
</div>
</template>
<script>
export default {
    props: ["data", "index"],
}
</script>
<style lang="scss" scoped>

</style>

