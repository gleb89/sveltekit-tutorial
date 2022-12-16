<script>
    import { invalidateAll } from "$app/navigation";

    export let data;
    function RemovePost(id) {
        data.Posts = data.Posts.filter((el) => {
            return el.id != id;
        });
    }
    function Refresh() {
        invalidateAll();
    }
</script>
<svelte:head>
    <title>Посты</title>
</svelte:head>
<button
    on:click={() => {
        Refresh();
    }}>Обновить</button
>
<h1>Posts</h1>

{#each data.Posts as post}
    <p class="box-post">
        <a href="/posts/{post.id}">
            {post.id}
            {post.title}
        </a>
        <button
            on:click={() => {
                RemovePost(post.id);
            }}
        >
            remove
        </button>
    </p>
{/each}

<style>
    .box-post {
        background-color: aqua;
    }
</style>
