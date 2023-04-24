import "./Avatar.css";
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.profileUrl} alt={props.user.name}></img>
  );
}

export default Avatar

