<template>
  <div class="container">
    <h2 class="mt-4">Posts</h2>
    <ul v-if="posts.length">
        <TheCard v-for="post in posts" :key="post.id" :post="post" class="row"/>
    </ul>
    <h3 class="mt-3 font-weight-light" v-else>Nothing found</h3>
  </div>
</template>

<script>
import Axios from 'axios';
import TheCard from './TheCard';

export default {
  name: "ThePost",
  components: {
    TheCard,
  },

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