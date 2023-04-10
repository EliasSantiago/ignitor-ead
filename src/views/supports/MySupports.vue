<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Dúvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li>Todos</li>
                <li>Aguardando Minha Resposta</li>
                <li>Aguardando Professor</li>
                <li>Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="comments">
              <div class="header">
                <span class="title">Dúvidas</span>
                <button class="btn primary">
                  <i class="fas fa-plus"></i>
                  Enviar nova dúvida
                </button>
              </div>

              <supports />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Supports from "@/components/Supports.vue";
export default {
  name: "MySupports",
  components: {
    Supports,
  },
};
</script>
