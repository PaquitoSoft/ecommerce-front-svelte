<script context="module" lang="ts">
  import { createClient } from '@urql/svelte';
  import type Category from '$types/category';
  import type LinksList from '$types/links-list';
  import LayoutDataQuery from '$components/layout/layout-data.query.graphql';

  export async function load({ params, fetch, session, stuff }) {
    type LayoutData = {
      categoriesTree: Category[];
      footerLinks: LinksList[];
    };

    const client = createClient({
      url: 'https://ecommerce-front-end-omega.vercel.app/api/graphql',
    });

    const response = await client.query<LayoutData>(LayoutDataQuery).toPromise();

    return {
      props: {
        categories: response.data?.categoriesTree || [],
        footerLinks: response.data?.footerLinks || [],
        error: response.error
      }
    }
  }
</script>

<script>
  import Header from '../components/layout/header/header.svelte';
  import Footer from '../components/layout/footer/footer.svelte';

  export let categories = [];
  export let footerLinks = [];
</script>

<div class="app-layout">
  <Header categories={categories} />
  <section class="app-layout__main-content">
    <slot></slot>
  </section>
  <Footer footerLinks={footerLinks} />
</div>

<style>
  .app-layout {
    padding: var(--spacer-020) var(--spacer-040);

  }

  .app-layout__main-content {
    margin: var(--spacer-040) 0;
  }
</style>
