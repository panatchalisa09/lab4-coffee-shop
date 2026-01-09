<!-- src/components/Menus/ShowMenu.vue -->
<template>
  <div>
    <h1>Show Menu</h1>
    <p>รายละเอียดเมนู ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuId: null
    }
  },
  created() {
    // ดึงค่า ID จาก URL มาแสดง
    this.menuId = this.$route.params.menuId
  }
}
</script>

<style scoped>
</style>