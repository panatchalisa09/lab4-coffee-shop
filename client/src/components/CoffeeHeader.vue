<template>
  <div class="coffee-navbar">
    <ul class="nav">
      <li>
        <router-link :to="{ name: 'coffees' }">
          Menu
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'users' }">
          Users
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'orders' }">
          Order
        </router-link>
      </li>

      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">
          Login
        </router-link>
      </li>

      <li v-if="isLoggedIn">
        <a href="#" @click.prevent="logout">
          Logout
        </a>
      </li>
    </ul>

    <div class="clearfix"></div>
  </div>
</template>

<script>
import { useAuthenStore } from '@/stores/authen'

export default {
  name: 'CoffeeHeader',
  computed: {
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },
  methods: {
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.coffee-navbar {
  background-color: #ff6e06; /* น้ำตาลกาแฟ */
  width: 100%;
  padding: 10px 0;
}

.coffee-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  float: left;
}

.coffee-navbar .nav li {
  float: left;
}

.coffee-navbar .nav li a {
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: block; /* เพิ่มเพื่อให้คลิกง่ายขึ้น */
}

.coffee-navbar .nav li a:hover {
  background-color: #ff9737;
}

.coffee-navbar .nav li a.router-link-active {
  background-color: #ff9a6b;
}

.clearfix {
  clear: left;
}
</style>