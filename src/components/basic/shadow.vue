<template>
    <div class="body" >
        <div class="shadow">
            <slot class="slot"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "shadow"
    }
</script>

<style scoped>
    .body{
        position: relative;
    }
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        z-index: 2000;
    }
    .slot{
        z-index: 2001;
    }
</style>
