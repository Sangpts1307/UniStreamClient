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

            <!-- BEGIN CHANGE COLOR BOX BY STYLE BINDING -->
            <div class="col-md-12 d-flex">
                <!-- Style binding -->
                <div class="select-color-section" v-for="color in arrColor" :style="{background: color}" v-on:click="fillColor(color)"></div>
            </div>  
            <!-- Truyền màu sau khi click vào biến color trong data default, lúc hiển thị nó sẽ chuyển theo -->
            <div class="col-md-12" id="preview_color" :style="{background: this.color}"></div>
            <!-- END CHANGE COLOR BOX -->
            
            <!-- BEGIN CLASS BINDING -->
            <div class="col-md-12">
                <button v-on:click="clickMe()">Click me and active</button>
                <!-- Class binding -->
                <p :class="{'text-danger': this.clickStatus}">Đề thi vẽ còn hay hơn đề văn</p>
                <button v-on:click="changeActive()">Click me!</button>
                <button :disabled="activeStatus">Click status</button>
            </div>
            <!-- END CLASS BINDING -->

            <div class="col-md-12" id="the_matrix_one">
                <div class="nm" style="display: flex;">
                    <input v-model="n" type="number">
                    X
                    <input v-model="m" type="number">
                </div>
                <hr>
                <div class="matrix" style="display: flex;">
                    <div class="matrix1">
                        {{ i }}
                        <span v-for="i in n" :key="i">
                            <input v-for="j in m" v-model="this.matrix1[i-1][j-1]" type="number">
                            <br>
                        </span>
                    </div>
                    <div class="clear-fix" style="width: 50px;"></div>
                    <div class="matrix2">
                        <span v-for="i in n" :key="i">
                            <input v-for="j in m" v-model="this.matrix2[i-1][j-1]" type="number">
                            <br>
                        </span>
                    </div>
                    <div class="clear-fix" style="width: 50px;"></div>
                    <div id="method">
                        <button :disabled="n <= 0 || m <= 0" v-on:click="add()">+</button>
                        <button :disabled="n <= 0 || m <= 0" v-on:click="multiple()">x</button>
                    </div>
                    <div class="clear-fix" style="width: 50px;"></div>
                    <div id="matrix3">
                        <span v-for="i in n" :key="i">
                            <input v-for="j in m" v-model="this.matrix3[i-1][j-1]" type="number">
                            <br>
                        </span>
                    </div>
                    <p v-if="n <= 0" style="color: red;">N và M phải lớn hơn 0</p>
                </div>
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
            listSNT: [],
            arrColor: [
                "blue", "green", "yellow", "red", "gray"
            ],
            color: "",
            clickStatus: false,
            activeStatus: false,
            n: 1,
            m: 1,
            matrix1: [], // Default 0
            matrix2: [], // Default 0
            matrix3: [], // Default 0
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
        console.log('Init created component and call to function get data from api server.');
        this.msg = "Click vào button dưới để tăng giá trị lên 1 đơn vị!"
        // Co the goi toi cac ham khac (trong methods)
        this.initMatrix();
    },
    mounted() {
        /***********************************************************************************************************
         ******************** Once created, the interface is displayed and calls mounted. **************************
            **********************************************************************************************************/
        // Code JS chay o trong nay hoac dung cac thu vien khac nhu jQuery o day
        // jQuery code
        $(document).ready(function () {
            // alert("3.14");
        });
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
        },
        n() {
            this.initMatrix();
        },
        m() {
            this.initMatrix();
        },
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

        /**
         * Method fill color to section preview
         * 
         * @param color 
         */
        fillColor(color) {
            this.color = color;
        },

        /**
         * Method handle click button and change stt
         */
        clickMe() {
            if (this.clickStatus == true) {
                this.clickStatus = false;
            } else {
                this.clickStatus = true;
            }
        },

        /**
         * Method handle click button and change active
         */
        changeActive() {
            if (this.activeStatus == true) {
                this.activeStatus = false;
            } else {
                this.activeStatus = true;
            }
        },

        /**
         * Method init matrix
         */
        initMatrix() {
            // Init matrix
            for (let i = 0; i < this.n; i++) {
                this.matrix1[i] = [];
                this.matrix2[i] = [];
                this.matrix3[i] = [];
                for (let j = 0; j < this.m; j++) {
                    this.matrix1[i][j] = 0;
                    this.matrix2[i][j] = 0;
                    this.matrix3[i][j] = 0;
                }
            }
        },
        
        /**
         * Function add matrix
         */
        add() {
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.m; j++) {
                    this.matrix3[i][j] = this.matrix1[i][j] + this.matrix2[i][j];
                }
            }
        },

        /**
         * Function multiply matrix
         */
        multiple() {
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.m; j++) {
                    let tmp = 0;
                    for (let k = 0; k < this.m; k++) {
                        tmp += this.matrix1[i][k] * this.matrix2[k][j];
                    }
                    this.matrix3[i][j] = tmp;
                }
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
.select-color-section {
    width: 100px;
    height: 30px;
    border: 1px solid black;
    margin-right: 10px;
}
.d-flex {
    display: flex;   
}
#preview_color {
    margin-top: 15px;
    height: 150px;
    width: 540px;
    border: 1px solid black;
}
.text-danger {
    color: red !important;
}
#the_matrix_one input {
    width: 50px;
}
</style>
