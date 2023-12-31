import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ['latin'] })

function FeedBackCard({name, image, text}) {
    return (
        <div className="card" id="cardTenth">
        <img src={image} className="card-img-top mx-3 my-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className={manrope.className}>

          <p className="card-text">
         {text}
          </p>
          </div>
        </div>
      </div>
    );
}

export default FeedBackCard;