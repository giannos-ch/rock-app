<script>
  let { children, header_text, expanded = false } = $props();
</script>

<div class="collapsible">
  <button aria-expanded={expanded} onclick={() => (expanded = !expanded)}>
    {header_text}
    <span class="arrow">{expanded ? "-" : "+"}</span>
  </button>
  <div class="contents" hidden={!expanded}>
    {@render children()}
  </div>
</div>

<style>
  button {
    all: unset;
    display: inline;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0.3em 0;
    padding: 0.3em 0.5em;
    font-family: inherit;
    line-height: 1.2;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
  button span {
    float: right;
  }
  .contents {
    margin: 5px 20px 20px;
  }
</style>
