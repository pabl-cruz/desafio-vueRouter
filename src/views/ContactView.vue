<script>
export default{
    name: 'Contact',
    props: {
        telefono:{
            type: String,
            Required: true,
        },
        direccion:{
            type: String,
            Required: true,
        },
        mail:{
            type: String,
            Required: true,
        }
    },
    methods:{
        volverInicio(){
            return this.$router.push({name: 'home'});
        }
    }
}
</script>

<template>
    <h1 class="text-center my-5 pt-5">Contacto</h1>
    <h2 class="text-center my-5">Contactenos en</h2>
    <div class="text-center my-5">
        <p>{{ telefono }}</p>
        <p>{{ direccion }}</p>
        <p>{{ mail }}</p>
        <button class="my-4 mx-auto btn btn-info" @click="volverInicio">Volver a inicio</button>
    </div>
    
</template>