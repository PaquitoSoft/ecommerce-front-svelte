<script>
	import cx from 'classnames';

	let clazz = '';
	export { clazz as class };
	export let isDisabled = false;
	export let onClick = () => {};
	export let isFullWidth = false;
	export let type = 'button'; // button, submit, reset
	export let kind = 'primary'; // primary, secondary
	export let testId = '';
</script>

<button
	class={cx(
		'button',
		clazz,
		{ 'button--is-fullwidth': isFullWidth }
	)}
	disabled={isDisabled}
	type={type}
	on:click={onClick}
	data-testid={testId}
>
	{#if kind === 'primary'}
		<div class="button__fake">&nbsp;</div>
	{/if}
	<div class="button__content button__content--kind-{kind}">
		<div><slot></slot></div>
		<span class="button__icon">Icon</span>
	</div>
</button>

<style>
	.button {
		border: none;
		background-color: var(--color-white);
		position: relative;
		padding: 0;
	}
	.button--is-fullwidth {
		width: 100%;
	}
	.button__fake {
		position: absolute;
		top: 0;
		left: 0;
		border: 1px solid var(--color-black);
		width: 100%;
		min-height: 50px;
		box-sizing: border-box;
	}
	.button__content {
		background-color: var(--color-black);
		color: var(--color-white);
		cursor: pointer;
		min-height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: var(--font-size-s);
		line-height: 50px;
		font-weight: var(--font-weight-04);
		letter-spacing: 2px;
		text-transform: uppercase;
		padding: 0 var(--spacer-015);
		transform: translate(-3px, -3px);
		width: auto;
	}
	.button__content:hover {
		color: var(--color-dark-grey);	
	}
	.button__content--kind-secondary {
		background-color: var(--color-white);
		color: var(--color-black);
		border: 1px solid var(--color-black);
		transform: none;
	}
	.button__icon {
		margin-left: var(--spacer-015);
	}
</style>