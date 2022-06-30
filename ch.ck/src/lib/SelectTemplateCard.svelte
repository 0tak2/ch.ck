<script lang="ts">
    import type { Template } from '$lib/utils/types.js';
    import { db } from '$lib/utils/dbHelper.js';
    import { goto } from '$app/navigation';
    
    export let item: Template;

    async function handleButton() {
        let gotoId = '';
        try {
            const id = await db.chcks.add({
                templateId: item.id,
                templateVersion: item.version,
                createdAt: new Date(),
                modifiedAt: new Date(),
                title: item.title,
                contents: item.contents
            });
            gotoId = id.toString();
        } catch(error) {
            alert('오류가 발생했습니다. 문제가 거듭되면, 관리자에게 문의하세요.');
            console.error(error);
        }
        goto('/mark/' + gotoId);
    }
</script>

<div class="card">
    <div class="title">{item.title}</div>

    {#if item.description != null}
        <div class="description">{item.description}</div>
    {/if}

    <div class="version">버전 {item.version.toFixed(1)}</div>

    <div class="button_container"><button on:click={handleButton}>이 템플릿 선택</button></div>
</div>

<style>
    .card {
        padding: 10px;
        margin-top: 2rem;
        border: 1px solid black;
        width: 600px;
    }

    .title {
        font-weight: 700;
        font-size: x-large;
        margin-bottom: 0.5rem;
    }

    .button_container {
        text-align: center;
    }

    button {
        color: var(--accent-color);
    }

	@media (max-width: 480px) {
        .title {
            font-size: large;
        }
		.card {
			width: auto;
		}
	}
</style>