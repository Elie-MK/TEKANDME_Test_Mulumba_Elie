import Button from "@/components/Button";
import "../globalPages.css";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ['latin'] })

function EighthCard() {
  return (
    <div className="container ">
      <div className="row">
       
        <div className="col-sm my-5 d-flex align-items-center mx-4 ">
          <div>
            <p className="fs-1 fw-bold ">Un bureau d’études innovant</p>
            <p className={manrope.className}>
              Derrière chaque toit exceptionnel se cache une équipe de cerveaux
              brillants. Notre bureau d'études est l'endroit où l'innovation et
              la précision se marient pour créer des toits qui défient les
              conventions. Nous faisons des calculs pour que vous n'ayez pas à
              le faire !
            </p>
            <Button
              title={"EN SAVOIR PLUS"}
              style={"btn btn-light shadow-sm "}
            />
          </div>
        </div>
        <div className="col-sm my-5 " id="secondImg">
          <Image src={"/assets/eighthimg.png"} alt="bureau" width={385} height={404} />
        </div>
      </div>
    </div>
  );
}

export default EighthCard;
