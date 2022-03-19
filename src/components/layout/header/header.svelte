<script>
  import HeaderCategories from './header-categories/header-categories.svelte';
  import HeaderActions from './header-actions/header-actions.svelte';

  export let categories = [];
</script>

<header class="app-header">
  <div class="app-header__logo">
    <a href="/">
      <img
        src="/images/icon-adidas-logo.svg" 
        alt="Adidas logo"
        width={70}
      />
    </a>
  </div>
  <div class="app-header__categories"><HeaderCategories categories={categories} /></div>
  <div class="app-header__actions"><HeaderActions /></div>
</header>

<style>
  .app-header {
    display: grid;
    grid-template-columns: 100px auto 150px;
    width: 100%;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--color-light-grey);
    position: relative;
  }
  .app-header__categories {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-header__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
