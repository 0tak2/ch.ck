<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from "$lib/utils/dbHelper";
    import { goto } from '$app/navigation';
  
    $: chcks = liveQuery(async () => {
        const chcks = await db.chcks.toArray();

        return chcks;
    });

    function handleEdit(id: Number) {
        goto('/mark/' + String(id));
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>

<div class="container">
    {#if $chcks}
      {#each $chcks as chck}
        <div class="row">
            <div class="title cell"><a href="/view/{chck.id}">{chck.title}</a></div>
            <div class="date cell">{chck.createdAt.toLocaleString()}</div>
            <div class="date cell">{chck.modifiedAt.toLocaleString()}</div>
            <button class="cell" on:click={() => handleEdit(chck.id)}>
                <span class="material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button class="cell">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
      {/each}
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
		align-items: center;
		flex: 1;
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
    }

    .cell {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    button {
        border: 0;
        cursor: pointer;
    }
</style>
  