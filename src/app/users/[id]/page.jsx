import UserCard from "@/components/UserCard";

async function fetchUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const {data} = await res.json();
    return data;
}

export default async function UserPage({params}){
    const user = await fetchUser(params.id);

    return <UserCard user={user}/>
}