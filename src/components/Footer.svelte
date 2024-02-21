<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  export let currentTodo: string;
  export let addTodo: (currentTodo: string) => void;

  onMount(() => {});
</script>

<div class="flex p-3">
  <input
    class="input"
    type="text"
    placeholder="Enter To Do"
    bind:value={currentTodo}
  />
  <button
    class="btn btn-sm variant-filled-secondary"
    disabled={!currentTodo}
    on:click={() => addTodo(currentTodo)}
  >
    <Icon icon="mdi:play-arrow" width="1.2em" height="1.2em" />
    Add
  </button>
</div>
