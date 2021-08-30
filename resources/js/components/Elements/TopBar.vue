<template>
  <div class="bg-black p-4 text-white">
    <div class="container mx-auto flex items-center justify-between">
      <p class="text-base">Free shipping, 30-day return or refund guarantee.</p>
      <div class="inline-flex space-x-4 uppercase">
        <!-- <p class="cursor-pointer">Sign In</p>
        <p class="cursor-pointer">FAQS</p>
        <p class="cursor-pointer inline-flex">
          ENG
          <span>
            <fa class="w-3 ml-2 mt-1" :icon="['fa', 'angle-down']" />
          </span>
        </p> -->
        <drop-down/>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from './DropDown.vue'


  export default {
  components: { DropDown },
    
  }
</script>