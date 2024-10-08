<script lang="ts" setup>
    import { content } from '@/data/content';

    defineProps<{
        page: number;
    }>();
</script>

<template>
    <div class="p-4">
        <h1 class="m-2 font-bold text-lg">Athlete Count</h1>
        <input
            class="bg-zinc-900 p-4 border-none rounded w-24 outline-none"
            type="number"
            v-model.number="content[page][1].length"
        />
    </div>
</template>
