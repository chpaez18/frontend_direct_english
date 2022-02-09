import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import JlDatatable from 'jl-datatable';


createApp(App).use(router).use(VueSweetalert2).use('jl-datatable', JlDatatable).mount('#app')