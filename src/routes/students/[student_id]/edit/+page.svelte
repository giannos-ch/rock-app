<script lang="ts">
  import Form from "../../../../components/students/Form.svelte";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import "../../../../components/list_style.css";
  import CheckList from "../../../../components/CheckList.svelte";
  import Collapsible from "../../../../components/Collapsible.svelte";

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

  <Collapsible header_text="Τμήματα">
    <CheckList
      allObjects={data.allClasses}
      selected_ids={data.selected_classes_ids}
      relation_collection="classes_students"
      relation_id_field="class_id"
      object_id_field="student_id"
      object_id={data.student.id}
    />
  </Collapsible>
</div>

<style>
</style>
