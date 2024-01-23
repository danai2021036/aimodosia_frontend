<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const appFormIdRef = ref(null);

onMounted(() => {
    appFormIdRef.value = route.params.id;
});
</script>

<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="row py-4 px-3">
                <div class="col-12">
                    <div class="mb-4">
                        <RouterLink class="small" :to="{ name: 'appforms-pending' }"
                        >Back to App Forms</RouterLink
                        >
                        <h1 class="fs-3">App Form #{{ appFormIdRef }}</h1>
                    </div>
                    <div class="mb-4">
                        <ul class="nav border">
                            <li class="nav-item">
                                <RouterLink
                                    class="nav-link"
                                    :to="{ name: 'appform-pending-details', params: { id: appFormIdRef } }"
                                >Details</RouterLink
                                >
                            </li>
                            <b-button @click="acceptAppForm" class="btn btn-success">
                                Accept
                            </b-button>
                        </ul>
                    </div>
                    <div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
