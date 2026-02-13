<template>
  <div>
    <h1>Get All Coffees</h1>

    <div v-if="isLoggedIn">
      <button @click="navigateTo('/coffee/create')">สร้างเมนูกาแฟ</button>
      <hr>
    </div>

    <div>จำนวนเมนู {{ coffees.length }}</div>

    <div v-if="coffees.length > 0">
      <div
        v-for="coffee in coffees"
        :key="coffee.id"
        style="margin-bottom: 15px;"
      >
        <div>id: {{ coffee.id }}</div>
        <div>ชื่อเมนู: {{ coffee.name }}</div>
        <div>ราคา: {{ coffee.price }}</div>
        <div>ประเภท: {{ coffee.type }}</div>
        <div>
          สถานะ:
          <span>
            {{ coffee.isAvailable === true ? 'จำหน่าย' : 'หมด' }}
          </span>
        </div>

        <p>
          <button @click="navigateTo('/coffee/' + coffee.id)">
            ดูรายละเอียด
          </button>

          <template v-if="isLoggedIn">
            <button @click="navigateTo('/coffee/edit/' + coffee.id)">
              แก้ไข
            </button>
            <button @click="deleteCoffee(coffee)">
              ลบเมนู
            </button>
          </template>
        </p>

        <hr />
      </div>
    </div>

    <div v-else>
      ยังไม่มีเมนูกาแฟ
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data () {
    return {
      coffees: []
    }
  },

  async created () {
    this.refreshData()
  },

  computed: {
    // ✅ ตรวจสอบสถานะ Login จาก Pinia
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteCoffee (coffee) {
      const result = confirm('คุณต้องการลบเมนูนี้ใช่หรือไม่?')
      if (result) {
        try {
          await CoffeesService.delete(coffee)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async refreshData () {
      try {
        this.coffees = (await CoffeesService.index()).data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 5px;
  cursor: pointer;
}
</style>