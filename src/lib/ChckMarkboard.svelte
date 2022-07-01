<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Section } from '$lib/utils/types';
    export let contents: Section[];

    const dispatch = createEventDispatcher<{updated_chck: {  contents: Section[] } }>();

    function handleSave() {
        dispatch('updated_chck', {
            contents
        })
    }

    let detailPanelShow = false;
    let detailIndex = {
        section: -1,
        entry: -1
    }

    function toggleDetail(sectionIndex: number, entryIndex: number) {
        if (!detailPanelShow) {
            detailIndex.section = sectionIndex;
            detailIndex.entry = entryIndex;
        } else if (detailIndex.section === sectionIndex && detailIndex.entry === entryIndex) {
                detailIndex.section = -1;
                detailIndex.entry = -1;
        } else {
            detailIndex.section = sectionIndex;
            detailIndex.entry = entryIndex;
        }
        detailPanelShow = !detailPanelShow;
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>

<div class="container">
    <div class="save" on:click={handleSave}>
        <span class="material-symbols-outlined icon">
            save
        </span>
        저장
    </div>
    {#each contents as section, i}
        <div class="section">
            <div class="section_title">{i + 1}. {section.sectionTitle}</div>

            {#each section.items as item, j}
                <div class:done={item.done} class="entry">
                    <input
                        type=checkbox
                        bind:checked={item.done}
                    >

                    <span class="entry_text" on:click="{() => item.done = !item.done}">{item.entry}</span>
                    <span class="material-symbols-outlined icon" on:click={() => toggleDetail(i, j)}>info</span>
                    {#if detailIndex.section === i && detailIndex.entry === j}
                        <div class="detail_panel">
                            {@html contents[i].items[j].detail}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
    <button on:click={handleSave}>
        <span class="material-symbols-outlined icon">
            save
        </span>
        저장
    </button>
</div>

<style>
    .container {
        border: 1px dotted black;
        margin: 1rem;
        padding: 1rem;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		flex: 1;
        font-size: large;
    }

    .save {
        margin-top: 1rem;
        text-align: right;
        font-size: medium;
        cursor: pointer;
    }

    .section {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .section_title {
        font-weight: 700;
    }

    .done {
        text-decoration-line: line-through;
    }

    .entry {
        margin-top: 0.3rem;
    }

    .entry_text {
        cursor: pointer;
    }

    .icon {
        font-size: large;
        cursor: pointer;
    }

    .detail_panel {
        font-size: medium;
        margin-left: 1.7rem;
    }

	@media (max-width: 480px) {
        .section {
            width: auto;
        }
	}
</style>

