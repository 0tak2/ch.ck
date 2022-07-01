<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a href="/">
			<span class="app_title">ch.ck</span>
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">홈</a>
			</li>
			<li class:active={$page.url.pathname === '/new'}>
				<a sveltekit:prefetch href="/new">새로운 체·크</a>
			</li>
			<li class:active={$page.url.pathname === '/view'}>
				<a sveltekit:prefetch href="/view">저장된 체·크</a>
			</li>
			<li class:active={$page.url.pathname === '/help'}>
				<a sveltekit:prefetch href="/help">도움말</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-around;
		background:rgba(255, 255, 255, 1);
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-size: 0.9rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	.app_title {
			font-size: xx-large;
			font-weight: 700;
			font-family: 'Gowun Batang', serif;
	}

	@media (max-width: 480px) {
		header, nav {
			display: block;
		}

		.app_title {
			font-size: large;
			display: block;
		}

		nav a {
			font-size: 0.8rem;
			white-space: nowrap;
		}

		header {
			width: auto;
		}

		.corner:nth-of-type(2) { 
			display: none;
		}
	}
</style>
