<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Editar Usuario
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="actualizarUsuario" >
                    <div class="form-group">
                      <label for="nombre">Nombre:</label>
                        <input 
                            v-model="usuario.nombre"
                            type="text"
                            id="nombre"
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            required
                            
                        >
                    </div>

                    <div class="form-group">
                      <label for="telefono">Telefono Celular:</label>
                        <input
                            v-model="usuario.telefono" 
                            type="text"
                            id="telefono"
                            class="form-control" 
                            name="telefono" 
                            placeholder="Número de Telefono Celular"
s                        >
                    </div>

                    <div class="form-group">
                      <label for="username">Username:</label>
                        <input 
                            v-model="usuario.username"
                            type="text"
                            id="username"
                            class="form-control" 
                            name="username" 
                            placeholder="Username"
                            required
                        >
                    </div>

                    <div class="form-group">
                      <label for="username">Fecha de Nacimiento:</label>
                        <input 
                            v-model="usuario.fecha_nacimiento"
                            type="text"
                            id="fecha_nacimiento"
                            class="form-control" 
                            name="fecha_nacimiento" 
                            placeholder="Fecha de Nacimiento"
                        >
                    </div>

                    <div class="form-group">
                      <label for="correo">Correo:</label>
                        <input
                            v-model="usuario.correo" 
                            type="email"
                            id="correo"
                            class="form-control" 
                            name="correo" 
                            placeholder="Correo Electronico"
                            required
                        >
                    </div>

                    <div class="float-right">
                        <div class="btn-group" role="group" aria-label="" style="align-text:center">
                            <router-link :to="{name:'Listar'}" class="btn btn-secondary">Cancelar</router-link>
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
            usuario: {

            }
        }
    },
    created:function(){
        this.consultarInfoUsuario()
    },

    methods:{
            
        consultarInfoUsuario(){
            axios.get('http://localhost/backend_direct_english/public/api/usuarios/'+this.$route.params.id)
            .then((datos) =>{
                this.usuario = datos.data
                console.log(datos.data)
            })
            .catch(console.log) 
        },

        actualizarUsuario(){
            const qs = require('qs')
            var datosEnviar = {
                nombre : this.usuario.nombre,
                telefono : this.usuario.telefono,
                username : this.usuario.username,
                fecha_nacimiento : this.usuario.fecha_nacimiento,
                correo : this.usuario.correo,
            }
            axios.put('http://localhost/backend_direct_english/public/api/usuarios/update/'+this.$route.params.id,
                qs.stringify(datosEnviar)
            ).then(()=>{
                this.$swal({icon:"success", title: 'Usuario actualizado con éxito'})
                .then(function() {
                    window.location.href = '/usuarios/listar'
                });
                

            })
        }
    }
}
</script>