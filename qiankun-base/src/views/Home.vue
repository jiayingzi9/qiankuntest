<!--
 * @Author: your name
 * @Date: 2021-08-25 16:35:58
 * @LastEditTime: 2021-08-25 17:23:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-base\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    默认的base
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
