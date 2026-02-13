<template>
  <div>
    <p>
      <button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button>
    </p>

    <h1>Get All Users</h1>

    <div>จำนวนผู้ใช้งาน {{ users.length }}</div>

    <div v-if="users.length > 0">
      <div
        v-for="user in users"
        :key="user.id"
        style="margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 10px;"
      >
        <div><b>id:</b> {{ user.id }}</div>
        <div><b>ชื่อ-นามสกุล:</b> {{ user.name }} {{ user.lastname }}</div>
        <div><b>email:</b> {{ user.email }}</div>

        <p>
          <button v-on:click="navigateTo('/user/' + user.id)">
            ดูข้อมูลผู้ใช้
          </button>

          <button v-on:click="navigateTo('/user/edit/' + user.id)">
            แก้ไขข้อมูล
          </button>

          <button v-on:click="deleteUser(user)">
            ลบข้อมูล
          </button>
        </p>
      </div>
    </div>

    <div v-else>
      <br>
      ยังไม่มีข้อมูลผู้ใช้งาน
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data () {
    return {
      users: []
    }
  },

  async created () {
    try {
      this.users = (await UsersService.index()).data
    } catch (err) {
      console.log(err)
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteUser (user) {
      let result = confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?')
      if (result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async refreshData () {
      try {
        this.users = (await UsersService.index()).data
      } catch (err) {
        console.log(err)
      }
    },

    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 5px; /* เว้นระยะห่างระหว่างปุ่มนิดหน่อย */
  cursor: pointer;
}
</style>