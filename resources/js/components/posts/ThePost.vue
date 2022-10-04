<template>
  <div class="container">
    <h3>Posts</h3>
    <ul v-if="posts.lenght">
        <h3 v-else>Nothing found</h3>
        <li>
            <img src="" alt="">
            <h1></h1>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThePost",
  data() {
    return {
      posts: [],
    };
  },

};
</script>

<style>
</style>