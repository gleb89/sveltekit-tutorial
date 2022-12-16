export async function load({params}) {
    async function GetPost() {
        let url = 'https://jsonplaceholder.typicode.com/posts/'+params.id
        const res = await fetch(url)
        let data = await res.json()
        return data
    }
    async function GetComments() {
        let url = 'https://jsonplaceholder.typicode.com/comments'
        const res = await fetch(url)
        let data = await res.json()
        return data
    }
    return{
        Post:await GetPost(),
        comments:await GetComments()
    }
}