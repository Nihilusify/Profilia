<div class="card">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
</div>

<style>
  .card {
    background: var(--formBackground);
    border-radius: 6px;
    box-shadow: 0px 2px 4px hsl(black, 100%, 10%);
    margin: auto;
    width: 50%;
    padding: 10px 0;
  }
</style>
