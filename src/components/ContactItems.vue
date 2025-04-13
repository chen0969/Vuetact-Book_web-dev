<script setup>
import { contactDB } from '../data';
import { RouterLink } from 'vue-router';

const contacts = [...contactDB].sort((a, b) => 
  a.lastName.localeCompare(b.lastName)
);
</script>

<template>
    <div class="container p-5">
        <ul class="row">
            <li class="col-12 border-bottom border-gray p-2" v-for="user in contacts">
                <RouterLink class="o-link" :to="`/user/${user.id}`">
                    <h3 class="text-center">{{ user.lastName }}</h3>
                </RouterLink>
            </li>
        </ul>
    </div>

</template>

<style scoped lang="scss"></style>