<template>
    <div class="relative inline-block text-left" @keydown.esc="hide" v-on-clickaway="hide">
        <div class="inline-flex cursor-pointer" @click="showDropDown=!showDropDown">
            <button type="button"
                    class="flex items-center text-sm text-gray-500 dark:text-gray-300
                    hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300
                    transition duration-150 ease-in-out"
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                <slot name="trigger"></slot>
            </button>
            <span>
                <fa class="w-3 ml-2 mt-1" :icon="['fa', 'angle-down']" />
            </span>
        </div>

        <div v-show="showDropDown" class="origin-top-right absolute right-0 w-auto rounded-md shadow-lg bg-white dark:bg-coolGray-600 dark:text-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="1">
            <div class="py-1" role="none">
                <slot name="menu"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    name: 'DropDown',
    mixins: [ clickaway ],

    data(){
        return{
            showDropDown:false
        }
    },
    methods: {
        hide() {
            this.showDropDown = false
        }
    }
}
</script>