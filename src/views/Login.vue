<template>
  <div class="login">
    <app-header></app-header>
    <login-form></login-form>
    <app-mail-list></app-mail-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import AppMailList from '@/components/AppMailList.vue';
import AppFooter from '@/components/AppFooter.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    AppHeader,
    AppMailList,
    AppFooter,
    LoginForm,
  },
};
</script>
