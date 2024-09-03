<script>
    export default {
        name: 'Product',
        methods: {
            //metodo para volver a inicio
            volverInicio(){
            return this.$router.push({name: 'home'});
            }
    },
    //establecer propiedades con valores genericos y limitantes
    props: {
        titulo: {
            type: String,
            Required: true,
        },
        descripcion: {
            type: String,
            Required: true
        },
        precio:{
            type: Number,
            Required: true,
        },
        cantidad:{
            type: String,
            Required: true,
        }
    }
}
</script>

<template>
    <h1 class="text-center my-5 pt-5">Producto</h1>

<section class="container" id="productos">
  <h2 class=" text-center">Nuestros Productos</h2>
  <div class="row">
    
    <div class="col-sm-4 col-12 px-5 mb-4">

      <div class="card">
        <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ titulo }}</h5>
          <p class="card-text">
            {{ descripcion }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">$ {{ precio }}</li>
          <li class="list-group-item">{{ cantidad }}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Ver más</a>
          <a href="#" class="card-link">Comprar</a>
        </div>
      </div>
    </div>
  </div>
</section>

    <div class="container mx-auto d-flex justify-content-center">
        <button class="my-5 btn btn-info text-center" @click="volverInicio">Volver a inicio</button>
    </div>
</template>