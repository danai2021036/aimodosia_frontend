<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";

const formDataRef = ref({
    "username":"",
    "email":"",
    "password": ""
});

const urlRef = ref("http://localhost:9090/admin/user/new");
const authRef = ref(true);
const methodRef = ref("POST");

const { data, performRequest } = useRemoteData(urlRef, authRef, methodRef, formDataRef);

const onSubmit = async () => {
    await performRequest();
};
</script>

<template>
    <div class="container mb-4">
        <h1>New User</h1>
    </div>
    <div>
        <pre>{{ data }}</pre>
    </div>
    <div>
        <!-- Display a success or error message to the user -->
        <div v-if="data && data.success" class="alert alert-success">
            Form submitted successfully!
        </div>
        <div v-else-if="data && data.error" class="alert alert-danger">
            Form submission failed. Please try again.
        </div>
    </div>
    <div class="container mb-4">
        <div class="mb-2">
            <label for="username">Username</label>
            <input class="form-control" id="username" v-model="formDataRef.username" type="text" />
        </div>
        <div class="mb-2">
            <label for="email">Email</label>
            <input class="form-control" id="email" v-model="formDataRef.email" type="email" />
        </div>
        <div class="mb-2">
            <label for="password">Password</label>
            <input class="form-control" id="password" v-model="formDataRef.password" type="text" />
        </div>
        <div class="">
            <button class="btn btn-primary" @click="onSubmit" type="button">Submit Form</button>
        </div>
    </div>
</template>