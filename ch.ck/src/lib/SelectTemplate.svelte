<script lang="ts">
    import type { Template } from '$lib/utils/types.js';
    import SelectTemplateCard from '$lib/SelectTemplateCard.svelte';
    
    export let templates: Template[];
</script>

<div class="container">
    {#each templates as item}
        <div class="card">
            <SelectTemplateCard {item} />
        </div>
    {/each}
</div>

<style>
    .container {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
		flex: 1;
    }
</style>