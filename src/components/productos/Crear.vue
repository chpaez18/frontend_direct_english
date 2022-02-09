<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Agregar Nuevo Producto
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="agregarProducto" >
                    <div class="form-group">
                      <label for="sku">Sku:</label>
                        <input 
                            v-model="state.producto.sku"
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
                            v-model="state.producto.nombre"
                            type="text"
                            id="nombre"
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            
                        >
                        <span v-if="v$.producto.nombre.$error">
                            {{v$.producto.nombre.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="cantidad">Cantidad:</label>
                        <input
                            v-model="state.producto.cantidad" 
                            type="text"
                            id="cantidad"
                            class="form-control" 
                            name="cantidad" 
                            placeholder="Cantidad"
                            
                        >
                        <span v-if="v$.producto.cantidad.$error">
                            {{v$.producto.cantidad.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="precio">Precio:</label>
                        <input
                            v-model="state.producto.precio" 
                            type="text"
                            id="precio"
                            class="form-control" 
                            name="precio" 
                            placeholder="Precio del Producto"
                            
                        >
                        <span v-if="v$.producto.precio.$error">
                            {{v$.producto.precio.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="descripcion">Descripción:</label>
                        <input
                            v-model="state.producto.descripcion" 
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
import useValidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {

    setup(){
        const state = reactive({
            producto: {
                sku: '',
                nombre: '',
                cantidad: '',
                precio: '',
                descripcion: ''
            }
        })

        const rules = computed(() => {
            return {
                producto: {
                    nombre: {required, minLength:minLength(3)},
                    cantidad: {required},
                    precio: {required},
                }
            }
        })

        const v$ = useValidate(rules, state)
        return{
            state,
            v$
        }
    },

    methods: {
        agregarProducto(){
            const qs = require('qs')
            this.v$.$validate()
            if(!this.v$.$error){
                var datosEnviar = {
                    sku : this.state.producto.sku,
                    nombre : this.state.producto.nombre,
                    cantidad : this.state.producto.cantidad,
                    precio : this.state.producto.precio,
                    descripcion : this.state.producto.descripcion
                }
                axios.post('http://localhost/backend_direct_english/public/api/productos/add',
                    qs.stringify(datosEnviar)
                ).then(()=>{
                    this.$swal({icon:"success", title: 'Producto agregado con éxito'})
                    .then(function() {
                        window.location.href = 'listar'
                    });
                }) 
            }
            
        }
        
    }
    
}
</script>