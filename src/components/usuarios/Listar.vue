<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                
                <div class="float-left"><h5>Lista de Usuarios</h5></div>
                <div class="float-right"><router-link to="/usuarios/crear" class="btn btn-primary">Agregar</router-link></div>
                
            </div>
            <div class="card-body">
                <JlDatatable
                    :url='datatable.url'
                    :columns="datatable.columns"
                    :isSearch="datatable.isSearch"
                    :isLengthMenu="datatable.isLengthMenu"  
                />
            </div>

        </div>    
    </div>


</template>

<script>
import JlDatatable from 'jl-datatable';
import userButtons from '../../components/userButtons.vue';

export default {
    
    components: {
        JlDatatable
    },
    data(){
        return {
            datatable: {
                url: 'http://directenglish.test/api/usuarios',
                isSearch: false,
                isLengthMenu: false,
                columns: [       
                {
                    title: '#',
                    key: 'id',
                    isSort: true,            
                    width: '5%'
                },   
                {
                    title: 'Nombre',
                    key: 'nombre',
                    isSort: true,
                    isSearch: true,
                },
                {
                    title: 'Telefono',
                    key: 'telefono',
                    isSort: false,
                    isSearch: false,
                },
                {
                    title: 'Username',
                    key: 'username',
                    isSort: false,
                    isSearch: true,
                },
                {
                    title: 'Correo',
                    key: 'correo',
                    isSort: false,
                    isSearch: true,
                },

                {
                    title: 'Estado',
                    key: 'estado',  
                    width: '10%'                      
                },
                {
                    title: 'Acciones',            
                    key: 'id',
                    isAction: true,
                    component: userButtons
                }
                ]
            }
        }
    },

    methods:{

        //Retorna el listado de usuarios
/*         consultarUsuarios(){
            axios.get('http://directenglish.test/api/usuarios')
            .then((datos) =>{
                this.usuarios = []
                if(datos.status == 200){
                    this.usuarios = datos.data;
                }
                console.log(this.usuarios)
            })
            .catch(console.log) 
        }, */

    }
}
</script>