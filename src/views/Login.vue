
<template>
  <div class="login">
    <h2>登录</h2>
    <input v-model="email" placeholder="邮箱" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (!error) {
    router.push('/app/home')
  } else {
    alert(error.message)
  }
}
</script>
