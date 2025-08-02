<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import DemoComponent from './components/DemoComponent.vue'
import ChildComponent from './components/ChildComponent.vue'
import FormComponent from './components/FormComponent.vue'
import DetailComponent from './components/DetailComponent.vue'
</script>

<template>
  <div id="main">
    <FormComponent @detail="handleDetailEmployee"/>
    <DetailComponent v-if="employeeNumberCurrent" :currentEmployee="employeeNumberCurrent"/>
  </div>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
import ChildComponent from './components/ChildComponent.vue'
import { RouterLink } from 'vue-router'
// import component1 from 'component1'
// import component2 from 'component2'

export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    // prop: [variable1, variable2],
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
            employeeNumberCurrent: null
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
        console.log('Init created component and call to function get data from api server.');
        
    },
    mounted() {
        
        
    },
    watch: {
        
    },
    computed: {
        appendMsg() {
            return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
        }
    },
    methods: {
        /**
         * Example default function not using param
         */
        defaultFunction() {
            this.msg = "Replace message here!";
        },
        funcHandleDataFromChild(data) {
          // Gan bien o component cha bang du lieu gui len tu component con
          this.dataFromChild = data;
        },

        /**
         * Example default function using param 
         *
         * @param int pageNum number of page
         * @return boolean
         */
        defaultFunctionUsingParam(pageNum) {
            console.log(pageNum);
            return false;
        },
        handleDetailEmployee(employee) {
            this.employeeNumberCurrent = employee;
        },

        
        /***********************************************************************************************************
         ******* Async and await functions for manipulating server-side data through internal API protocols ********
            **********************************************************************************************************/

        /**
         * Call API sample
         */
        async callAPI() {
            try {
                const callAPI = await axios.get('/apiendpoint', {
                    /************ Attach param for request here ***************/
                }).then(function (response) {
                    console.log(response);
                }).catch(function (errors) {
                    console.log(errors);
                });
                console.log(callAPI.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
}
</script>

<style scoped>
#main {
  width: 700px;
  height: 700px;
  border: 1px solid gray;
  margin: 0 auto;
  display: flex;
}
</style>
