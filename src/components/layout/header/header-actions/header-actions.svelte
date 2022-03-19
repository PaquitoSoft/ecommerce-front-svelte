<script>
	import Badge from '$ds/badge/badge.svelte';
  import ProfileIcon from '$icons/profile-icon.svg';
  import WishlistIcon from '$icons/favorite-icon.svg';
  import MiniCartIcon from '$icons/mini-cart-icon.svg';

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
	><ProfileIcon /></a>
	<a
		href="/"
		class="header-actions__item"
		title="Take a look at your wishlist"
		data-test-id="account-link"
	><WishlistIcon /></a>
	<a
		href="/shop/cart"
		class="header-actions__item"
		title="Go to shopping cart"
		data-test-id="shopcart-link"
	>
		<MiniCartIcon />
		{#if cart.totalUnits > 0}
      <span class="header-actions__cart-items-count">
        <Badge
          value={cart.totalUnits}
        />
      </span>
		{/if}
	</a>
</div>

<style>
	.header-actions__item {
		display: inline-block;
		margin-left: var(--spacer-020);
		position: relative;
	}
	/* .header-actions__favorites--is-active {
		color: var(--color-black);
	}
  */
	.header-actions__cart-items-count {
		position: absolute;
		top: -10px;
		right: -12px;
	}
</style>
