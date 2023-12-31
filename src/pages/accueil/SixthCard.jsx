import Button from "@/components/Button";
import "../globalPages.css";

function SixthCard() {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div>
          <div className="row d-flex justify-content-center">
            <p className="col-sm-9 fs-2 fw-bold text-center">
              UNE CONSTRUCTION UNIQUE AU MONDE
            </p>
          </div>
          <div
            className="d-flex gap-4 align-items-center justify-content-center "
            id="responsiveSixth"
          >
            <div className="">
              <div className="d-flex gap-3 align-items-center">
                <p>Découvrez la villa Carmelha à Monaco </p>
                <img
                  src="/assets/monaco.png"
                  alt=""
                  width={30}
                  id="firstImgSixth"
                />
              </div>
            </div>
            <div className="btnSixth">
              <Button
                title={"VOIR LE PROJET"}
                style={"btn btn-dark  rounded-0"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5 ">
        <div className=" d-flex justify-content-center  " id="mainSixth">
          <img src="/assets/videobg.png"  />
        </div>
        <div className="d-flex justify-content-center" id="mascotSixth">
          <img src="/assets/castor.png" width={200} />
        </div>
      </div>

      <div className="d-flex justify-content-center my-5 p-5">
      <button className="btn btn-light rounded-0 shadow align-items-center  d-flex">
      
          <img src="/assets/youtube.png" />
   
        <div className=" fs-5 fw-bold">
          VOIR NOTRE CHAINE YOUTUBE
        </div>
      </button>
      </div>
    </div>
  );
}

export default SixthCard;
