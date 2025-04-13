<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="container mt-5">
        <nav class="row">
            <ul class="col-12 d-flex flex-row justify-content-evenly">
                <li>
                    <RouterLink class="o-link" to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink class="o-link" to="/contacts">Contacts</RouterLink>
                </li>
                <li>
                    <RouterLink class="o-link" to="/add">Add User</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss"></style>