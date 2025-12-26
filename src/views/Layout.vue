
<template>
  <div class="layout">
    <aside class="menu">
      <ul>
        <li @click="$router.push('/app/home')">首页</li>
      </ul>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
.layout { display: flex; height: 100vh; }
.menu { width: 200px; background: #2c3e50; color: #fff; }
.content { flex: 1; padding: 20px; }
</style>
