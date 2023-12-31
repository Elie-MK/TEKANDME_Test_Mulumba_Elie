import Button from "@/components/Button";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ['latin'] })

function SecondCard() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm my-5 " id="secondImg">
          <Image src={"/assets/secondCardImg.png"} alt="histoire" width={385} height={404} />
        </div>
        <div className="col-sm my-5 d-flex align-items-center mx-4 ">
          <div>
          <p className="fs-1 fw-bold ">Notre Histoire en Quelques Tuiles</p>
          <p className={manrope.className}>
            Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable
            dans le monde des toits à Monaco. Nous avons réinventé la
            couverture, tout en gardant nos pieds (et nos tuiles) sur terre.
            Découvrez notre parcours unique et notre engagement envers
            l'excellence.
          </p>
          <Button title={"EN SAVOIR PLUS"} style={"btn btn-light shadow-sm "} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecondCard;
