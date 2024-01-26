<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRemoteData } from '@/composables/useRemoteData.js';
import { useApplicationStore } from '@/stores/application.js';
const formDataRef = ref({
    "username": "",
    "email": ""
});
const urlRef = ref(null);
const authRef = ref(true);
const methodRef = ref('POST');
const store = useApplicationStore();
const router = useRouter();
const route = useRoute();
const urlRef2 = ref(null);
const authRef2 = ref(true);
const methodRef2 = ref('GET');

const userIdRef = ref(null);

const updateUserRemoteData = useRemoteData(urlRef,authRef,methodRef, formDataRef);
const getUserRemoteData = useRemoteData(urlRef2,authRef2,methodRef2);



onMounted(() => {
    userIdRef.value = route.params.id;
    urlRef.value = 'http://localhost:9090/admin/user/update/' + userIdRef.value;
    urlRef2.value = 'http://localhost:9090/admin/users/' + userIdRef.value;
    getUserRemoteData.performRequest();
});

const submitForm = () =>{
    updateUserRemoteData.performRequest();
};
</script>

<template>
    <div>

                <span v-if="getUserRemoteData.data">
                    <label for="username">Username: </label>
                    <input type="text" id="username" v-model="formDataRef.username"/>
                    <label for="email">Email: </label>
                    <input type="text" id="email" v-model="formDataRef.email"/>
                    <button @click="submitForm" type="submit">Submit</button>
                </span>

    </div>
</template>