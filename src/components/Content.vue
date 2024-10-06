<script lang="ts" setup>
    import { PhPlus } from '@phosphor-icons/vue';
    import { ref } from 'vue';
    import Dialog from './Dialog.vue';
    import AddDialogContent from './Dialogs/AddDialogContent.vue';
    import { content } from '@/data/content';

    const showAddDialog = ref(false);
</script>

<template>
    <div class="flex flex-col justify-center items-center before:content-[''] after:content-[''] gap-2">
        <div v-for="pages in content">
            {{ pages }}
        </div>
        <button
            class="flex justify-center items-center gap-2 border-white bg-zinc-800 hover:bg-zinc-600 p-2 rounded w-4/5 transition-all"
            @click="showAddDialog = true"
        >
            <PhPlus /> Add New
        </button>
        <Dialog v-model="showAddDialog">
            <AddDialogContent />
        </Dialog>
    </div>
</template>
