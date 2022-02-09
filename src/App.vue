<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">
        <router-link to="/usuarios/listar" class="nav-link">Usuarios</router-link>
        <router-link to="/productos/listar" class="nav-link">Productos</router-link>
      </div>
  </nav>
  <br>
  <router-view/>
</template>
