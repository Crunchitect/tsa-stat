<script lang="ts" setup>
    import { ref } from 'vue';
    import { PhGridNine, PhMedal, PhPersonSimpleSwim, PhCircleNotch, PhCheck } from '@phosphor-icons/vue';
    import { swimmingDetails, distances, poolLength, genders, nation } from '@/data/ranking';
    import { fetchRankingJSON } from '@/lib/getData';
    import { content } from '@/data/content';

    const addSelected = ref<string>('ranking');
    const ranking = ref<{
        SwimmingTypeDetailId: number;
        GenderId: number;
        DistId: number;
        AgeMin: number;
        AgeMax: number;
        PoolLengthId: number;
        NationId: number;
    }>({
        SwimmingTypeDetailId: 5,
        GenderId: 2,
        DistId: 3,
        AgeMin: 12,
        AgeMax: 13,
        PoolLengthId: 0,
        NationId: 0,
    });

    enum Status {
        Preload,
        Loading,
        Done,
    }

    const buttonStatus = ref<Status>(Status.Preload);

    const addRankingPage = async () => {
        buttonStatus.value = Status.Loading;
        const data = await fetchRankingJSON(ranking.value);
        buttonStatus.value = Status.Done;
        setTimeout(() => (buttonStatus.value = Status.Preload), 2000);
        //@ts-trust-me-bro
        content.value.push([
            data,
            {
                columns: ['Index', 'FullName', 'Time', 'Competition.Name'],
                length: 10,
                truncate: true,
                charLimit: 30,
                margins: { x: 3, y: 5 },
            },
        ]);
    };
</script>

<template>
    <div class="p-2">
        <div class="flex justify-center items-center gap-4 mx-4">
            <p
                @click="addSelected = 'ranking'"
                :class="
                    'select-none hover:scale-110 transition-all ease-pop p-2 border-b-4' +
                    (addSelected == 'ranking' && ' border-blue-900 rounded font-bold')
                "
            >
                <PhMedal class="inline" :size="30" :weight="addSelected == 'ranking' ? 'fill' : 'regular'" /> Ranking
            </p>
            <p
                @click="addSelected = 'athlete'"
                :class="
                    'select-none hover:scale-110 transition-all ease-pop p-2 border-b-4' +
                    (addSelected == 'athlete' && ' border-blue-900 rounded font-bold')
                "
            >
                <PhPersonSimpleSwim class="inline" :size="30" :weight="addSelected == 'athlete' ? 'fill' : 'regular'" />
                Athlete
            </p>
        </div>

        <div v-if="addSelected == 'ranking'">
            <div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Stroke</p>
                        <select class="bg-zinc-800 p-4 rounded outline-none" v-model="ranking.SwimmingTypeDetailId">
                            <option
                                class="bg-zinc-800 hover:bg-zinc-600 border-none rounded outline-none"
                                v-for="(index, name) in swimmingDetails"
                                :value="index"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Distance</p>
                        <select class="bg-zinc-800 p-4 rounded outline-none" v-model="ranking.DistId">
                            <option
                                class="bg-zinc-800 hover:bg-zinc-600 border-none rounded outline-none"
                                v-for="(index, name) in distances"
                                :value="index"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Pool Length</p>
                        <select class="bg-zinc-800 p-4 rounded outline-none" v-model="ranking.PoolLengthId">
                            <option
                                class="bg-zinc-800 hover:bg-zinc-600 border-none rounded outline-none"
                                v-for="(index, name) in poolLength"
                                :value="index"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Gender</p>
                        <select class="bg-zinc-800 p-4 rounded outline-none" v-model="ranking.GenderId">
                            <option
                                class="bg-zinc-800 hover:bg-zinc-600 border-none rounded outline-none"
                                v-for="(index, name) in genders"
                                :value="index"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Nation</p>
                        <select class="bg-zinc-800 p-4 rounded outline-none" v-model="ranking.NationId">
                            <option
                                class="bg-zinc-800 hover:bg-zinc-600 border-none rounded outline-none"
                                v-for="(index, name) in nation"
                                :value="index"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-center align-middle">Age</p>
                        <div class="flex justify-center items-center gap-2">
                            <input
                                class="border-zinc-700 bg-zinc-950 p-2 border-b-2 rounded w-24 outline-none"
                                type="number"
                                min="0"
                                v-model.number="ranking.AgeMin"
                            />
                            <p>-</p>
                            <input
                                class="border-zinc-700 bg-zinc-950 p-2 border-b-2 rounded w-24 outline-none"
                                type="number"
                                min="0"
                                v-model.number="ranking.AgeMax"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                @click="addRankingPage"
                class="bg-zinc-600 hover:bg-zinc-400 active:bg-zinc-800 hover:scale-110 active:scale-90 p-2 rounded w-full text-center transition-all"
            >
                <span v-if="buttonStatus == Status.Preload"> <PhGridNine class="inline" /> Create Stat Sheet </span>
                <span v-if="buttonStatus == Status.Loading">
                    <PhCircleNotch class="inline animate-spin" /> Getting Stats
                </span>
                <span v-if="buttonStatus == Status.Done"> <PhCheck class="inline animate-pulse" /> All Done! </span>
            </button>
        </div>
        <div class="flex justify-center p-4 w-full" v-else-if="addSelected == 'athlete'">
            <p class="text-center">Work In Progress!</p>
        </div>
    </div>
</template>
