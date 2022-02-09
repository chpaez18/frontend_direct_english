<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                
                <div class="float-left"><h5>Lista de Productos</h5></div>
                <div class="float-right"><router-link to="/productos/crear" class="btn btn-primary">Agregar</router-link></div>
                
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
import productButtons from '../../components/productButtons.vue';

export default {

    components: {
        JlDatatable
    },
    
    data(){
        return {
            datatable: {
                url: 'http://localhost/backend_direct_english/public/api/productos',
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
                    title: 'Sku',
                    key: 'sku',
                    isSort: true,
                    isSearch: true,
                },
                {
                    title: 'Nombre',
                    key: 'nombre',
                    isSort: false,
                    isSearch: false,
                },
                {
                    title: 'Cantidad',
                    key: 'cantidad',
                    isSort: false,
                    isSearch: true,
                },
                {
                    title: 'Precio',
                    key: 'precio',
                    isSort: false,
                    isSearch: true,
                },
                {
                    title: 'Acciones',            
                    key: 'id',
                    isAction: true,
                    component: productButtons
                }
                
                ]
            }
        }
    },

    created:function(){

        //this.consultarProductos();

    },

    methods:{

        //Retorna el listado de productos
/*         consultarProductos(){
            axios.get('http://directenglish.test/api/productos')
            .then((datos) =>{
                this.productos = []
                if(datos.status == 200){
                    this.productos = datos.data;
                }
            })
            .catch(console.log) 
        }, */

    }
}
</script>