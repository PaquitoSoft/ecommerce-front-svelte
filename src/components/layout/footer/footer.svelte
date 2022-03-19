<script>
  import LinksGrid from '$components/links-grid/links-grid.svelte';

  export let footerLinks = [];
</script>

<footer class="app-footer" data-test-id="layout-footer">
  <LinksGrid linksData={footerLinks}/>
</footer>

<style>
  .app-footer {
    border-top: 1px solid var(--color-light-grey);
    padding-top: var(--spacer-020);
    margin-bottom: var(--spacer-020);
  }
</style>
