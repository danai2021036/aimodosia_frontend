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


const userIdRef = ref(null);

const updateUserRemoteData = useRemoteData(urlRef,authRef,methodRef, formDataRef);
const {data, loading, performRequest} = useRemoteData(urlRef2, authRef2);



onMounted(() => {
    userIdRef.value = route.params.id;
    urlRef.value = 'http://localhost:9090/admin/user/update/' + userIdRef.value;
    urlRef2.value = 'http://localhost:9090/admin/users/' + userIdRef.value;
    performRequest();
});

const submitForm = () =>{
    updateUserRemoteData.performRequest();
    alert('User updated successfully!');

};
</script>


<template>
    <div class="mb-4">
        <h>These are the user's details</h>
            <tbody v-if="loading">
            <tr>
                <td colspan="5">Loading...</td>
            </tr>
            </tbody>
            <tbody v-if="data">
                    <p><b>Username:</b> {{ data.username}}    <b>Email:</b> {{ data.email }}</p>
            </tbody>
    </div>
    <div>
        <p>You can update any field</p>
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="formDataRef.username"/>
        <label for="email">Email: </label>
        <input type="text" id="email" v-model="formDataRef.email"/>
        <button @click="submitForm" type="submit">Submit</button>
    </div>
</template>