import "./Card.css";
//<img src={data.img_src} alt="photo" />
const Card = ({ data }) => {
  return (
    <div className="card">
      <img className="photo" src={data.img_src} alt="photo" />

      <div className="description">
        <p>Name: {data.rover.name}</p>
        <p>Total_photo: {data.rover.total_photos}</p>
        <p>Date: {data.earth_date}</p>
        <p>Camera: {data.camera.full_name}</p>
      </div>
    </div>
  );
};

export default Card;
