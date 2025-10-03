<script lang="ts">
  import Form from "../../../../components/students/Form.svelte";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  onMount(() => {
    if (!data.student.name) {
      window.location.href = "/students";
    }
  });
</script>

<div class="container">
  <h1>{data.student.name}</h1>
  <Form student={data.student} />
</div>
