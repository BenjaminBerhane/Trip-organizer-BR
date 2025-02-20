import './Inspiration.css';

const images = [
 " https://hintergrundbild.org/wallpaper/full/9/a/8/26508-hintergrundbilder-4k-3840x2160-full-hd.jpg",
  'https://www.capekuduhotel.com/blog/wp-content/uploads/2024/02/landscape-amazing-island.jpg',
  'https://cdn.getyourguide.com/img/tour/57ac8bdb78134.jpeg/148.jpg',
  'https://www.anyworkanywhere.com/wp-content/uploads/2022/06/Weekendtips-for-dig-som-lever-och-jobbar-i-Amsterdam-1-f.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d2/Nesso%2C_vista_dal_lago.jpg',
];

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      <h3>Inspireras av dessa resmål</h3>
      <div className="inspiration-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Destination ${index + 1}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;