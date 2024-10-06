<script lang="ts" setup>
    import { PhXCircle } from '@phosphor-icons/vue';

    const modal = defineModel<boolean>({ required: true });
</script>

<template>
    <div
        v-if="modal"
        @click.self="modal = false"
        class="top-0 left-0 z-[9999999] fixed flex justify-center items-center bg-black/60 w-screen h-screen"
    >
        <div class="relative bg-zinc-800 shadow-md rounded-lg min-w-96 transition-all ease-pop">
            <PhXCircle
                class="float-right m-4 text-red-400 hover:text-red-700 animate-infinite hover:animate-wiggle-more animate-duration-75 ease-pop"
                :size="20"
                @click="modal = false"
            />
            <slot />
        </div>
    </div>
</template>
