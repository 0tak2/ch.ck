<script lang="ts">
    import SelectTemplate from '$lib/SelectTemplate.svelte'
    import { templates } from '$lib/templates/templates.js'
</script>

<svelte:head>
	<title>ch.ck: 새로운 체크리스트</title>
</svelte:head>

<div class="page_title">새로운 체크리스트 생성</div>

<div class="new">
    {#if templates}
        <SelectTemplate templates={templates} />
    {/if}
</div>