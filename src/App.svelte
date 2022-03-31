<script lang="ts">
  import Toast from './shared/Toast.svelte';
  import { toasts } from './stores/Toasts';
  import { fade, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
</script>

<main>
</main>
<div class="toast-box">
  {#each $toasts as toast (toast.timestamp)}
    <div in:fade out:scale animate:flip={{ duration: 500 }}>
      <Toast {toast} />
    </div>
  {/each}
</div>

<style>
  .toast-box {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 10px 20px;
  }
</style>
