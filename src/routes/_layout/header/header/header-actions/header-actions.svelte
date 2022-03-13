<script>
	import Badge from '../../../../../components/ds/badge/badge.svelte';

	let cart = {
		totalUnits: 8
	};
</script>

<div class="header-actions">
	<a
		href="/"
		class="header-actions__item"
		title="Access your profile information"
		data-test-id="profile-link"
	>Profile Icon</a>
	<a
		href="/"
		class="header-actions__item"
		title="Take a look at your wishlist"
		data-test-id="account-link"
	>Wishlist Icon</a>
	<a
		href="/shop/cart"
		class="header-actions__item"
		title="Go to shopping cart"
		data-test-id="shopcart-link"
	>
		ShopCart Icon
		{#if cart.totalUnits > 0}
			<Badge
				class="header-actions__cart-items-count"
				value={cart.totalUnits}
			/>
		{/if}
	</a>
</div>

<style>
	.header-actions__item {
		display: inline-block;
		margin-left: var(--spacer-030);
		position: relative;
	}
	/* .header-actions__favorites--is-active {
		color: var(--color-black);
	}
	.header-actions__cart-items-count {
		position: absolute;
		top: -10px;
		right: -12px;
	} */
</style>
