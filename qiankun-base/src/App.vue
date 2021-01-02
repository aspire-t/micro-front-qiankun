<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
      <el-menu-item index="/static">静态页面</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
    <div id="frame"></div>
  </div>
</template>
