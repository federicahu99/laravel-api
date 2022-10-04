<template>
  <div>
    <li>
      <div class="card">
        <img src="{{ post.image }}" class="card-img-top" alt=" {{ post.title }} " />
        <div class="card-body">
          <h5 class="card-title"> {{ post.title }} </h5>
          <p class="card-text">
            {{ post.content }}
          </p>
          <h5> Created at: {{ post.created_at}}</h5>
          <h5> Updated at: {{ post.updated_at}}</h5>
          <h4> Created by: {{ post.user_id}}</h4>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "TheCard",
};
</script>

<style>
</style>