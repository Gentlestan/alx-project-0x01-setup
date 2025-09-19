import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";


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
  return (
    <div>
        <Header />
      <h1 className="text-4xl font-bold">User Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <UserCard key={post.id} {...post} />
      ))}
      </div>
    </div>
  );
};
export default Users;
