<script lang="ts" setup>
    import { content, ThaiRankingTranslation } from '@/data/content';
    import { dotAll } from '@/lib/dotIndex';
</script>

<template>
    {{ dotAll(ThaiRankingTranslation) }}
</template>
