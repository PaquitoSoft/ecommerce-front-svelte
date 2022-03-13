<script>
  import LinksGrid from '../../../../../components/links-grid/links-grid.svelte';

	export let categories = [];

  function linksDataFromCategory(category) {
    return category.subcategories.map(subcategory => ({
      title: subcategory.name,
      links: subcategory.subcategories.map((subcat) => ({
        name: subcat.name,
        href: `/products-grid/${subcat.code}`
      }))
    }));
  }
</script>

<ul class="header-categories">
	{#each categories as category}
		<li class="header-categories__root-item">
			<div class="header-categories__root-item-title">{category.name}</div>
			<div class="header-categories__categories-panel">
				<LinksGrid linksData={linksDataFromCategory(category)} isCentered={true} />
			</div>
		</li>
	{/each}
</ul>

<style>
  .header-categories {
    list-style: none;
    display: flex;
  }
  .header-categories__root-item {
    border-bottom: 2px solid transparent;
    padding: 0 var(--spacer-020);
    cursor: pointer;
    height: 56px;
    line-height: 56px;
  }
  .header-categories__root-item:hover {
    border-bottom: 2px solid var(--color-black);
  }
  .header-categories__root-item-title {
    font-size: var(--font-size-m);
	  font-weight: bold;
  }
  .header-categories__categories-panel {
    background-color: var(--color-white);
    border: 1px solid var(--color-light-grey);
    border-top: 0;
    width: 100%;
    position: absolute;
    top: 58px;
    left: 0;
    padding: var(--spacer-020) 0;
    display: none;
    z-index: 10;    
  }
  .header-categories__root-item:hover > .header-categories__categories-panel {
    display: block;
  }
</style>
