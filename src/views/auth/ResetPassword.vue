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
                  type="password"
                  name="password"
                  placeholder="Senha"
                  v-model="password"
                  required
                />
                <i class="far fa-eye buttom"></i>
              </div>
              <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirme a Senha"
                  v-model="password_confirmation"
                  required
                />
              </div>
              <button
                :class="['btn', 'primary', loading ? 'loading' : '']"
                type="submit"
                @click.prevent="login"
              >
                <span v-if="loading">Carregando...</span>
                <span v-else>Alterar Senha</span>
              </button>
            </form>
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
import router from "@/router";
import ResetPasswordService from "@/services/password.reset.service";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "ResetPassword",
  props: {
    token: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const email = ref("");
    const password = ref("");
    const password_confirmation = ref("");
    const loading = ref(false);

    const login = () => {
      loading.value = true;

      ResetPasswordService.resetPassword({
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        token: props.token,
      })
        .then(() => {
          notify({
            title: "Sucesso",
            text: "Senha alterada com sucesso.",
            type: "success",
            duration: 10000,
          });
          router.push({ name: "login" });
        })
        .catch(() => {
          notify({
            title: "Erro",
            text: "Falha ao alterar a senha",
            type: "error",
            duration: 10000,
          });
        })
        .finally(() => (loading.value = false));
    };

    return {
      email,
      password,
      password_confirmation,
      loading,
      login,
    };
  },
};
</script>