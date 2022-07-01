<script lang="ts">
    import type { Template } from '$lib/utils/types';
    import { db } from '$lib/utils/dbHelper';
    import { goto } from '$app/navigation';
    
    export let item: Template;

    let previewShow = false;

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

    function handlePreview() {
        previewShow = !previewShow;
    }
</script>

<div class="card">
    <div class="title">{item.title}</div>

    {#if item.description != null}
        <div class="description">{item.description}</div>
    {/if}

    <div class="version">버전 {item.version.toFixed(1)}</div>

    <div class="button_container"><button on:click={handleButton}>이 템플릿 선택</button></div>
    <div class="button_container"><button class="secondary" on:click={handlePreview}>템플릿 미리보기</button></div>

    {#if previewShow}
        <div class="preview_panel">
            {#each item.contents as section, i}
                <div><strong>{i + 1}. {section.sectionTitle}</strong></div>
                <div>
                    {#each section.items as sectionItem, j}
                        {#if (j+1)===section.items.length}
                            {sectionItem.entry}
                        {:else}
                            {sectionItem.entry} ·&nbsp;
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .card {
        padding: 10px;
        margin-top: 2rem;
        border: 1px dotted black;
        width: 600px;
    }

    .title {
        font-weight: 700;
        font-size: x-large;
        margin-bottom: 0.5rem;
    }

    .button_container {
        text-align: center;
        margin: 0.3rem;
    }

    button {
        color: var(--accent-color);
    }

    button.secondary {
        color: var(--secondary-color);
    }

    .preview_panel {
        padding: 15px;
        margin: 15px;
        border: 1px solid var(--accent-color);
        font-size: small;
    }

	@media (max-width: 480px) {
        .title {
            font-size: large;
        }
		.card {
			width: 85vw;
		}
	}
</style>