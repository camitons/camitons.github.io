import Vue from 'vue';
import VueRouter from 'vue-router';
import BodyHome from '../composants/Bodys/BodyHome.vue';
import BodyContactezMoi from '../composants/Bodys/BodyContactezMoi.vue';
import BodyCompetence from '../composants/Bodys/BodyCompetences.vue';
import BodyDessin from '../composants/Bodys/BodyCompetences.vue';
import BodyQuiJeSuis from '../composants/Bodys/BodyQuiJeSuis.vue';
import BodyIUT from "@/composants/Bodys/BodyIUT.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/BodyHome', component: BodyHome },
    { path: '/BodyContactezMoi', component: BodyContactezMoi },
    { path: '/BodyIUT', component: BodyIUT },
    { path: '/BodyCompetences', component: BodyCompetence },
    { path: '/BodyDessin', component: BodyDessin },
    { path: '/BodyQuiJeSuis', component: BodyQuiJeSuis }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
