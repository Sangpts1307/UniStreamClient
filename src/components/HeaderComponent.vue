<template>
    <header
        class="z-50 fixed h-16 top-0 left-0 right-0 flex items-center p-4 bg-[#121212] scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent">
        <div class="container relative flex items-center justify-between mx-auto">
            <div class="text-3xl font-bold text-white">Uni Stream</div>
            <div>
                <!-- Start đã loggin -->
                <div class="flex items-center gap-5">
                    <h1 class="text-xl text-white">Xin chào {{ this.userInfo.name }} !!!</h1>
                    <div>
                        <input type="checkbox" id="notification" class="hidden peer/noti">
                        <label for="notification" class="text-2xl text-white cursor-pointer hover:opacity-75">
                            <i class="fa-solid fa-bell"></i>
                        </label>
                        <div
                            class="z-10 absolute rounded-xl outline outline-2 outline-[#383838] top-16 right-16 text-white bg-[#121212] hidden peer-checked/noti:block pl-4 pr-2 py-2 w-[400px]">
                            <div class="flex justify-end">
                                <label for="notification"
                                    class="p-2 text-xl text-white cursor-pointer hover:opacity-75">
                                    <i class="fa-solid fa-xmark"></i>
                                </label>
                            </div>
                            <ul
                                class="py-2 pr-2 mr-2 max-h-[500px] overflow-y-scroll flex flex-col gap-2 rounded-xl scrollbar">
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                                <li
                                    class="flex gap-4 hover:bg-[#3e3e3e] duration-200 transition-all cursor-pointer rounded-xl py-4 px-3">
                                    <img class="w-12 rounded-full" src="../assets/W-02/avatar.jpg" alt="avatar">
                                    <div>
                                        <p class="font-medium">Sang  Phạm đã theo dõi bạn</p>
                                        <p class="text-sm text-gray-300">1 giờ trước</p>
                                    </div>
                                </li>
                            </ul>
                            <svg class="w-full my-2 animate-spin" width="30" height="30" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                    fill="white" opacity=".25" />
                                <path fill="white"
                                    d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                    class="spinner_ajPY" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <label for="menu">
                            <img class="w-10 rounded-full cursor-pointer hover:opacity-75"
                                :src="userInfo.avatar" 
                                :onerror="'../assets/W-02/avatar.jpg'"
                                :alt="userInfo.name"
                                :title="userInfo.name">
                        </label>
                        <input type="checkbox" id="menu" class="hidden peer/menu">
                        <div
                            class="z-10 absolute rounded-xl outline outline-2 outline-[#383838] top-16 right-0 text-white bg-[#121212] hidden peer-checked/menu:block px-4 py-2">
                            <div class="flex justify-end">
                                <label for="menu" class="p-2 text-xl text-white cursor-pointer hover:opacity-75">
                                    <i class="fa-solid fa-xmark"></i>
                                </label>
                            </div>
                            <ul class="flex flex-col gap-4 py-2 ml-2 mr-8 text-lg">
                                <li>
                                    <input type="checkbox" id="modal_live" class="hidden peer/modal_live">
                                    <label class="cursor-pointer hover:opacity-75" for="modal_live">Đăng ký phiên
                                        live</label>
                                    <!-- Start modal đăng kí phiên live -->
                                    <div
                                        class="fixed inset-0 z-20 items-center justify-center hidden mx-auto text-white bg-black/30 backdrop-blur-sm peer-checked/modal_live:flex">
                                        <div
                                            class="bg-[#121212] w-[800px]  rounded-xl outline outline-2 outline-[#383838] overflow-hidden">
                                            <div class="flex justify-end bg-black">
                                                <label for="modal_live"
                                                    class="p-4 text-xl text-white cursor-pointer hover:opacity-75">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </label>
                                            </div>
                                            <h1 class="px-5 py-4 text-2xl font-bold">Đăng ký phiên live</h1>
                                            <div class="grid grid-cols-2 gap-5 px-5 py-3">
                                                <div class="flex flex-col gap-4">
                                                    <div
                                                        class="flex items-center justify-center w-full overflow-hidden bg-black rounded-xl aspect-video">
                                                        <img src="../assets/W-01/login2.jpg" alt="thumbnail">
                                                    </div>
                                                    <label for="live_thumbnail"
                                                        class="text-white bg-[#222222] py-2 px-5 font-semibold rounded-xl hover:opacity-75 w-32 text-center cursor-pointer transition-all duration-200 text-lg">Chọn
                                                        ảnh</label>
                                                    <input type="file" id="live_thumbnail" class="hidden">
                                                </div>
                                                <div class="flex flex-col gap-4">
                                                    <div class="flex flex-col gap-2">
                                                        <label for="modal_live_title"
                                                            class="text-xl font-medium text-white cursor-pointer">Tiêu
                                                            đề</label>
                                                        <input
                                                            class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-white"
                                                            type="text" id="modal_live_title"
                                                            placeholder="Điền tiêu đề...">
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="modal_live_date"
                                                            class="text-lg font-medium text-white cursor-pointer">Chọn
                                                            thời
                                                            gian</label>
                                                        <input
                                                            class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-transparent"
                                                            type="datetime-local" id="modal_live_date">
                                                    </div>
                                                    <div class="flex justify-end w-full gap-4">
                                                        <label for="modal_live"
                                                            class="px-5 py-2 text-lg font-semibold text-center text-white transition-all duration-200 bg-red-500 cursor-pointer rounded-xl hover:opacity-75 min-w-24">Hủy</label>
                                                        <label for="modal_live"
                                                            class="text-white bg-[#222222] py-2 px-5 font-semibold rounded-xl hover:opacity-75 min-w-24 text-center cursor-pointer transition-all duration-200 text-lg">Xác
                                                            nhận</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 class="w-full px-5 py-4 text-xl font-medium text-center text-red-500">
                                                Vui lòng cập nhật lại token!</h1>
                                        </div>
                                    </div>
                                    <!-- End modal đăng kí phiên live -->
                                </li>
                                <li>
                                    <input type="checkbox" id="modal_info" class="hidden peer/modal_info">
                                    <label class="cursor-pointer hover:opacity-75" for="modal_info">Cập nhật thông
                                        tin</label>
                                    <!-- Start modal cập nhật thông tin -->
                                    <div
                                        class="fixed inset-0 z-20 items-center justify-center hidden mx-auto text-white bg-black/30 backdrop-blur-sm peer-checked/modal_info:flex">
                                        <div
                                            class="bg-[#121212] w-[600px]  rounded-xl outline outline-2 outline-[#383838] text-white overflow-hidden">
                                            <div class="flex justify-end bg-black">
                                                <label for="modal_info"
                                                    class="p-4 text-xl text-white cursor-pointer hover:opacity-75">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </label>
                                            </div>
                                            <div class="flex flex-col gap-6 px-6 py-5">
                                                <h1 class="w-full text-2xl font-bold text-center text-white">Cập nhật
                                                    thông tin</h1>
                                                <div class="flex flex-col gap-3">
                                                    <label for="modal_info_google_client_id"
                                                        class="text-lg font-medium text-white cursor-pointer">Nhập
                                                        GOOGLE_CLIENT_ID</label>
                                                    <textarea id="modal_info_google_client_id"
                                                        class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-white min-h-24 max-h-24 scrollbar-none resize-none"
                                                        placeholder="Điền thông tin..."></textarea>
                                                </div>
                                                <div class="flex flex-col gap-3">
                                                    <label for="modal_info_google_client_secret"
                                                        class="text-lg font-medium text-white cursor-pointer">Nhập
                                                        GOOGLE_CLIENT_ID</label>
                                                    <textarea id="modal_info_google_client_secret"
                                                        class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-white min-h-24 max-h-24 scrollbar-none resize-none"
                                                        placeholder="Điền thông tin..."></textarea>
                                                </div>
                                                <div class="flex justify-end w-full gap-4">
                                                    <label for="modal_info"
                                                        class="px-5 py-2 text-lg font-semibold text-center text-white transition-all duration-200 bg-red-500 cursor-pointer rounded-xl hover:opacity-75 min-w-24">Hủy</label>
                                                    <label for="modal_info"
                                                        class="text-white bg-[#222222] py-2 px-5 font-semibold rounded-xl hover:opacity-75 min-w-24 text-center cursor-pointer transition-all duration-200 text-lg">Xác
                                                        nhận</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End modal cập nhật thông tin -->
                                </li>
                                <li>
                                    <input type="checkbox" id="modal_info" class="hidden peer/modal_info">
                                    <label class="cursor-pointer hover:opacity-75" for="modal_info">Đăng xuất</label>
                                    <!-- Start modal cập nhật thông tin -->
                                    <div
                                        class="fixed inset-0 z-20 items-center justify-center hidden mx-auto text-white bg-black/30 backdrop-blur-sm peer-checked/modal_info:flex">
                                        <div
                                            class="bg-[#121212] w-[600px]  rounded-xl outline outline-2 outline-[#383838] text-white overflow-hidden">
                                            <div class="flex justify-end bg-black">
                                                <label for="modal_info"
                                                    class="p-4 text-xl text-white cursor-pointer hover:opacity-75">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </label>
                                            </div>
                                            <div class="flex flex-col gap-6 px-6 py-5">
                                                <h1 class="w-full text-2xl font-bold text-center text-white">Cập nhật
                                                    thông tin</h1>
                                                <div class="flex flex-col gap-3">
                                                    <label for="modal_info_google_client_id"
                                                        class="text-lg font-medium text-white cursor-pointer">Nhập
                                                        GOOGLE_CLIENT_ID</label>
                                                    <textarea id="modal_info_google_client_id"
                                                        class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-white min-h-24 max-h-24 scrollbar-none resize-none"
                                                        placeholder="Điền thông tin..."></textarea>
                                                </div>
                                                <div class="flex flex-col gap-3">
                                                    <label for="modal_info_google_client_secret"
                                                        class="text-lg font-medium text-white cursor-pointer">Nhập
                                                        GOOGLE_CLIENT_ID</label>
                                                    <textarea id="modal_info_google_client_secret"
                                                        class="px-5 py-4 bg-[#222222] rounded-xl transition-all duration-200 outline outline-2 outline-transparent focus:outline-white min-h-24 max-h-24 scrollbar-none resize-none"
                                                        placeholder="Điền thông tin..."></textarea>
                                                </div>
                                                <div class="flex justify-end w-full gap-4">
                                                    <label for="modal_info"
                                                        class="px-5 py-2 text-lg font-semibold text-center text-white transition-all duration-200 bg-red-500 cursor-pointer rounded-xl hover:opacity-75 min-w-24">Hủy</label>
                                                    <label for="modal_info"
                                                        class="text-white bg-[#222222] py-2 px-5 font-semibold rounded-xl hover:opacity-75 min-w-24 text-center cursor-pointer transition-all duration-200 text-lg">Xác
                                                        nhận</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End modal cập nhật thông tin -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End đã loggin -->

                <!-- Start chưa loggin -->
                <!-- <button
                    class="text-white bg-[#222222] py-2 px-5 font-semibold rounded-xl hover:opacity-75 transition-all duration-200">Đăng
                    nhập</button> -->
                <!-- End chưa loggin -->
            </div>
        </div>
    </header>
</template>

<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
// import HeaderComponent from './HeaderComponent.vue';


export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    // prop: [variable1, variable2],
    // components: { HeaderComponent },
    
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
           userInfo: '',
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
        this.userInfo = JSON.parse(sessionStorage.getItem('user_info'));
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