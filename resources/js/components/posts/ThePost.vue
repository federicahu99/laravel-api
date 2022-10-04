<template>
  <div class="container">
    <h2 class="mt-4">Posts</h2>
    <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
            <img src="" alt="">
            <h4> {{ post.title }}</h4>
        </li>
    </ul>
    <h3 class="mt-3 font-weight-light" v-else>Nothing found</h3>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: "ThePost",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
        axios.get("http://127.0.0.1:8000/api/posts")
        .then((res) => {
            this.posts = res.data;
        }).catch(err => {
            console.error(err);
        })
        .then(() => {
            console.info('Called api')
        })
    },
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style>
</style>