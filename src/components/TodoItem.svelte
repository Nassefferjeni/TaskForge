<script lang="ts">
  import Icon from "@iconify/svelte";

  export let index: number;
  export let item: string;
  export let editTodo: (index: number) => void;
  export let deleteTodo: (index: number) => void;
</script>

<div class="p-2 pl-4 flex w-full items-center">
  <div class="p-4 border-l-4 pl-4 pt-2">
    {index + 1}. {item}
  </div>
  <div class="flex flex-1 justify-end p-4">
    <button on:click={() => editTodo(index)} class="pr-2">
      <Icon
        icon="mdi-grease-pencil"
        class="cursor-pointer"
        width="1.5em"
        height="1.5em"
      />
    </button>
    <button on:click={() => deleteTodo(index)}>
      <Icon
        icon="ph:trash"
        class="cursor-pointer"
        width="1.5em"
        height="1.5em"
      />
    </button>
  </div>
</div>
