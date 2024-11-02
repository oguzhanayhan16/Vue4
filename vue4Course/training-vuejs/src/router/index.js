import { createRouter, createWebHashHistory  } from 'vue-router';
import Home from '@/views/Home.vue';
import sourceData from '@/data.json'
import LeftSideBar from '@/components/LeftSideBar.vue';


const routes = [
    { path: '/', name: 'Home', component: Home ,alias:"/home"},
    {
        path:'/protected',
        name:'protected',
        components:{
          default:()=>import('@/views/Protected.vue'),
          LeftSideBar:()=>import('@/components/LeftSideBar.vue'),
        },
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/login',
        name:'login',
        component:()=> import('@/views/login.vue'),
    },
    {
        path:'/invoices',
        name:'invoices',
     
        components:{
          default:()=>import('@/views/Invoices.vue'),
          LeftSideBar:()=>import('@/components/LeftSideBar.vue'),
        },
        meta:{
            requiresAuth:true
        }
    },
    {
      path: "/example/:id(\\d+)?",
      component:()=> import('@/views/login.vue'),

    },
    {
        path: '/destination/:id/:slug', 
        name: 'destination.show', 
        component: ()=>import('@/views/DestinationShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)}),
        beforeEnter(to, from){
          const exists = sourceData.destinations.find(
            destination => destination.id === parseInt(to.params.id)
          )
          if(!exists) return {
            name: 'NotFound',
            // allows keeping the URL while rendering a different page
            params: { pathMatch: to.path.split('/').slice(1) },
            query: to.query,
            hash: to.hash,
          }
        },
        children:[
          {
            path: ':experienceSlug',
            name: 'experience.show',
            component: () => import('@/views/ExperienceShow.vue'),
            props: route=> ({...route.params, id: parseInt(route.params.id)})
          }
        ]
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=> import('@/views/NotFound.vue')
      }
    
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes,
    scrollBehavior(to,from,savedPosition){
        return savedPosition || {top:0}
    }
});

router.beforeEach((to,from)=>{
    if(to.meta.requiresAuth && !window.user){
        return {name: 'login',query:{redirect : to.fullPath}}
    }
})

export default router;
