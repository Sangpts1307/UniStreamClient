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
        <div id="chart">
            <Bar
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
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
    components: { Bar },
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
            qty: 1,
            type: "terebi",
            listType: ["keitai", "terebi", "kompuuta", "pasookon"],
            // Init variable of add data for type
            typeData: {
                "keitai": 0,
                "terebi": 0,
                "kompuuta": 0,
                "pasookon": 0,
            },
            chartData: {
                labels: ["keitai", "terebi", "kompuuta", "pasookon"],
                datasets: [{ 
                    data: [0, 0, 0, 0],
                    backgroundColor: "blue",
                    label: "Category quantity",
                }]
            },
            chartOptions: {
                responsive: true
            },
            intervalID: null,
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
        console.log('Init created component and call to function get data from api server.');
        this.callAPI();
    },
    mounted() {
        // Dem nguoc moi 3s se goi toi API de lay du lieu moi
        this.intervalID = setInterval(() => {
            this.callAPI();
        }, 3000);
        
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
         * Function add qty of employee and update chart
         */
        addQTY() {
            console.log(this.type, this.typeData);
            
            switch (this.type) {
                case "keitai":
                    this.typeData.keitai = this.typeData.keitai + this.qty;
                    break;
                case "terebi":
                    this.typeData.terebi = this.typeData.terebi + this.qty;
                    break;
                case "kompuuta":
                    this.typeData.kompuuta = this.typeData.kompuuta + this.qty;
                    break;
                case "pasookon":
                    this.typeData.pasookon = this.typeData.pasookon + this.qty;
                    break;
                default:
                    console.log("Cannot find type!");
                    return false;
            }            
            
        },
        
        /***********************************************************************************************************
         ******* Async and await functions for manipulating server-side data through internal API protocols ********
            **********************************************************************************************************/

        /**
         * Call API sample
         */
        async callAPI() {
            try {
                let typeData = [];
                const callAPI = await axios.get('http://localhost:5173/list-data', {
                    /************ Attach param for request here ***************/
                }).then(function (response) {
                    // Append data to chart
                    // response ra du lieu ma server tra ve
                    typeData = response.data;
                }).catch(function (errors) {
                    console.log(errors);
                });
                this.chartData = {
                    ...this.chartData,
                    datasets: [{
                        ...this.chartData.datasets[0],
                        data: typeData
                    }]
                };
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