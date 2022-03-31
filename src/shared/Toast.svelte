<script lang="ts">
  import { onMount } from 'svelte';

  import { toasts } from '../stores/Toasts';

  export let toast: ToastDetails;

  let time = Date.now();
  let minsAgo = 0;

  $: minsAgo = Math.floor((time - toast.timestamp) / 1000 / 60);

  onMount(() => {
    const interval = setInterval(() => {
      time = Date.now();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="container" on:click={() => toasts.remove(toast.timestamp)}>
  <div class="header">
    {#if 'header' in toast}
      <p class="title">{toast.header}</p>
    {/if}
    <p class="mins-ago">{minsAgo} mins ago</p>
  </div>
  <p class="body">{toast.body}</p>
</div>

<style>
  .container {
    margin: 10px 0;
    background: var(--bkg2);
  }

  .header {
    border-bottom: 1px solid hsl(0, 0%, 60%);
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
  }

  .title {
    margin: 8px 5px;
    font-weight: bold;
  }

  .mins-ago {
    font-size: 0.7rem;
    margin-left: 10px;
  }

  p.body {
    margin: 10px 20px;
    display: inline-block;
  }
</style>
