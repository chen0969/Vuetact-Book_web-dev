<script setup>
import { useRoute} from 'vue-router';
import { contactDB } from '../data';
import { RouterLink } from 'vue-router';

const route = useRoute();
const userId = parseInt(route.params.id);
const user = contactDB.find((user) => user.id === userId);



</script>


<template>

    <div class="container p-5 g-5">
        <div class="row justify-content-center">
            <h2 class="col-12 text-center">The id {{ user.id }}</h2>
            <h1 class="col-12 text-center">{{ user.firstName }} {{ user.lastName }}</h1>
            <hr>
        </div>
        <div class="row justify-content-center">
            <h4 class="col-12 text-center">{{ user.phone }}</h4>
            <hr>
            <h4 class="col-12 text-center">{{ user.email }}</h4>
            <hr>
            <h4 class="col-12 text-center">{{ user.address }}</h4>
        </div>
        <div class="row">
            <RouterLink class="col-12 text-center" :to="`/edit/${user.id}`">
                <h3 class="text-center btn btn-success">Edit {{ user.firstName }} {{ user.lastName }}</h3>
            </RouterLink>
        </div>
    </div>

</template>


<style scoped lang="scss"></style>