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
              <p>Seja muito bem vindo!</p>
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
                  required
                  v-model="email"
                />
              </div>
              <button
                :class="['btn', 'primary', loading ? 'loading' : '']"
                type="submit"
                @click.prevent="forgotPassword"
              >
                <span v-if="loading">Carregando...</span>
                <span v-else>Recuperar Senha</span>
              </button>
            </form>
            <span>
              <p class="fontSmall">
                <router-link :to="{ name: 'login' }" class="link primary"
                  >Login</router-link
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
import { ref } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "ForgotPassword",
  setup() {
    const store = useStore();
    const email = ref("");
    const loading = ref(false);

    const forgotPassword = () => {
      loading.value = true;

      store
        .dispatch("forgotPassword", { email: email.value })
        .then(() => {
          notify({
            title: "Sucesso",
            text: "Enviamos um email para a recuperação de senha. Verifique sua caixa de entrada",
            type: "success",
            duration: 10000,
          });
        })
        .catch(() => {
          notify({
            title: "Erro",
            text: "Falha ao enviar email de recuperação de senha! Aguarde alguns minutos e tente novamente.",
            type: "error",
            duration: 10000,
          });
        })
        .finally(() => (loading.value = false));
    };

    return {
      email,
      loading,
      forgotPassword,
    };
  },
};
</script>