<script lang="ts">
  import List from "../../components/List.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div class="container">
  <h1>Τμήματα</h1>

  <List objects={data.classes} url="/classes/" />
</div>
