import Header from "@/components/layout/Header";
import { UserProps, userData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<userData | null>(null);

  const handleAddUser = (user: userData) => {
    setUser(user);
    setModalOpen(true);
  };

  return (
    <div>
        <Header />
      <div className="flex justify-between items-center p-4">
      <h1 className="text-4xl font-bold">User Profiles</h1>
      <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <UserCard key={post.id} {...post} />
      ))}
      </div>
       {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};
export default Users;
