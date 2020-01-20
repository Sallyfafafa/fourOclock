<template>
    <div>
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "loading.vue"
    }
</script>

<style scoped>
    .sk-three-bounce {
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin-left: -10px;*/
        /*margin-top: -10px;*/
        flex-direction: row;
        width: 80px;
        height: 80px;
    }
    .sk-child {
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 100%;
        background-color: #5987FF;
        animation: sk-three-bounce 1.4s ease-in-out 0s infinite;
    }
    @keyframes sk-three-bounce {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
    .sk-bounce1 {
        animation-delay: -0.32s; }
    .sk-bounce2 {
        animation-delay: -0.16s; }
</style>
