<!-- src/components/Menus/Index.vue -->
<template>
  <div>
    <h1>Get All Menus</h1>
    <p>หน้านี้สำหรับแสดงรายการเมนูกาแฟทั้งหมด</p>
    <!-- ปุ่มสำหรับกดไปหน้าสร้างเมนู (เสริมจากบทเรียนหัวข้อ 7.8) -->
    <button @click="navigateTo('/menu/create')">สร้างเมนูใหม่</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>