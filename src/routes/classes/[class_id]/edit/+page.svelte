<script lang="ts">
  import Form from "../../../../components/classes/Form.svelte";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  onMount(() => {
    if (!data.klass) {
      window.location.href = "/classes";
    }
  });
</script>

<div class="container">
  <h1>{data.klass.name}</h1>
  <Form klass={data.klass} />
</div>
