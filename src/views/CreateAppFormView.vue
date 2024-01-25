<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";

const formDataRef = ref({
    "aimodotis":{
        "fname": "",
        "lname": "",
        "email": "",
        "phone": "",
        "sex": "",
        "last_donation": "",
        "age": 0,
        "location": "",
        "amka": ""
    },
    "bloodTest":{
        "date": "",
        "details": "",
        "bloodtype": ""
    }
});

const urlRef = ref("http://localhost:9090/appform/new");
const authRef = ref(true);
const methodRef = ref("POST");

const { data, performRequest } = useRemoteData(urlRef, authRef, methodRef, formDataRef);

const onSubmit = () => {
    performRequest();
};
</script>

<template>
    <div class="container mb-4">
        <h1>New Aimodotis</h1>
    </div>
    <div>
        <pre>{{ data }}</pre>
    </div>
    <div class="container mb-4">
        <div class="mb-2">
            <label for="fname">First Name</label>
            <input class="form-control" id="fname" v-model="formDataRef.aimodotis.fname" type="text" />
        </div>
        <div class="mb-2">
            <label for="lname">Last Name</label>
            <input class="form-control" id="lname" v-model="formDataRef.aimodotis.lname" type="text" />
        </div>
        <div class="mb-2">
            <label for="email">Email</label>
            <input class="form-control" id="email" v-model="formDataRef.aimodotis.email" type="email" />
        </div>
        <div class="mb-2">
            <label for="phone">Phone</label>
            <input class="form-control" id="phone" v-model="formDataRef.aimodotis.phone" type="text" />
        </div>
        <div class="mb-2">
            <label for="sex">Sex</label>
            <input class="form-control" id="sex" v-model="formDataRef.aimodotis.sex" type="text" />
        </div>
        <div class="mb-2">
            <label for="location">Location</label>
            <input class="form-control" id="location" v-model="formDataRef.aimodotis.location" type="text" />
        </div>
        <div class="mb-2">
            <label for="lastdonation">Last Donation </label>
            <input class="form-control" id="lastdonation" v-model="formDataRef.aimodotis.last_donation" type="date" />
        </div>
        <div class="mb-2">
            <label for="age">Age</label>
            <input class="form-control" id="age" v-model="formDataRef.aimodotis.age" type="number" />
        </div>
        <div class="mb-2">
            <label for="amka">AMKA</label>
            <input class="form-control" id="amka" v-model="formDataRef.aimodotis.amka" type="text" />
        </div>
        <div class="mb-2">
            <label for="date">Blood Test Date</label>
            <input class="form-control" id="date" v-model="formDataRef.bloodTest.date" type="date" />
        </div>
        <div class="mb-2">
            <label for="details">Blood Test Details</label>
            <input class="form-control" id="details" v-model="formDataRef.bloodTest.details" type="text" />
        </div>
        <div class="mb-2">
            <label for="bloodtype">Blood Type</label>
            <input class="form-control" id="bloodtype" v-model="formDataRef.bloodTest.bloodtype" type="text" />
        </div>
        <div class="">
            <button class="btn btn-primary" @click="onSubmit" type="button">Submit Form</button>
        </div>
    </div>
</template>