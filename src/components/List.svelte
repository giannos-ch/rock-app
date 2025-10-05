<script lang="ts">
  import "./list_style.css";

  let { has_new = true, objects, url, new_url = null } = $props();
  let search = $state("");
  if (!new_url) {
    new_url = url + "new";
  }
</script>

<header class="list-header">
  <input
    class="search"
    type="text"
    placeholder="Search..."
    bind:value={search}
  />
  {#if has_new}
    <a class="button new" href={new_url}>+</a>
  {/if}
</header>

<div class="list">
  {#each objects as object (object.id)}
    {#if object.name.toLowerCase().includes(search.toLowerCase())}
      <div
        class="row"
        role="button"
        tabindex="0"
        onclick={() => (window.location.href = url + object.id)}
        onkeydown={() => {}}
      >
        <div class="title">{object.name}</div>
      </div>
    {/if}
  {/each}
</div>
