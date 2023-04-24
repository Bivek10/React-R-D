function Avatar(props) {
  return (
    <img className="avatar" src={props.user.profileUrl} alt={props.user.name}></img>
  );
}

export default Avatar