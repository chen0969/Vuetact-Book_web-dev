<script setup>
import { useRoute, useRouter } from 'vue-router';
import { contactDB } from '../data';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const userId = parseInt(route.params.id);

// 找到資料
const userIndex = contactDB.findIndex((u) => u.id === userId);
const orgUser = contactDB[userIndex];

// 建立可編輯的 ref
const firstName = ref(orgUser.firstName);
const lastName = ref(orgUser.lastName);
const phone = ref(orgUser.phone);
const email = ref(orgUser.email);
const address = ref(orgUser.address);

// 儲存按鈕邏輯
const saveUser = () => {
  contactDB[userIndex] = {
    ...contactDB[userIndex],
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    address: address.value,
  };

  console.log('已更新 contactDB：', contactDB[userIndex]);

  router.push('/contacts');
};


const deleteUser = () => {
  if (userIndex !== -1) {
    contactDB.splice(userIndex, 1);
    console.log('Deleted user:', orgUser);

    router.push('/contacts');
  }
};
</script>



<template>

  <form class="container p-5" @submit.prevent="saveUser">
    <div class="row justify-content-center">
      <h2 class="col-12 text-center">Editing ID {{ userId }}</h2>
      <input type="text" class="col-md-3" v-model="firstName">
      <input type="text" class="col-md-3" v-model="lastName">
      <hr>
    </div>
    <div class="row justify-content-center">
      <label class="col-3 text-center">Phone</label>
      <input type="text" class="col-md-3" v-model="phone">
      <hr>
      <label class="col-3 text-center">Email</label>
      <input type="text" class="col-md-3" v-model="email">
      <hr>
      <label class="col-3 text-center">Address</label>
      <input type="text" class="col-md-3" v-model="address">
      <hr>
    </div>
    <div class="row mt-4 justify-content-center">
      <div class="col-md-2 text-center">
        <button class="btn btn-success" @click="saveUser">Save edition</button>
      </div>
      <div class="col-md-2 text-center">
        <button class="btn btn-success" @click="deleteUser">Delete User</button>
      </div>
    </div>
  </form>

  <UserForm :modelValue="userId" mode="edit" @save="saveUser" @delete="deleteUser" />

</template>


<style scoped lang="scss"></style>