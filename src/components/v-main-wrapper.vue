<template>
    <div class="v-main-wrapper">
        <router-view />
        <!-- <v-product />
        <v-beard /> -->
    </div>
</template>

<script>
// import vProduct from './v-product'
// import vBeard from './v-beard.vue'

export default {
//   components: { vBeard, vProduct },
    name: 'v-main-wrapper',
    data(){
        return{
            title: 'Pull штрихкод'
        }
    }
}
</script>