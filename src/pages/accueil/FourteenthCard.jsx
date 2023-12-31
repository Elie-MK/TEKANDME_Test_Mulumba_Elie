import Button from "@/components/Button";

function FourteenthCard() {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <div className="">
          <p className="fs-1">Ce qu’il se passe sur insta</p>
        </div>
        <div>
          <img src="/assets/instagram.png" alt=""  />
        </div>
      </div>

      <div className="">
      <div className=" position-absolute z-1 d-flex  justify-content-center ">
          <div className="btn btn-dark border border-3 border-light  rounded-0">
            <img src="/assets/arrowRight.png" alt="" srcset="" />
          </div>
          <div className="btn btn-dark border border-3 border-light rounded-0">
            <img src="/assets/arrowLeft.png" alt="" srcset="" />
          </div>
        </div>
        <div className="position-relative">
        <div className="row ">
          <div className="col-3">
            <img src="/assets/insta.png" alt="" width={250} />
          </div>
          <div className="col-3">
            <img src="/assets/insta.png" alt="" width={250} />
          </div>
          <div className="col-3">
            <img src="/assets/insta.png" alt="" width={250} />
          </div>
          <div className="col-3">
            <img src="/assets/insta.png" alt="" width={250} />
          </div>
        </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4 ">
        <Button title={"REJOIGNEZ-NOUS SUR INSTAGRAM"} style={"btn btn-light fw-bold"} />
      </div>
    </div>
  );
}

export default FourteenthCard;
