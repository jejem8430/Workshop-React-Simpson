const Avatar = (props) => {
    return (
        <div>
            <img src= {props.image} alt=""/>
            <h2>{props.firstName}</h2>
            <h3>{props.lastName}</h3>
        </div>
    );

}

export default Avatar;