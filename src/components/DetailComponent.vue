<template>
    <div id="detail">
        <h3>Mã nhân viên: <span class="font-bold">{{ currentEmployee.employee_number }}</span></h3>
        <h3>Họ và tên: <span class="font-bold">{{ currentEmployee.full_name }}</span></h3>
        <input type="number" v-model="qty" placeholder="1">
        <br>
        <select name="" id="" v-model="type">
            <option v-for="type in listType" :value="type">{{ type }}</option>
        </select>
        <br>
        <button v-on:click="addQTY()">Thêm</button>
    </div>
</template>

<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
// import component1 from 'component1'
// import component2 from 'component2'

export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    props: ["currentEmployee"],
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
            qty: 1,
            type: "terebi",
            listType: ["keitai denwa", "terebi", "kompuuta", "Laptopu"],
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
#detail {
    width: 300px;
    height: 300px;
}
.font-bold {
    font-weight: bold;
}
</style>