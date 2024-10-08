<script lang="ts" setup>
    import { PhPlus, PhPrinter, PhTrash } from '@phosphor-icons/vue';
    import { ref } from 'vue';
    import { useVueToPrint } from 'vue-to-print';
    import Dialog from './Dialog.vue';
    import AddDialogContent from './Dialogs/AddDialogContent.vue';
    import ColumnDialogContent from './Dialogs/ColumnDialogContent.vue';
    import RowDialogContent from './Dialogs/RowDialogContent.vue';
    import { content, ThaiRankingTranslation } from '@/data/content';
    import { dotCheck, dotIndex } from '@/lib/dotIndex';

    const showAddDialog = ref(false);
    const showColumnDialog = ref(false);
    const showRowsDialog = ref(false);
    const columnIndex = ref(0);

    const removeContent = (index: number) => {
        content.value.splice(index);
    };

    const printContent = ref();

    const { handlePrint: printData } = useVueToPrint({
        content: printContent,
        documentTitle: `Athlete Report ${new Date().toLocaleDateString('en-GB')}`,
    });
</script>

<template>
    <div class="flex flex-col justify-center items-center before:content-[''] after:content-[''] gap-2">
        <div class="flex gap-2 w-4/5">
            <button
                class="flex flex-1 justify-center items-center gap-2 border-white bg-zinc-800 hover:bg-zinc-600 p-2 rounded transition-all"
                @click="showAddDialog = true"
            >
                <PhPlus /> Add New
            </button>
            <button
                @click="printData"
                class="flex flex-1 justify-center items-center gap-2 border-white bg-zinc-800 hover:bg-zinc-600 p-2 rounded transition-all"
            >
                <PhPrinter /> Print
            </button>
        </div>
        <div class="screen:flex screen:justify-center screen:w-full" ref="printContent">
            <div
                class="relative flex justify-center bg-white rounded print:rounded-none w-4/5 print:w-[21cm] print:h-[29.7cm] overflow-hidden aspect-[21/29.7]"
                v-for="([data, metadata], index) in content"
            >
                <div
                    class="flex-1 gap-4 grid text-black"
                    :style="{
                        gridTemplateColumns: `repeat(${metadata.columns.length}, auto)`,
                        margin: `${metadata.margins.y}rem ${metadata.margins.x}rem`,
                    }"
                >
                    <p class="font-bold text-[2.5vw]" v-for="column in metadata.columns">
                        {{
                            dotCheck(ThaiRankingTranslation, column) ? dotIndex(ThaiRankingTranslation, column) : column
                        }}
                    </p>
                    <template v-for="(_, xindex) in data.data.slice(0, metadata.length)">
                        <p
                            v-for="column in metadata.columns"
                            class="text-[2.5vw] overflow-ellipsis"
                            :style="{ maxWidth: `${metadata.charLimit * 1.5}vw`, WebkitLineClamp: '1' }"
                        >
                            {{ column == 'Index' ? xindex + 1 : dotIndex(data.data[xindex], column) ?? '-' }}
                        </p>
                    </template>
                </div>
                <div class="print:hidden">
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
                    <button
                        class="right-4 bottom-4 absolute bg-zinc-600 hover:bg-zinc-500 p-2 rounded"
                        @click="
                            () => {
                                showRowsDialog = true;
                                columnIndex = index;
                            }
                        "
                    >
                        <PhPlus />
                    </button>
                </div>
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
        <KeepAlive>
            <Dialog v-model="showRowsDialog">
                <RowDialogContent :page="columnIndex" />
            </Dialog>
        </KeepAlive>
    </div>
</template>
