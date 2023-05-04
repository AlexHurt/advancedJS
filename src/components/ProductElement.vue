<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
</script>
<script>
import {addProduct} from "@/api.js"
import {removeProduct} from "@/api.js"
export default {
    data() {
        return {
            value: 0,
        };
    },
    methods: {
        async add() {
            this.value = await addProduct(this.id)
        },
        async remove() {
            this.value = await removeProduct(this.id)
        }
    }
};
</script>

<template>
    <va-card class="va-card">
        <va-card-content>
            <img :src="image" class="content-img" alt=""/>
            <h1>{{ title }}</h1>
            <div class="shop-actions">
                <va-button v-if="value === 0" preset="secondary" class="mr-6 mb-2" @click="add">
                    Add to cart
                </va-button>
                <va-counter v-if="value !== 0" v-model="value" buttons>
                    <template #decreaseAction>
                            <va-button @click="add">+</va-button>
                    </template>
                    <template #increaseAction>
                        <va-button @click="remove">-</va-button>
                    </template>
                </va-counter>
            </div>
        </va-card-content>
    </va-card>
</template>

<style scoped>

.shop-actions {
    display: flex;
    height: 40px;
    justify-content: end;
    margin-right: 5px;
    margin-left: 5px;
}

.va-card {
    --va-card-padding: 0px
}

.content-img {
    width: 200px;
    height: 200px;
    border-radius: 6px 6px 0 0;
}

h1 {
    margin: 10px;
}
</style>