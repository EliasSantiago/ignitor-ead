<template>
  <div>
    <transition name="fade">
      <ul id="mainMenu">
        <li>
          <router-link :to="{ name: 'campus.home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'campus.my.supports' }"
            >Minhas Dúvidas</router-link
          >
        </li>
        <li>
          <a href="" @click.prevent="logout">
            <span v-if="loadingStore">Saindo...</span>
            <span v-else>Sair</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import router from "@/router";
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
  name: "Menu",
  setup() {
    const store = useStore();
    const logout = () => {
      store.dispatch("logout").then(() => router.push({ name: "login" }));
    };
    const loadingStore = computed(() => store.state.loading);
    return {
      logout,
      loadingStore,
    };
  },
};
</script>