import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ['latin'] })

function FeedBackCard({name, image, text}) {
    return (
        <div className="card mt-3   rounded-0 col-10 col-md-6" id="cardTenth" >
        <img src={image} className="card-img-top mx-3 my-2 d-none d-sm-inline" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6">{name}</h5>
          <div className={manrope.className}>
          <p className="card-text fs-6">
         {text}
          </p>
          </div>
        </div>
      </div>
    );
}

export default FeedBackCard;