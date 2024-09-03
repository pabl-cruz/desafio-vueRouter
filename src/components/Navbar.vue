<template lang="">
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'product'}" class="nav-link">Producto</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'contact'}" class="nav-link">Contacto</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name: 'about'}" class="nav-link">Sobre Nosotros</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
</style>