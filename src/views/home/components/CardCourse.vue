<template>
  <li>
    <span :class="['card', 'bg-' + laravel]">
      <span class="icon">
        <!-- <img :src="[course.image != '' ? course.image : require('@/assets/images/icons/default.png'),]" :alt="title" /> -->
        <img :src="require('@/assets/images/icons/default.png')" />
      </span>
      <span class="title">{{ course.name }}</span>
      <span class="action">
        <!-- <a href="trainings.html" :class="['btn', bgName]">Acessar</a> -->
        <!-- <router-link :to="{name: 'campus.modules'}" :class="['btn', bgName]">
          Acessar
        </router-link> -->
        <a href="#" @click.prevent="setCourse" :class="['btn', bgName]">Acessar</a>
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script>
import router from "@/router";
import { useStore } from "vuex";
export default {
  name: 'CardCourse',
  props: ['course', 'bgName'],
  setup(props) {
    const store = useStore();
    const setCourse = () => {
      store.commit("SET_COURSE_SELECTED", props.course);
      router.push({ name: 'campus.modules' });
    }

    return {
      setCourse,
    }
  },
};
</script>