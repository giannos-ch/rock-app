<script lang="ts">
  import List from "../../components/List.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div class="container">
  <h1>Μαθητές</h1>

  <List objects={data.students} url="/students/" />
</div>
