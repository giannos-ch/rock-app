<script lang="ts">
  import "./list_style.css";

  import {
    collection,
    doc,
    getDocs,
    setDoc,
    query,
    where,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "$lib/firebase";

  let {
    allObjects,
    selected_ids,
    relation_collection,
    relation_id_field,
    object_id_field,
    object_id,
  } = $props();
  let search = $state("");

  let checked = $state(
    Object.fromEntries(
      allObjects.map((object: any) => [
        object.id,
        selected_ids.includes(object.id),
      ])
    )
  );

  function change(id: string) {
    if (checked[id]) {
      const docRef = doc(collection(db, relation_collection));
      setDoc(docRef, {
        [relation_id_field]: id,
        [object_id_field]: object_id,
      });
    } else {
      getDocs(
        query(
          collection(db, relation_collection),
          where(relation_id_field, "==", id),
          where(object_id_field, "==", object_id)
        )
      ).then((docs) => {
        docs.docs.forEach((doc) => {
          const docRef = doc.ref;
          deleteDoc(docRef);
        });
      });
    }
  }
</script>

<header class="list-header">
  <input
    class="search"
    type="text"
    placeholder="Search..."
    bind:value={search}
  />
</header>

<div class="list">
  {#each allObjects as object (object.id)}
    {#if object.name.toLowerCase().includes(search.toLowerCase())}
      <div class="row">
        <div class="title">{object.name}</div>
        <input
          type="checkbox"
          bind:checked={checked[object.id]}
          onchange={() => change(object.id)}
        />
      </div>
    {/if}
  {/each}
</div>
