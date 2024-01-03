import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

function CardItem({title, img, desc}) {
    return (
        <div className="card mb-4" id="cards">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className={manrope.className}>
          <p className="card-text mb-3">
            {desc}
          </p>
          </div>
          <div className="d-flex justify-content-end">
          <a href="#" className="btn btn-light shadow ">
            PlUS D'INFOS
          </a>
          </div>
        </div>
      </div>
    );
}

export default CardItem;