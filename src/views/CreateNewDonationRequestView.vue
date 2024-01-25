<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';

const router = useRouter();
const route = useRoute();
const store = useApplicationStore();
const formDataRef = ref({
    "date": "",
    "location": ""
});

const userId = ref(null);
onMounted(()=>{
    userId.value = store.userData.id;
})
const token = store.userData.accessToken;

const onSubmit = async() => {
    try {
        const response = await fetch(`http://localhost:9090/donationrequest/${userId.value}/new`, {
        method: 'POST',
            headers: {
            'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
        },
            body: JSON.stringify(formDataRef.value),
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response data if needed
        // Handle success, update UI or perform other actions
        alert('Donation Request Created !');
    } else {
        // Handle error
        console.error('Error creating Donation Request');
    }
} catch (error) {
    console.error('An unexpected error occurred:', error);
}
};

</script>


<template>
    <div class="container mb-4">
        <h1>New Donation Request</h1>
    </div>
<!--    <div>-->
<!--        <pre>{{ data }}</pre>-->
<!--    </div>-->
    <div class="container mb-4">
        <div class="mb-2">
            <label for="date">Date</label>
            <input class="form-control" id="date" v-model="formDataRef.date" type="date" />
        </div>
        <div class="mb-2">
            <label for="location">Location</label>
            <input class="form-control" id="location" v-model="formDataRef.location" type="text" />
        </div>
        <div class="">
            <button class="btn btn-primary" @click="onSubmit" type="button">Submit Form</button>
        </div>
    </div>
</template>