<template>
    <center>
        <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
            <tbody>
                <tr>
                    <td bgcolor="#ff6600">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
                            <tbody>
                                <tr>
                                    <td style="width:18px;padding-right:4px"><router-link to="/"><img
                                                src="/static/img/y18.gif" width="18" height="18" style="border:1px #ffffff solid;"></router-link></td>
                                    <td style="line-height:12pt; height:10px;"><span class="pagetop"><b>Submit</b></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style="height:10px"></tr>
                <tr>
                    <td>
                            <table border="0">
                                <tbody>
                                    <tr>
                                        <td>title</td>
                                        <td><input type="text" name="title" value="" size="50" v-model="submit.title" ><span style="margin-left:10px"></span></td>
                                    </tr>
                                    <tr>
                                        <td>url</td>
                                        <td><input type="text" name="url" value="" size="50" v-model="submit.url"></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><b>or</b></td>
                                    </tr>
                                    <tr>
                                        <td>text</td>
                                        <td><textarea name="text" rows="4" cols="49" v-model="submit.text"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="submit" value="submit" @click="submitStory"></td>
                                    </tr>
                                    <tr style="height:20px"></tr>
                                    <tr>
                                        <td></td>
                                        <td>Leave url blank to submit a question for discussion. If there
                                            is no url, the text (if any) will appear at the top of the
                                            thread.<br><br>
                                            You can also submit via <a href="https://news.ycombinator.com/bookmarklet.html"
                                                rel="nofollow"><u>bookmarklet</u></a>.</td>
                                    </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
</template>
<script>
export default {
    data() {
        return {
            submit: {
                title: "",
                url: "",
                text: ""
            }
        };
    },

    methods: {
        submitStory: function () {
            this.$http.post('/post', {
                    token: localStorage.getItem('token'),
                    post_title: this.submit.title,
                    hanesst_id: 0,
                    post_text: this.submit.text,
                    post_url: this.submit.url,
                    post_type: 'story'
                })
                .then(response => {
                    this.$router.push('/');
                })
                .catch(response => {
                    console.log('resp', response)

                })
            }
        
    }
};
</script>
