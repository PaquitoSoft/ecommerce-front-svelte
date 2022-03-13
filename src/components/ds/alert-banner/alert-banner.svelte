<script>
	let clazz = '';
	export { clazz as class };
	export let type = 'info';
</script>

<div class="alert-banner alert-banner__{type} {clazz}">
	<div class="alert-banner__content">
		<slot></slot>	
	</div>
</div>

<style>
	.alert-banner {
		padding: 16px;
		background-color: var(--color-light-grey);
		font-size: var(--font-size-m);
		font-weight: var(--font-weight-04);
		line-height: var(--line-height-s);
	}
	.alert-banner__content {
		width: 90%;
	}
</style>
