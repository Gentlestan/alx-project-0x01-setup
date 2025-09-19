import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">Username: {username}</p>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Website: {website}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div className="address">
                <h3>Address</h3>
                <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
            </div>
            <div className="company">
                <h3>Company</h3>
                <p>Name: {company.name}</p>
                <p>Catchphrase: {company.catchPhrase}</p>
                <p>BS: {company.bs}</p>
            </div>
            </div>
        </div>
    );
}
export default UserCard;