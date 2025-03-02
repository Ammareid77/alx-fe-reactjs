/* eslint-disable */
function UserProfile(props){
    return (
        <div>
            <span style={{ color: 'blue', border: 'solid 10px', padding: '10px', margin: '10px' }}>
            </span>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}
export default UserProfile;
