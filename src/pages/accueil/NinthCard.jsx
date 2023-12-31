import Button from "@/components/Button";
import { Manrope } from "next/font/google";
import Image from "next/image";
import "../globalPages.css";


const manrope = Manrope({ subsets: ["latin"] });

function NinthCard() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm my-5 " id="secondImg">
          <Image
            src={"/assets/ninthImg.png"}
            alt="histoire"
            width={385}
            height={404}
          />
          <div className="position-absolute" id="secondNinthImg">
          <Image
            src={"/assets/secondNinthImg.png"}
            alt="histoire"
            width={205}
            height={104}
          />
          </div>
        </div>
        <div className="col-sm my-5 d-flex align-items-center mx-4 ">
          <div>
            <p className="fs-1 fw-bold ">Inline sécurité</p>
            <p className={manrope.className}>
              Massa eget egestas purus viverra. Nisi scelerisque eu ultrices
              vitae. Orci eu lobortis elementum nibh tellus molestie nunc non.
              Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper
              viverra nam libero justo laoreet sit. Nibh praesent tristique
              magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc
              mattis enim ut tellus elementum sagittis.
            </p>
            <Button
              title={"EN SAVOIR PLUS"}
              style={"btn btn-light shadow-sm "}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NinthCard;
