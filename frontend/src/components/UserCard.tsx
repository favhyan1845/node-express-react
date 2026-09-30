import '../stylesheets/UserCards.css';
interface Props {
    name: string;
    age: number;
}
const UserCard = ({name, age}: Props) => {
    return (
        <div className="UserCard">
            <h1 className="UserCard-title">{name}</h1>
            <p className="UserCard-subtitle">{age} años</p>
        </div>
    );
};

export default UserCard;    