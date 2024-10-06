<script lang="ts" setup>
    //@ts-ignore
    import { ref } from 'vue';
    import { content, ThaiRankingTranslation } from '@/data/content';
    import { VueDraggableNext as Draggable } from 'vue-draggable-next';
    import { dotCheck, dotIndex } from '@/lib/dotIndex';
    import { PhPlus, PhTrash } from '@phosphor-icons/vue';
    import Dialog from '../Dialog.vue';
    import AddColumnDialogContent from './AddColumnDialogContent.vue';

    const showAddColumn = ref(false);

    defineProps<{
        page: number;
    }>();
</script>

<template>
    <div class="m-4">
        <h1 class="font-bold text-lg">Column Order</h1>
        <Draggable class="flex flex-col gap-2 m-2 transition-all ease-pop" :list="content[page][1].columns">
            <div
                class="flex justify-between items-center bg-zinc-700 px-4 p-2 rounded"
                v-for="(item, index) in content[page][1].columns"
            >
                <p>{{ dotCheck(ThaiRankingTranslation, item) ? dotIndex(ThaiRankingTranslation, item) : item }}</p>
                <button
                    @click="content[page][1].columns.splice(index, 1)"
                    class="bg-zinc-600 hover:bg-zinc-500 p-2 rounded"
                >
                    <PhTrash
                        class="text-red-500 animate-infinite hover:animate-wiggle-more animate-duration-200 ease-pop"
                    />
                </button>
            </div>
        </Draggable>
        <button @click="showAddColumn = true" class="bg-zinc-700 hover:bg-zinc-600 p-2 rounded w-full">
            <PhPlus class="inline" /> Add Column
        </button>
        <Dialog v-model="showAddColumn" :z="99999999">
            <AddColumnDialogContent />
        </Dialog>
    </div>
</template>
