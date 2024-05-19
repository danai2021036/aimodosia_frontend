<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';
import { useRemoteData } from '@/composables/useRemoteData.js';
const backendEnvVar = import.meta.env.VITE_BACKEND;
const router = useRouter();
const route = useRoute();
const store = useApplicationStore();
const aimodotisIdRef = ref(null);

const formDataRef = ref({
    "details" : ""
});
const urlRef2 = ref(null);
const authRef2 = ref(true);
const urlRef = ref(backendEnvVar+'/api/aimodotis');
const methodRef2 = ref('POST');

const authRef = ref(true);
const {data, loading, performRequest} = useRemoteData(urlRef, authRef);
const updateBloodTestRemoteData = useRemoteData(urlRef2,authRef2,methodRef2, formDataRef);


onMounted(() => {
    performRequest();
});


const submitForm = () =>{
    urlRef2.value = backendEnvVar+'/api/aimodotis/updatebloodtest/' + aimodotisIdRef.value;
    updateBloodTestRemoteData.performRequest();
    alert('Your Blood Test Information was updated successfully!');

};

const updateAimodotisId = (id) => {
    aimodotisIdRef.value = id;
};

</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <RouterLink class="small" :to="{ name: 'home' }"
                        >Home</RouterLink
                        >
                        <h1 class="fs-3">Aimodotis #{{ aimodotisIdRef }}</h1>
                    </div>
                    <div class="mb-4">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                            </tr>
                            </thead>
                            <tbody v-if="loading">
                            <tr>
                                <td colspan="5">Loading...</td>
                            </tr>
                            </tbody>
                            <tbody v-if="data">
                            <tr v-for="aimodotis in data">
                                <template v-if="aimodotis.email===store.userData.email">
                                    <td>{{updateAimodotisId(aimodotis.id)}}</td>
                                </template>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <p>You can update your details here</p>
                            <div class="mb-2" :class="{ 'has-error': formDataRef.details }">
                                <label class="mb-1" for="details">Details: </label>
                                <input type="text" class="form-control" id="location" v-model="formDataRef.details"/>
                            </div>
                            <button @click="submitForm" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.has-error input[type="text"] {
    border-color: red;
}
.has-error1 input[type="number"] {
    border-color: red;
}
</style>
