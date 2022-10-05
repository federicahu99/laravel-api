<template>
    <div class="content">
        <TheHeader></TheHeader>
        <TheHomePage />
    </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHomeaPage from "./pages/TheHomePage.vue";

export default {
   name:"App",
   components: {
    TheHeader,
    TheHomePage,
   }
}
</script>
