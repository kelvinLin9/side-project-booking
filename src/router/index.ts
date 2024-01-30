import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/frontend/HomeView.vue'),
        meta: { title: '首頁' }
      },
      {
        path: 'room',
        name: 'room',
        component: () => import('../views/frontend/RoomsView.vue'),
        meta: { title: '旅宿房型' }
      },
      {
        path: 'room/:id',
        // path: 'room-detail',
        name: 'room-detail',
        component: () => import('../views/frontend/RoomDetail.vue'),
        meta: { title: '房型詳細資訊' }
      },
      {
        path: 'booking/:id',
        // path: 'booking',
        name: 'booking',
        component: () => import('../views/frontend/BookingView.vue'),
        meta: { title: '房型預約' }
      },
      {
        path: 'booking-complete/:id',
        // path: 'booking-complete',
        name: 'booking-complete',
        component: () => import('../views/frontend/BookingComplete.vue'),
        meta: { title: '預約成功' }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/frontend/PersonView.vue'),
        meta: { title: '個人資料' }
      },
      {
        path: 'user-order',
        name: 'user-order',
        component: () => import('../views/frontend/UserOrders.vue'),
        meta: { title: '訂單列表' }
      },
      {
        path: 'guideline',
        name: 'guideline',
        component: () => import('../views/frontend/GuidelineView.vue'),
        meta: { title: 'Guideline' }
      },
    ],
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue'),
    meta: { title: '註冊頁面' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { title: '登入頁面' }
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'rooms',
        name: 'rooms',
        component: () => import('../views/admin/RoomAdmin.vue'),
        meta: { title: '房型管理' }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/admin/OrderAdmin.vue'),
        meta: { title: '消息管理' }
      },
      {
        path: 'culinary',
        name: 'culinary',
        component: () => import('../views/admin/CulinaryAdmin.vue'),
        meta: { title: '菜單管理' }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/admin/OrderAdmin.vue'),
        meta: { title: '訂單管理' }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
