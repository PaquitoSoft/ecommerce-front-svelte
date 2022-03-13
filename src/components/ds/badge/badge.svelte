<script>
	let clazz = '';
	export { clazz as class };
	export let value = 0;
</script>

<span class="badge {clazz}">{value}</span>

<style>
	.badge {
		background-color: var(--color-bright-blue);
		color: var(--color-white);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-04);
		line-height: var(--font-size-xs);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 22px;
		width: 22px;
	}
</style>