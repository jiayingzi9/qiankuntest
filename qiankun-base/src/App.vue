<!--
 * @Author: your name
 * @Date: 2021-08-25 16:35:58
 * @LastEditTime: 2021-08-25 17:34:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-base\src\App.vue
-->
<template>
  <div >
    <!-- 基座可以放自己的路由也可以引用其他子应用 -->
      <el-menu :router="true" model="horizontal ">
          <el-menu-item index="/">Home</el-menu-item> |
          <el-menu-item index="/vue">vue应用</el-menu-item>
          <el-menu-item index="/react">react应用</el-menu-item>
      </el-menu>
        <router-view/>
        <div id="vue"></div>
        <div id="react"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.el-menu-item-exact-active {
  color: #42b983;
}
</style>
