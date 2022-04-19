<template>
    <div class="popup_wrapper">
        <div class="v-popup">
                <div class="v-popup_header">
                    <span>
                        <i 
                            class="material-icons"
                            @click="closePopup"
                        >close</i>
                    </span>
                </div>
                <div class="v-popup_content">
                    <slot></slot>    
                </div>
                <div class="v-popup_footer">
                    <button class="close_modal" @click="closePopup">Закрыть</button>
                </div>
            </div>
    </div>
    

</template>

<script>
export default {
    name: "v-popup",
    props: {},
    data(){
        return {}
    },
    methods: {
        closePopup(){
            this.$emit('closePopup')
        }
    }
}
</script>

<style scoped>
 .popup_wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
    .v-popup{
        padding: 10px;
        position: fixed;
        top: 50px;
        max-width: 400px;
        background: #fff;
        box-shadow: 0 0 17px 0 #e7e7e7;
    }
    .v-popup_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .v-popup_content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .v-popup_footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .close_modal{
        color: #fff;
        background: red;
    }
    span, button{
        cursor: pointer;
    }
</style>