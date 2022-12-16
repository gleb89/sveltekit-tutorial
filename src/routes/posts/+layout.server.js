export async function load({params}) {
    async function GetUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users'
        const res = await fetch(url)
        let data = await res.json()
        return data
    }
    return{
        AllData:await GetUsers()
    }
}