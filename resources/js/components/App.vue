<template>
    <div class="content">
        <TheHeader></TheHeader>

    </div>
</template>

<script>
import TheHeader from"./TheHeader.vue"
import ThePost from"./ThePost.vue"

export default {
   name:"App",
   components: {
    TheHeader,
    ThePost,
   }
}
</script>
