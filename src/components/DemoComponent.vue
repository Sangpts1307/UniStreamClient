<!-- Define html code -->
<template>
    <!-- html code here -->
     <div class="row">
        <div class="col-md-12">
            <div class="card-body">
                <h1>{{ msg }}</h1>
                <h3>Comment box:</h3>
                <button v-on:click="plusData()">{{ count }}</button>
                <!-- Moi lan click se binh phuong gia tri count -->
                <h2>count^2= {{ count2 }}</h2>
                <!-- Nhap vao 1 so va hien thi so do co phai SNT hay khong -->
                <!-- De truyen du lieu vao the input su dung v-model -->
                <input type="number" v-model="a">
                <!-- Dieu kien hien thi du lieu -->
                <p v-if="checkSNT">So {{ a }} la so nguyen to</p>
                <p v-else>So {{ a }} khong phai so nguyen to</p>
                <!-- Hien thi danh sach cac SNT tu 1 toi a -->
                <p>
                    Cac SNT tu 1 toi {{ a }} la:
                    <!-- Hien thi danh sach dang mang hoac object -->
                    <span v-for="_snt in listSNT">{{ _snt }}, </span>
                </p>
            </div>
        </div>
    </div>
</template>  

<!-- Define JS code -->
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
    // prop: [variable1, variable2],
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
            msg: 'Hello world!',
            count: 0,
            count2: 0,
            a: 0,
            checkSNT: false,
            listSNT: []
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
        console.log('Init created component and call to function get data from api server.');
        this.msg = "Click vào button dưới để tăng giá trị lên 1 đơn vị!"
        // Co the goi toi cac ham khac (trong methods)
    },
    mounted() {
        /***********************************************************************************************************
         ******************** Once created, the interface is displayed and calls mounted. **************************
            **********************************************************************************************************/
    },
    watch: {
        /***********************************************************************************************************
         ********************************* Methods change value for a variable *************************************
            **********************************************************************************************************/
        msg() {
            console.log("When the value of the msg variable changes, this method will be executed.");
        },
        // Khi 1 bien co su thay doi thi ham o day se thuc thi.
        // Ten ham se trung voi ten cua bien vua thay doi.
        count() {
            this.count2 = this.count * this.count;
        },
        a() {
            // Kiem tra SNT
            if (this.a <= 2) {
                this.checkSNT = false;
                return null;
            } else {
                this.checkSNT = true;
                for (let i = 2; i < this.a; i++) {
                    if (this.a % i == 0) {
                        this.checkSNT = false;
                        break;
                    }
                }
            }
            // kiem tra danh sach SNT
            for (let i = 1; i < this.a; i++) {
                let _check = true;
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        _check = false;
                    }
                }
                if (_check) {
                    // La SNT thi gan vao mang
                    this.listSNT.push(i);
                }
            }
            console.log(this.listSNT);
            
        }
    },
    computed: {
        appendMsg() {
            return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
        }
    },
    methods: {
        /***********************************************************************************************************
         ******************************* Default functions that handle local data **********************************
            **********************************************************************************************************/

        /**
         * Example default function not using param
         */
        defaultFunction() {
            this.msg = "Replace message here!";
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

        /**
         * Method add +1 data
         */
        plusData() {
            this.count++;
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

<style>
/**
* Custom local style css
*/
</style>
