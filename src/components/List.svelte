<script lang="ts">
  let props = $props();
  let search = $state("");
</script>

<header class="list-header">
  <input
    class="search"
    type="text"
    placeholder="Search..."
    bind:value={search}
  />
  <a class="button new" href={props.url + "new"}>+</a>
</header>

<div class="list">
  {#each props.objects as object (object.id)}
    {#if object.name.toLowerCase().includes(search.toLowerCase())}
      <div
        class="row"
        role="button"
        tabindex="0"
        onclick={() => (window.location.href = props.url + object.id)}
        onkeydown={() => {}}
      >
        <div class="title">{object.name}</div>
      </div>
    {/if}
  {/each}
</div>

<style>
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .list-header .search {
    width: 60%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border 0.2s;
  }
  .list-header .search:focus {
    border-color: #0077ff;
    outline: none;
  }

  .list {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .list .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background 0.2s;
  }
  .list .row:last-child {
    border-bottom: none;
  }
  .list .row:hover {
    background: #f0f7ff;
  }

  .list .row .title {
    font-weight: 500;
  }
</style>
