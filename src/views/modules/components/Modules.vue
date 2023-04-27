<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div
        :class="['modules', module.id == showModule ? 'active' : '']"
        @click.prevent="toggleModule(module.id)"
        class="modules"
        v-for="module in modules"
        :key="module.id"
      >
        <div class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes" v-show="module.id == showModule">
          <li
            @click.prevent="addLessonInPlayer(lesson)"
            v-for="lesson in module.lessons"
            :key="lesson.id"
            :class="{ 'active': lessonInPlayer.id === lesson.id }"
          >
            <span v-if="lesson.views.length > 0" class="check active fas fa-check"></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Modules",
  setup() {
    const store = useStore();
    const showModule = ref("0");
    const lessonInPlayer = computed(() => store.state.courses.lessonPlayer);
    const modules = computed(() => store.state.courses.courseSelected.modules);
    const toggleModule = (moduleId) => showModule.value = moduleId;
    const addLessonInPlayer = (lesson) => {
      store.commit("SET_LESSON_PLAYER", lesson);
    };
    return {
      modules,
      showModule,
      toggleModule,
      addLessonInPlayer,
      lessonInPlayer,
    };
  },
};
</script>