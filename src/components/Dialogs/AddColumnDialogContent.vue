<script lang="ts" setup>
    import { content, ThaiRankingTranslation } from '@/data/content';
    import { dotAll, dotIndex } from '@/lib/dotIndex';
    import { PhPlus } from '@phosphor-icons/vue';

    defineProps<{
        page: number;
    }>();
</script>

<template>
    <div class="flex flex-col gap-2 p-4 w-96 max-h-96 overflow-y-scroll">
        <div class="flex justify-between bg-zinc-700 rounded" v-for="prop in dotAll(ThaiRankingTranslation)">
            <div>
                <p class="m-0 px-2">{{ dotIndex(ThaiRankingTranslation, prop) }}</p>
                <p class="m-0 px-2 text-sm text-zinc-400">{{ prop }}</p>
            </div>
            <button @click="content[page][1].columns.push(prop)" class="bg-zinc-700 hover:bg-zinc-600 p-2 rounded">
                <PhPlus />
            </button>
        </div>
    </div>
</template>
