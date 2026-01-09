import { createRouter, createWebHistory } from 'vue-router'

// --- 1. ส่วนของ Users (คอมเมนต์ไว้ก่อน ถ้ายังไม่มีไฟล์) ---
// import UserIndex from '../components/Users/Index.vue'
// import UserCreate from '../components/Users/CreateUser.vue'
// import UserEdit from '../components/Users/EditUser.vue'
// import UserShow from '../components/Users/ShowUser.vue'

// --- 2. ส่วนของ Menus (ที่เราเพิ่งสร้าง) ---
import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- เส้นทางของ User (คอมเมนต์ไว้ก่อน) ---
    // {
    //   path: '/users',
    //   name: 'users',
    //   component: UserIndex
    // },
    // {
    //   path: '/user/create',
    //   name: 'user-create',
    //   component: UserCreate
    // },
    // {
    //   path: '/user/edit/:userId',
    //   name: 'user-edit',
    //   component: UserEdit
    // },
    // {
    //   path: '/user/:userId',
    //   name: 'user-show',
    //   component: UserShow
    // },

    // --- เส้นทางของ Menu (ใช้แค่นี้สำหรับ Lab นี้) ---
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/menu/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/menu/edit/:menuId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menu/:menuId',
      name: 'menu-show',
      component: MenuShow
    }
  ]
})

export default router