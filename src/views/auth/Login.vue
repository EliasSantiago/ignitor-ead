<template>
  <section
    id="loginPage"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')',
    }"
  >
    <div class="loginContent">
      <div class="loginCard">
        <div
          class="decor"
          style="background-image: url('./assets/images/building.jpg')"
        >
          <div class="content">
            <span class="logo">
              <img :src="require('@/assets/images/logo.svg')" alt="Ignitor" />
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              <p>
                Os melhores e mais completos cursos de Laravel do Brasil, cursos
                com projetos reais. Do zero ao profissional.
              </p>
            </span>
            <span class="copyright fontSmall">
              Todos os Direitos reservados - <b>Especializati</b>
            </span>
          </div>
        </div>
        <div class="login">
          <div class="content">
            <span class="logo">
              <img :src="require('@/assets/images/logoDark.svg')" alt="" />
            </span>
            <span>
              <p>Seja muito bem vindo(a)!</p>
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              Acesse nossa plataforma e desfrute de cursos completos para sua
              especialização.
            </span>
            <form action="/dist/index.html" method="">
              <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
              <div class="groupForm">
                <i class="far fa-key"></i>
                <input
                  :type="typePassword"
                  name="password"
                  placeholder="Senha"
                  v-model="password"
                  required
                />
                <i class="far fa-eye buttom" @click="toggleShowPassword"></i>
              </div>
              <button
                :class="['btn', 'primary', loading || loadingStore ? 'disabled' : '']"
                type="submit"
                @click.prevent="login"
              >
                <span v-if="loading || loadingStore">Carregando...</span>
                <span v-else>Login</span>
              </button>
            </form>
            <span>
              <p class="fontSmall">
                Esqueceu sua senha?
                <router-link
                  :to="{ name: 'forgot.password' }"
                  class="link primary"
                  >Clique aqui</router-link
                >
              </p>
            </span>
          </div>
          <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const typePassword = ref('password');
    const toggleShowPassword = () => typePassword.value = typePassword.value === 'password' ? 'text' : 'password'
    const loadingStore = computed(() => store.state.loading);

    watch(
      () => store.state.users.loggedIn,
      (loggedIn) => {
        if (loggedIn) router.push({ name: "campus.home" });
      }
    )

    const login = () => {
      loading.value = true;
      store
        .dispatch("login", {
          email: email.value,
          password: password.value,
          device_name: "web",
        })
        .then(() => router.push({ name: "campus.home" }))
        .catch(error => {
          let msgError = "Erro ao logar";
          if (error.status === 422) msgError = 'Usuário ou senha inválidos'
          notify({
            title: "Erro ao logar",
            text: msgError,
            type: "error",
            duration: 10000,
          });
        })
        .finally(() => (loading.value = false));
    };

    return {
      email,
      password,
      loading,
      login,
      typePassword,
      toggleShowPassword,
      loadingStore,
    };
  },
};
</script>