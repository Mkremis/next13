"use client";

import { useParams } from "next/navigation";

export default function UserCard({ user }) {
  const params = useParams();
  console.log(params);
  return (
    <div className="bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} alt="avatar" className="m-auto my-4" />
      <h1 className="text-3xl font-bold">
        {user.id}. {user.first_name} {user.last_name}
      </h1>
      <p>email: {user.email}</p>
    </div>
  );
}
