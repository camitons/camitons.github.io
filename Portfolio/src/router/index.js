import Vue from 'vue';
import VueRouter from 'vue-router';
import BodyHome from '../composants/Bodys/BodyHome.vue';
import BodyBonChance from '../composants/Bodys/BodyBonChance.vue';
import BodyCompetence from '../composants/Bodys/BodyCompetences.vue';
import BodyDessin from '../composants/Bodys/BodyDessin.vue';
import BodyQuiJeSuis from '../composants/Bodys/BodyQuiJeSuis.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/BodyHome', component: BodyHome },
    { path: '/BodyBonChance', component: BodyBonChance },
    { path: '/BodyCompetences', component: BodyCompetence },
    { path: '/BodyDessin', component: BodyDessin },
    { path: '/BodyQuiJeSuis', component: BodyQuiJeSuis }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
