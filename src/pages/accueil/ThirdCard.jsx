import { Manrope } from "next/font/google";
import "../globalPages.css";
import Image from "next/image";
import Button from "@/components/Button";

const manrope = Manrope({ subsets: ["latin"] });

function ThirdCard() {
  return (
    <div className="container">
        <div className="mainThird ">
      <div className="position-absolute my-5 mx-4 d-flex align-items-center">
       <div>
       <div className="d-flex gap-4 align-items-center">
          <div>
            <Image src={"/assets/monaco.png"} alt="monaco" width={42} height={32} />
          </div>
          <div>
            <Image src={"/assets/france.png"} alt="france" width={42} height={32} />
          </div>
        </div>

        <div className="my-4">
          <div className="row">
            <div className="col-sm-7 text-white-50  ">
              <div>
              <p className="fs-1 fw-bold text-light ">
                NUMERO 1 A <span className="text-warning">MONACO</span> ET EN
                REGION <span className="text-warning">PACA</span>
              </p>
              <div className={manrope.className}>
              <p className="fs-5" id="textthird" >
                Notre engagement envers l'excellence, la précision et la qualité
                nous a hissés au sommet de l'industrie de la couverture à
                Monaco. Nous sommes fiers de notre statut de numéro 1, acquis
                grâce à un travail acharné, un savoir-faire inégalé et un sens
                de l'innovation constant. Lorsque vous choisissez notre
                entreprise, vous choisissez une tradition de qualité et une
                réputation qui ont résisté à l'épreuve du temps.
              </p>
              </div>
              <Button
                title={"PRENONS CONTACT"}
                style={"btn btn-warning fw-bold"}
              />
              </div>
            </div>
            <div className="col-sm-4  mx-4 " id="imgthird">
              <div  >
                <Image src={"/assets/castor.png"} alt="mascotte" width={288} height={447} />
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default ThirdCard;
