<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="bg-zinc-950 w-screen h-screen text-white overflow-hidden ease-[cubic-bezier(.33,1.15,.49,1.44)]">
        <RouterView />
    </div>
</template>
