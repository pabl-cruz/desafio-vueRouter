<script>
    export default{
        name: 'Product',
        methods: {
            volverInicio(){
            return this.$router.push({name: 'home'});
        }
    }
    }
</script>

<template>
    <h1 class="text-center my-5 pt-5">Producto</h1>
    <div class="container mx-auto d-flex justify-content-center">
        <button class="my-5 btn btn-info text-center" @click="volverInicio">Volver a inicio</button>
    </div>
</template>