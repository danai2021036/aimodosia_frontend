<script setup>
import { RouterLink } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';
const applicationStore = useApplicationStore();
</script>


<template>
    <header class="text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center py-2 px-3">
                <a
                    href="/"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span class="fs-5 fw-bolder text-white">API Client</span>
                </a>
                <ul class="nav nav-pills">
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'home' }" class="nav-link text-white"
                        >Home</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true" >
                        <div class="nav-item dropdown">
                            <a
                            class="nav-link dropdown-toggle text-white"
                            href="#"
                            id="aimodotisDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                                Aimodotes
                            </a>
                            <div class="dropdown-menu" aria-labelledby="aimodotisDropdown">
                                <div v-if="applicationStore.userRole.includes('admin') || applicationStore.userRole.includes('secretary')">
                                    <router-link :to="{name:'aimodotes'}" class="dropdown-item">
                                        Show Aimodotes
                                    </router-link>
                                </div>
                                <div v-if="!applicationStore.userRole.includes('admin') && !applicationStore.userRole.includes('secretary') && !applicationStore.userRole.includes('aimodotis')">
                                    <router-link :to="{name:'confirm-contact-info'}" class="dropdown-item">
                                        Confirm Contact Info
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <div class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-white"
                                href="#"
                                id="appformDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Application Form
                            </a>
                            <div class="dropdown-menu" aria-labelledby="appformDropdown">
                                <div v-if="!applicationStore.userRole.includes('admin') && !applicationStore.userRole.includes('secretary') && !applicationStore.userRole.includes('aimodotis')">
                                    <router-link :to="{name:'appform-new'}" class="dropdown-item">
                                        Become a blood donor!
                                    </router-link>
                                </div>
                                <div v-if="applicationStore.userRole.includes('secretary')">
                                    <router-link :to="{name:'appforms-pending'}" class="dropdown-item">
                                        Pending Applications
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <div class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-white"
                                href="#"
                                id="donationrequestDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Blood Donation
                            </a>
                            <div class="dropdown-menu" aria-labelledby="donationrequestDropdown">
<!--                                <router-link :to="{name:'donationrequests'}" class="dropdown-item">-->
<!--                                    New Donation Request-->
<!--                                </router-link>-->
<!--                                <router-link :to="{name:'donationrequests'}" class="dropdown-item">-->
<!--                                    Availabe Donations-->
<!--                                </router-link>-->
                            </div>
                        </div>
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true && applicationStore.userRole.includes('admin')">
                        <div class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle text-white"
                                href="#"
                                id="adminDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Admin
                            </a>
                            <div class="dropdown-menu" aria-labelledby="adminDropdown">
                                <router-link :to="{name:'admin-users'}" class="dropdown-item">
                                    Show Users
                                </router-link>
                                <router-link :to="{name:'admin-newuser'}" class="dropdown-item">
                                    New User
                                </router-link>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'profile' }" class="nav-link text-white"
                        >Profile
                            <span style="font-size: 10px"
                            >({{ applicationStore.userData?.username }})</span
                            ></router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === false">
                        <router-link :to="{ name: 'login' }" class="nav-link text-white"
                        >Login</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="applicationStore.isAuthenticated === true">
                        <router-link :to="{ name: 'logout' }" class="nav-link text-white"
                        >Logout</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>