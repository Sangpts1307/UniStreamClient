<template>

    <div class="flex items-center justify-center h-screen bg-black">
        <div class="bg-white h-[65%] w-[50%] rounded-2xl flex">
            <div class="m-2 w-[600px] rounded-xl overflow-hidden">
                <div class="w-full h-full overflow-hidden rounded-xl">
                    <img class="object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-105 hover:blur-sm"
                        src="../assets/W-01/login3.jpg" alt="" />
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-10">
                <h1 class="text-4xl font-bold text-center">Đăng nhập vào Uni Stream</h1>
                <div class="flex flex-col gap-3">
                    <button
                        @click="loginWithGoogle"
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="../assets/W-01/google.png" alt="google icon">
                        <p class="text-xl">Tiếp tục với Google</p>
                    </button>
                    <div class="flex items-center justify-center gap-4">
                        <hr class="w-48 text-gray-800">
                        <span class="text-gray-500">hoặc</span>
                        <hr class="w-48 text-gray-800">
                    </div>
                    <button
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="../assets/W-01/facebook.png" alt="facebook icon">
                        <p class="text-xl">Tiếp tục với Facebook</p>
                    </button>
                </div>
            </div>
        </div>
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
import { googleTokenLogin } from "vue3-google-login";


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
           
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
       
    },
    mounted() {
        /***********************************************************************************************************
         ******************** Once created, the interface is displayed and calls mounted. **************************
            **********************************************************************************************************/
        // Code JS chay o trong nay hoac dung cac thu vien khac nhu jQuery o day
        // jQuery code
        // window.handleCredentialResponse = (response) => {
        //     console.log("Google JWT Token: ", response.credential);
        //     this.decodeToken(response.credential);
        // };
    },
    watch: {
        /***********************************************************************************************************
         ********************************* Methods change value for a variable *************************************
            **********************************************************************************************************/
       
    },
    computed: {
       
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

        async loginWithGoogle() {
            const googleUser = await googleTokenLogin();
            let doLogin = await axios.post('http://localhost/unistream_api/public/api/login', {
                /************ Attach param for request here ***************/
                'access_token': googleUser.access_token
            }).then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    // Save to session storage
                    sessionStorage.setItem("access_token", response.data.data.accessToken);
                    sessionStorage.setItem("user_info", JSON.stringify(response.data.data.user_info));
                    window.location.replace('/index');
                    return true;
                }
                alert("401 UnAuthentication");
                return false;
            }).catch(function (errors) {
                console.log(errors);
            });
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





