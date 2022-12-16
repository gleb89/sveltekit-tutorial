<script>
    import { each } from "svelte/internal";
    export let data
</script>

<svelte:head>
    <title>Пост с id {data.Post.id} </title>
</svelte:head>
<h1>Post</h1>
<p>{data.Post.id}</p>
<p>{data.Post.title}</p>

{#each data.comments as comment }
<p>
    {comment.body}
</p>
{/each}