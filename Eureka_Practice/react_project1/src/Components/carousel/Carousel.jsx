import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
  const slides = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ueRwWFQKoBmR15RKD_02efmAWgbejytrjWTliFABUg&s=10',
      title: 'First slide label',
      text: 'Some representative content for the first slide.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYOLkOSrkDQ8YmHPS4XDoiQwiWDxT5Ojim-TEfUJuOw&s=10',
      title: 'Second slide label',
      text: 'Some representative content for the second slide.',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoA6vyWSNvBRmnQQ4TZ_onkI8YY_0zVRJN8DCHGCckQ&s=10',
      title: 'Third slide label',
      text: 'Some representative content for the third slide.',
    },
  ];

  return (
    <>
      <style>{`
        .carousel-container {
          width: 100%;
          max-width: 1200px;
          margin: 30px auto;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .carousel-item {
          height: 450px;
          background: #222;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .carousel-caption {
          right: 0;
          bottom: 0;
          left: 0;
          padding: 55px 20px 25px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
        }

        .carousel-caption h5 {
          font-size: 1.8rem;
          font-weight: 600;
        }

        .carousel-caption p {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .carousel-container {
            margin: 20px 10px;
          }

          .carousel-item {
            height: 280px;
          }

          .carousel-caption h5 {
            font-size: 1.2rem;
          }

          .carousel-caption p {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval="3000"
            >
              <img src={slide.image} alt={slide.title} />

              <div className="carousel-caption">
                <h5>{slide.title}</h5>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}