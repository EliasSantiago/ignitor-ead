const mutations = {
  ADD_MY_COURSES(state, courses) {
    state.items = courses
  },

  SET_COURSE_SELECTED(state, course) {
    state.courseSelected = course
  },

  SET_LESSON_PLAYER(state, lesson) {
    state.lessonPlayer = lesson
  },

  REMOVE_LESSON_PLAYER(state) {
    state.lessonPlayer = {
      id: null,
      name: null,
      description: null,
      video: null,
      views: [],
    }
  },

  ADD_NEW_VIEW_LESSON(state) {
    const modules = state.courseSelected.modules
    modules.forEach((module, indexModule) => {
      module.lessons.forEach((lesson, indexLesson) => {
        if (lesson.id === state.lessonPlayer.id) {
          modules[indexModule].lessons[indexLesson].views.push({})
        }
      })
    });
  }
}

export default mutations