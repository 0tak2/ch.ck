<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from "$lib/utils/dbHelper";
    import { goto } from '$app/navigation';
    import { toTimestring } from '$lib/utils/dateHelper'
    
    let noChck = false;

    let dateRaw = new Date();
    let timeString = dateRaw.getFullYear() + "년 " + (dateRaw.getMonth() + 1) + "월 " + dateRaw.getDate() + "일 "
            + dateRaw.getHours() + "시 " + dateRaw.getMinutes() + "분";

    let startDate = new Date(dateRaw.getFullYear(), dateRaw.getMonth(), dateRaw.getDate(), 0, 0);
    let endDate = new Date(dateRaw.getFullYear(), dateRaw.getMonth(), dateRaw.getDate()+1, 0, 0);
    $: chcks = liveQuery(async () => {
        const chcks = await db.chcks
            .where('modifiedAt')
            .between(startDate, endDate)
            .toArray();

        if (chcks.length === 0) {
            noChck = true
        }
        return chcks;
    });

    function handleEdit(id: Number) {
        goto('/mark/' + String(id));
    }

    async function handleDelete(id: Number) {
        var really = confirm('정말로 삭제하시겠습니까?');

        let count = 0;
        if (really) {
            try {
                const deletedCount = await db.chcks.where("id").equals(id).delete();
                count = deletedCount;
            } catch(error) {
                count = -1;
                console.error("[dexie] 데이터 삭제 중 오류 발생" + error)
            }
        }

        if (count > 0) {
            alert("삭제가 완료되었습니다.");
        } else if (count === 0) {
            alert("삭제된 것이 없습니다. 오류라고 생각되면 관리자에게 문의하십시오.");
        } else {
            alert("오류가 발생했습니다. 문제가 지속되면 관리자에게 문의하십시오.");
        }
    }

    function handleAdd() {
        goto('/new');
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>

<div class="page_title">
    {timeString}의 체·크리스트
</div>
<div class="container">
    {#if noChck}
        <div class="row">
            오늘 생성된 체크리스트가 없습니다.
        </div>
    {/if}
    {#if $chcks}
      {#each $chcks as chck}
        <div class="row">
            <div class="title cell"><a href="/view/{chck.id}">{chck.title}</a></div>
            <div class="date cell">생성 {toTimestring(chck.createdAt)}</div>
            <div class="date cell">수정 {toTimestring(chck.modifiedAt)}</div>
            <button class="cell" on:click={() => handleEdit(chck.id)}>
                <span class="material-symbols-outlined">
                    edit_square
                </span>
            </button>
            <button class="cell">
                <span class="material-symbols-outlined" on:click={() => handleDelete(chck.id)}>
                    delete
                </span>
            </button>
        </div>
      {/each}
        <div class="add" on:click={handleAdd}>
            <span class="material-symbols-outlined">
                add
            </span>
            새로운 체크리스트 추가
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        padding: 5px;
        border: 1px dotted var(--accent-color);
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

    .add {
        display: flex;
        flex-direction: row;
        justify-content: center;
		align-items: center;
		flex: 1;
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
        color: var(--secondary-color);
        cursor: pointer;
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
  