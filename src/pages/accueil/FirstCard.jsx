import { Manrope } from "next/font/google";
import "../globalPages.css";

const manrope = Manrope({ subsets: ["latin"] });

function FirstCard() {
    return (
        <div className="main">
       <div className="container-sm">
       <div className="position-absolute col col-lg-4 mx-4  alignText">
            <div>
          <ul>
            <li className="text-warning" id="monaco" >
              <p className="fs-5" >30 ANS D'ACTIVITÉ À MONACO</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-light fs-2 fw-bold">
            L'ART DE LA COUVERTURE : NOTRE MONDE EN TOITURE
          </p>
        </div>
        <div className={manrope.className}>
          <p className="text-white-50 fs-6">
            Aenean sed adipiscing diam donec adipiscing. Aenean euismod
            elementum nisi quis eleifend quam. Lacus suspendisse faucibus
            interdum posuere lorem.
          </p>
        </div>
        </div>
       </div>
      </div>
    );
}

export default FirstCard;