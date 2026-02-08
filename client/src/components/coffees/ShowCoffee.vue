<template>
  <div>
    <h1>Show Coffee</h1>

    <div v-if="coffee">
      <p>id: {{ coffee.id }}</p>
      <p>ชื่อเมนู: {{ coffee.name }}</p>
      <p>ราคา: {{ coffee.price }}</p>
      <p>ประเภท: {{ coffee.type }}</p>
      <p>รายละเอียด: {{ coffee.description }}</p>

      <p>
        <button @click="navigateTo('/coffees')">กลับ</button>
      </p>

    </div>

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: null
    }
  },

  async created () {
    try {
      const coffeeId = this.$route.params.coffeeId
      this.coffee = (await CoffeesService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  },

  // ⭐ เพิ่ม methods สำหรับเปลี่ยนหน้า
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>