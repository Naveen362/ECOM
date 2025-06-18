export default function User3({ obj1 }) {
    return (
      <div>
        {/* <p>Name: {obj1.name.first} {obj1.name.last}</p> */}
        <img src={obj1.picture.thumbnail} alt="user-thumbnail" />
      </div>
    );
  }
  