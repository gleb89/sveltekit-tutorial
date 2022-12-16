export async function load() {
    async function GetPosts() {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await fetch(url)
        let data = await res.json()
        return data
    }

    return{
        Posts:await GetPosts()
    }
}