import { createMemoryHistory, createRouter } from "vue-router";

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
import PlayScreen from "../views/PlayScreen.vue";
import IntroScreen from "../views/IntroScreen.vue";

const routes = [
  { path: "/", component: IntroScreen },
  { path: "/play", component: PlayScreen },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
