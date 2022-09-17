import './card.css'

function MyCard(props) {
  return (
        <div className="card">
          <img src={(props.src)} />
          <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
        </div>
    )
  };

export default MyCard;