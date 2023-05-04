<script>
import ProductElement from "@/components/ProductElement.vue";
import {loadProducts} from "@/api.js"

export default {
    components: {ProductElement},
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        this.items = await loadProducts()
    }
}
</script>

<template>
    <div class="shop-wrapper">
        <ProductElement class="prod-elem" v-for="item in items" :title="item.title" :image="item.img" :id="item.id"/>
    </div>
</template>
<style scoped>
.shop-wrapper {
    margin: auto;
    max-width: 880px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.prod-elem {
    margin: 10px;
}
</style>
