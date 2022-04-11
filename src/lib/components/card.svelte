<script lang="ts">
    export let name = '';
    export let value = '';
</script>

<div class="w-full px-4 py-4 border rounded border-slate-900 dark:border-slate-300">
    <div class="flex justify-between">
        <h1 class="mb-4">{name}</h1>
        <h1 class="mb-4">{value}</h1>
    </div>
    <slot></slot>
</div>