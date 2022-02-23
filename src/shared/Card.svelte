<div class="card">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
</div>

<style>
  .card {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
