<script setup>
import { useRoute, useRouter } from 'vue-router';
import { contactDB } from '../data';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const userId = parseInt(route.params.id);

// 找到資料
const userIndex = contactDB.findIndex((u) => u.id === userId);

// 建立可編輯的 ref
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');
const address = ref('');

const addUser = () => {
  const newUser = {
    id: contactDB.length + 1,
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    address: address.value,
  };

  contactDB.push(newUser);

  router.push('/');
};
</script>



<template>

    <form class="container p-5" @submit.prevent="addUser">
        <div class="row justify-content-center">
            <h2 class="col-12 text-center">New User</h2>
            <input type="text" class="col-md-3" v-model="firstName" placeholder="first name">
            <input type="text" class="col-md-3" v-model="lastName" placeholder="last name">
            <hr>
        </div>
        <div class="row justify-content-center">
            <label class="col-3 text-center">Phone</label>
            <input type="text" class="col-md-3" v-model="phone" placeholder="phone number">
            <hr>
            <label class="col-3 text-center">Email</label>
            <input type="text" class="col-md-3" v-model="email" placeholder="email">
            <hr>
            <label class="col-3 text-center">Address</label>
            <input type="text" class="col-md-3" v-model="address" placeholder="address">
            <hr>
        </div>
        <div class="row mt-4 justify-content-center">
      <div class="col-md-2">
        <button class="btn btn-success" @click="addUser">Confirm Add</button>
      </div>
    </div>
    </form>

</template>


<style scoped lang="scss"></style>