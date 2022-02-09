<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Editar Producto
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="actualizarProducto" >
                    <div class="form-group">
                      <label for="sku">Sku:</label>
                        <input 
                            v-model="producto.sku"
                            type="text"
                            id="sku"
                            class="form-control" 
                            name="sku" 
                            placeholder="Sku"
                        >
                    </div>

                    <div class="form-group">
                      <label for="nombre">Nombre:</label>
                        <input 
                            v-model="producto.nombre"
                            type="text"
                            id="nombre"
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            required
                        >
                    </div>

                    <div class="form-group">
                      <label for="cantidad">Cantidad:</label>
                        <input
                            v-model="producto.cantidad" 
                            type="text"
                            id="cantidad"
                            class="form-control" 
                            name="cantidad" 
                            placeholder="Cantidad"
                            required
                        >
                    </div>

                    <div class="form-group">
                      <label for="precio">Precio:</label>
                        <input
                            v-model="producto.precio" 
                            type="text"
                            id="precio"
                            class="form-control" 
                            name="precio" 
                            placeholder="Precio del Producto"
                            required
                        >
                    </div>

                    <div class="form-group">
                      <label for="descripcion">Descripción:</label>
                        <input
                            v-model="producto.descripcion" 
                            type="text"
                            id="descripcion"
                            class="form-control" 
                            name="descripcion" 
                            placeholder="Descripción"
                        >
                    </div>

                    <div class="float-right">
                        <div class="btn-group" role="group" aria-label="" style="align-text:center">
                            <router-link :to="{name:'productoListar'}" class="btn btn-secondary">Cancelar</router-link>
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
       <br>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return {
            producto: {

            }
        }
    },
    created:function(){
        this.consultarInfoProducto()
    },

    methods:{
            
        consultarInfoProducto(){
            axios.get('http://localhost/backend_direct_english/public/api/productos/'+this.$route.params.id)
            .then((datos) =>{
                this.producto = datos.data
                console.log(datos.data)
            })
            .catch(console.log) 
        },

        actualizarProducto(){
            const qs = require('qs')
            var datosEnviar = {
                sku : this.producto.sku,
                nombre : this.producto.nombre,
                cantidad : this.producto.cantidad,
                precio : this.producto.precio,
                descripcion : this.producto.descripcion
            }
            axios.put('http://localhost/backend_direct_english/public/api/productos/update/'+this.$route.params.id,
                qs.stringify(datosEnviar)
            ).then(()=>{
                this.$swal({icon:"success", title: 'Producto actualizado con éxito'})
                .then(function() {
                    window.location.href = '/productos/listar'
                });
                

            })
        }
    }
}
</script>