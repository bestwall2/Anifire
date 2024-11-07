
import './styles/Card.css';

const Card = (props) => {
  return (
    <div
      className="CardContainer m-0 border rounded-lg bg-gray-800 border-gray-700"
      onClick={props.onClick}
    >
      <div className="CardImageContainer rounded-lg overflow-hidden relative w-full min-h-fit block">
        <a href={props.linkUrl || "#"}> {/* Replaced '#' with prop linkUrl for flexibility */}
          <img
            className={`CardImage transform transition-transform duration-300 ease-out hover:scale-125 hover:shadow-blue-2 w-full object-cover object-center h-full ${props.imgStyle}`}
            src={props.imgUrl}
            alt={props.title}
          />
          <div className="Play h-6 w-6">
            <svg
              viewBox="-0.5 0 7 7"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>play icon</title>
                <path
                  d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </div>
          <div className="Anititle line-clamp-1">
            <p className="AniText">{props.title}</p>
          </div>
          <p className="type">{props.type}</p>
          <p className="year">{props.year}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;