<!--<script setup>-->
<!--import { ref, computed, onMounted } from 'vue';-->
<!--import { useRouter, useRoute } from 'vue-router';-->
<!--import { useRemoteData } from '@/composables/useRemoteData.js';-->

<!--const router = useRouter();-->
<!--const route = useRoute();-->

<!--const aimodotisIdRef = ref(null);-->
<!--const urlRef = computed(() => {-->
<!--    return 'http://localhost:9090/aimodotis/' + studentIdRef.value + '/bloodtest';-->
<!--});-->
<!--const authRef = ref(true);-->
<!--const { data, loading, performRequest } = useRemoteData(urlRef, authRef);-->

<!--onMounted(() => {-->
<!--    studentIdRef.value = route.params.id;-->
<!--    performRequest();-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--    <div>-->
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                &lt;!&ndash; <th>Course ID</th> &ndash;&gt;-->
<!--                <th>Course Title</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody v-if="loading">-->
<!--            <tr>-->
<!--                <td colspan="1">Loading...</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--            <tbody v-if="data">-->
<!--            <tr v-for="course in data._embedded.courses">-->
<!--                &lt;!&ndash; <th>{{ course.id }}</th> &ndash;&gt;-->
<!--                <td>{{ course.title }}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
<!--    </div>-->
<!--</template>-->