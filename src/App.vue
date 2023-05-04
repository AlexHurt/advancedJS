<script>
import Shop from "@/components/Shop.vue";
import Cart from "@/components/Cart.vue";

export default {
    components: {Cart, Shop},
    data() {
        return {
            selected: 0,
        };
    },
    methods: {
        goToShop() {
            this.selected = 0
        },
        goToCart() {
            this.selected = 1
        }
    }
};
</script>

<template>
    <va-navbar class="nav_main">
        <template #left>
            <va-navbar-item class="logo">
                LOGO
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item @click="goToShop">
                <va-button preset="plain">Shop</va-button>
            </va-navbar-item>
            <va-navbar-item @click="goToCart">
                <va-button preset="plain">Login</va-button>
            </va-navbar-item>
            <va-navbar-item>
                <img id="section_cart" src="./assets/cart.png" alt=""/>
            </va-navbar-item>
        </template>
    </va-navbar>

    <main>
        <template v-if="selected === 0">
            <Shop/>
        </template>

        <template v-if="selected === 1">
            <Cart/>
        </template>
    </main>
</template>

<style scoped>

.nav_main {
    height: 70px;
    padding-left: 50px;
    padding-right: 50px;
}
#section_cart {
    height: 20px;
    width: 20px;
    color: white;
}

</style>
