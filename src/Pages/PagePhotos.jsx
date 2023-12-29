import { serverHard } from "../Api/fetchPhotos";
import Card from "../Components/Card";
import { useGetPhotos } from "../Hooks/useGetPhotos";
import "./PagePhotos.css";

const PagePhotos = () => {
  const { data } = useGetPhotos();

  return (
    <>
      <div className="page">
        <h2>Фото с марсохода</h2>
        <div className="ListPhotos">
          {serverHard?.photos.map((photo) => (
            <Card data={photo} key={photo.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PagePhotos;
