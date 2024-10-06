<script lang="ts" setup>
    import { PhPlus, PhTrash } from '@phosphor-icons/vue';
    import { ref } from 'vue';
    import Dialog from './Dialog.vue';
    import AddDialogContent from './Dialogs/AddDialogContent.vue';
    import ColumnDialogContent from './Dialogs/ColumnDialogContent.vue';
    import { content, ThaiRankingTranslation } from '@/data/content';
    import { dotCheck, dotIndex } from '@/lib/dotIndex';

    const showAddDialog = ref(false);
    const showColumnDialog = ref(false);
    const columnIndex = ref(0);

    const removeContent = (index: number) => {
        content.value.splice(index);
    };
</script>

<template>
    <div class="flex flex-col justify-center items-center before:content-[''] after:content-[''] gap-2">
        <button
            class="flex justify-center items-center gap-2 border-white bg-zinc-800 hover:bg-zinc-600 p-2 rounded w-4/5 transition-all"
            @click="showAddDialog = true"
        >
            <PhPlus /> Add New
        </button>
        <div
            class="relative flex justify-center bg-white rounded w-4/5 overflow-hidden aspect-[21/29.7]"
            v-for="([data, metadata], index) in content"
        >
            <div
                class="flex-1 gap-4 grid text-black"
                :style="{
                    gridTemplateColumns: `repeat(${metadata.columns.length}, auto)`,
                    margin: `${metadata.margins.y}rem ${metadata.margins.x}rem`,
                }"
            >
                <p class="font-bold text-[1.5vw]" v-for="column in metadata.columns">
                    {{ dotCheck(ThaiRankingTranslation, column) ? dotIndex(ThaiRankingTranslation, column) : column }}
                </p>
                <template v-for="(_, xindex) in data.data">
                    <p
                        v-for="column in metadata.columns"
                        class="text-[1.5vw] overflow-ellipsis"
                        :style="{ maxWidth: `${metadata.charLimit * 1.5}vw`, WebkitLineClamp: '1' }"
                    >
                        {{ column == 'Index' ? xindex + 1 : dotIndex(data.data[xindex], column) ?? '-' }}
                    </p>
                </template>
            </div>
            <div class="top-4 right-4 absolute flex gap-2">
                <button class="bg-zinc-600 hover:bg-zinc-500 p-2 rounded" @click="removeContent(index)">
                    <PhTrash
                        class="text-red-500 animate-delay-150 animate-infinite hover:animate-wiggle-more animate-duration-200"
                    />
                </button>
                <button
                    class="bg-zinc-600 hover:bg-zinc-500 p-2 rounded"
                    @click="
                        () => {
                            showColumnDialog = true;
                            columnIndex = index;
                        }
                    "
                >
                    <PhPlus />
                </button>
            </div>
        </div>
        <KeepAlive>
            <Dialog v-model="showAddDialog">
                <AddDialogContent />
            </Dialog>
        </KeepAlive>
        <KeepAlive>
            <Dialog v-model="showColumnDialog">
                <ColumnDialogContent :page="columnIndex" />
            </Dialog>
        </KeepAlive>
    </div>
</template>
