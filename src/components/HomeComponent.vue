<template>
    <HeaderComponent/>
    <section class="pt-24 pb-10 bg-black">
        <div class="container flex flex-col gap-8 mx-auto">
            <!-- Start phiên live của tôi -->
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium text-white">Phiên live của tôi</h1>
                <div class="w-full bg-[#262626] flex flex-col items-center p-6">
                    <div class="flex flex-col gap-4 cursor-pointer group">
                        <div class="relative overflow-hidden rounded-xl">
                            <img src="../assets/W-01/login3.jpg" alt="live"
                                class="h-[500px] aspect-video object-cover group-hover:blur-sm transition-all duration-300 group-hover:brightness-75 group-hover:scale-105">
                            <div
                                class="absolute inset-0 flex items-center justify-center text-6xl text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                <button class="hover:text-[#121212] transition-all duration-200">
                                    <i class="fa-solid fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between transition-all duration-300 w-96 group-hover:opacity-75">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                                <div class="text-white">
                                    <h1 class="text-lg font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db]">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p>1:00:00</p>
                                <p class="px-3 py-1 uppercase bg-red-500 animate-bounce">Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End phiên live của tôi -->

            <!-- Start phiên live khác -->
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium text-white">Phiên live khác</h1>
                <ul class="grid grid-cols-4 gap-6">
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Phạm</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img src="../assets/W-03/list-stream-thumbnail.png" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../assets/W-02/avatar.jpg" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">Sang Rich</h1>
                                    <p class="text-[#d1d5db] text-sm">Vẽ với tui</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">1:00:00</p>
                                <p class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- End phiên live khác -->
        </div>
    </section>
</template>

<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
import HeaderComponent from './HeaderComponent.vue';


export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    // prop: [variable1, variable2],
    components: { HeaderComponent },
    
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