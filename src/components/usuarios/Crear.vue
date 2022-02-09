<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
                Agregar Nuevo Usuario
            </div>
            <div class="card-body">

                <form v-on:submit.prevent="agregarUsuario" >
                    <div class="form-group">
                      <label for="nombre">Nombre:</label>
                        <input 
                            v-model="state.usuario.nombre"
                            type="text"
                            id="nombre"
                            class="form-control" 
                            name="nombre" 
                            placeholder="Nombre"
                            
                        >
                        <span v-if="v$.usuario.nombre.$error">
                            {{v$.usuario.nombre.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="telefono">Telefono Celular:</label>
                        <input
                            v-model="state.usuario.telefono" 
                            type="text"
                            id="telefono"
                            class="form-control" 
                            name="telefono" 
                            placeholder="Número de Telefono Celular"
                            
                        >
                    </div>

                    <div class="form-group">
                      <label for="username">Username:</label>
                        <input 
                            v-model="state.usuario.username"
                            type="text"
                            id="username"
                            class="form-control" 
                            name="username" 
                            placeholder="Username"
                            
                        >
                        <span v-if="v$.usuario.username.$error">
                            {{v$.usuario.username.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
                        <input 
                            v-model="state.usuario.fecha_nacimiento"
                            type="text"
                            id="fecha_nacimiento"
                            class="form-control" 
                            name="fecha_nacimiento" 
                            placeholder="fecha_nacimiento"
                            
                        >
                    </div>

                    <div class="form-group">
                      <label for="correo">Correo:</label>
                        <input
                            v-model="state.usuario.correo" 
                            type="email"
                            id="correo"
                            class="form-control" 
                            name="correo" 
                            placeholder="Correo Electronico"
                            
                        >
                        <span v-if="v$.usuario.correo.$error">
                            {{v$.usuario.correo.$errors[0].$message }}
                        </span>
                    </div>

                    <div class="form-group">
                      <label for="password">Contraseña:</label>
                        <input
                            v-model="state.usuario.password" 
                            type="password"
                            id="password"
                            class="form-control" 
                            name="password" 
                            placeholder="password"
                        >
                        <span v-if="v$.usuario.password.$error">
                            {{v$.usuario.password.$errors[0].$message }}
                        </span>
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
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {

    setup(){
        const state = reactive({
            usuario: {
                nombre: '',
                telefono: '',
                username: '',
                fecha_nacimiento: '',
                correo: '',
                password: ''
            }
        })



        const rules = computed(() => {
            return {
                usuario: {
                    nombre: {required, minLength:minLength(3), maxLength:maxLength(10) },
                    username: {required, minLength:minLength(3), maxLength:maxLength(10)},
                    correo: {required, email},
                    password: {required, minLength:minLength(8)},
                }
            }
        })

        //validacion del formulario
        const v$ = useValidate(rules, state)
        return{
            state,
            v$
        }
    },

    methods: {
        agregarUsuario(){
            const qs = require('qs')
            this.v$.$validate()
            if(!this.v$.$error){
                var datosEnviar = {
                    nombre : this.state.usuario.nombre,
                    telefono : this.state.usuario.telefono,
                    username : this.state.usuario.username,
                    fecha_nacimiento : this.state.usuario.fecha_nacimiento,
                    correo : this.state.usuario.correo,
                    password : this.state.usuario.password
                }
                console.log(datosEnviar)
                axios.post('http://localhost/backend_direct_english/public/api/usuarios/add',
                    qs.stringify(datosEnviar)
                ).then(()=>{
                    this.$swal({icon:"success", title: 'Usuario agregado con éxito'})
                    .then(function() {
                        window.location.href = 'listar'
                    });
                })
            }
        }
        
    }
    
}
</script>