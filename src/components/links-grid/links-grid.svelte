<script>
	import cx from 'classnames';

	export let linksData = [];
	export let isCentered = false;
</script>

<section class={cx('links-grid', { 'links-grid--centered': isCentered })}>
	{#each linksData as data}
		<div data-test-id="links-grid">
			<h3 class="links-grid__section-title">{data.title}</h3>
			<ul>
				{#each data.links as linkData}
					<li class="links-grid__section-link">
						<a
							href={linkData.href}
							class="links-grid__link"
							data-test-id="links-grid-link"
						>{linkData.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.links-grid {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.links-grid--centered {
		justify-content: space-around;
	}
	.links-grid__section-title {
		font-size: var(--font-size-xl);
		line-height: var(--line-height-l);
		font-weight: var(--font-weight-03);
		margin-bottom: var(--spacer-010);
	}
	.links-grid__section-link {
		font-size: var(--font-size-s);
		line-height: 23px;
	}
	.links-grid__link:hover {
		text-decoration: underline;
	}
</style>
