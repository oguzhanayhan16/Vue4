<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>login</h1>
            <label for ="username">username</label>
            <input v-model="username" name="username"type="text" class="input">
            <label for ="passwod">Password</label>
            <input v-model="passwod" name="passwod" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const route = useRoute();

        const login = ()=>{
            window.user=username.value
            const redirectPath = route.query.redirect || '/protected';
           router.push(redirectPath );
        }
        return { username, password, login };
    },
}
</script>


