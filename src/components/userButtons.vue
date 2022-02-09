<template>
    <div class="btn-group" role="group" aria-label="">
        <button type="button" @click="btnEditar" class="btn btn-primary">Editar</button>
        <button type="button" @click="btnEliminar" class="btn btn-danger">Borrar</button>
    </div>    
</template>
<script>
import axios from 'axios';

export default {    
    name: 'buttons',
    props: {
        row: Object,    
        column: Object    
    },
    methods: {
        btnEditar(){            
           window.location.href = `/usuarios/editar/${this.row.id}`
        },
        btnEliminar(){
            axios.put(`http://directenglish.test/api/usuarios/delete/${this.row.id}`)
            .then(() =>{
                //console.log(datos)
                this.$swal({icon:"success", title: 'Usuario eliminado'})
                .then(function() {
                    window.location.href = '/usuarios/listar'
                });
            })
            .catch(console.log) 
        }
    }
}
</script>