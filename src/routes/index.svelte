<script>
  import AlertBanner from '../components/ds/alert-banner/alert-banner.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<br>

<AlertBanner type="warning" class="foo">
	This is a success alert.
</AlertBanner>

<br>

<!-- {#if $layoutData.fetching}
  <p>Layout data is loading...</p>
{:else if $layoutData.error}
  <p>Layout data could not be loaded: {$layoutData.error.message}</p>
{:else}
  <p>Layout data loaded successfully</p>
  <pre>{$layoutData.data}</pre>
{/if} -->
