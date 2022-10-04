<template>
    <div class="content">
        <TheHeader></TheHeader>
        <ThePost></ThePost>
    </div>
</template>

<script>
import TheHeader from"./TheHeader.vue"
import ThePost from"./posts/ThePost.vue"

export default {
   name:"App",
   components: {
    TheHeader,
    ThePost,
   }
}
</script>
