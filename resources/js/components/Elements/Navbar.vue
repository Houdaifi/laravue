<template>
    <div class="bg-white px-6">
      <nav class="container mx-auto flex justify-between items-center">

        <h1 style="font-family: 'Fuggles', cursive;" class="text-7xl font-bold">Vz</h1>
        
        <div class="space-x-12 text-xl hidden lg:flex">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>

        <div class="space-x-6 hidden lg:flex">
          <a href=""><fa class="w-5" :icon="['fa', 'search']" /></a>
          <a href=""><fa class="w-5" :icon="['fa', 'heart']" /></a>
          <a href=""><fa class="w-5" :icon="['fa', 'shopping-cart']" /></a>
        </div>

        <div class="block lg:hidden">
          <button type="button"><fa class="w-6" :icon="['fa', 'bars']" /></button>
        </div>
      
      </nav>
    </div>
</template>

<script>

export default {}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
</style>