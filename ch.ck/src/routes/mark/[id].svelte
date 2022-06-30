<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { liveQuery } from "dexie";
    import { db } from '$lib/utils/dbHelper.js';
    import type { Section } from '$lib/utils/types.js';
    import ChckMarkboard from '$lib/ChckMarkboard.svelte';
    
    let id = Number($page.params.id)

    //
    // Query
    //
    $: chcks = liveQuery(async () => {
        //
        // Query Dexie's API
        //
        const chcks = await db.chcks
            .where('id')
            .equals(id)
            .toArray();

        // Return result
        return chcks;
    });

    async function handleUpdated(event: CustomEvent<{contents: Section[]}>) {
        const newChck = {
            modifiedAt: new Date(),
            contents: event.detail.contents
        };

        let updated: Number;
        try {
            updated = await db.chcks.update(id, newChck);
        } catch(error) {
            updated = -1
            alert('오류가 발생했습니다. 문제가 거듭되면, 관리자에게 문의하세요.');
            console.error(error);
        }

        if (updated === 1) {
            console.log("[Dexie] 성공적으로 수정됨.")
        } else if (updated === 0) {
            console.log("[Dexie] 원본과 동일하여 새로운 값이 반영되지 않았음. 에러는 발생하지 않음.")
        } else {
            console.log("[Dexie] 오류가 발생하였음.")
        }

        goto('/view/' + id);
    }
</script>

<svelte:head>
	<title>체크리스트 기록하기</title>
</svelte:head>

<div>
    {#if $chcks}
      {#each $chcks as chck}
        <h1>{chck.title}</h1>
        <div class="date">생성 일시: {chck.createdAt.toLocaleString()}</div>
        <div class="date">수정 일시: {chck.modifiedAt.toLocaleString()}</div>
        <ChckMarkboard contents={chck.contents} on:updated_chck={handleUpdated} />
      {/each}
    {/if}
</div>

<style>
    h1 {
        font-weight: 700;
    }

    .date {
        text-align: center;
    }
</style>