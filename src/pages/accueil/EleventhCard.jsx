function EleventhCard() {
  return (
    <div className="container elevenCard">
      <div className="d-flex align-items-center justify-content-center gap-5">
        <div>
          <p className="fs-1 fw-bold text-center my-5">ILS PARLENT DE NOUS</p>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <div className="btn btn-dark">
            <img src="/assets/arrowRight.png" alt="" srcset="" />
          </div>
          <div className="btn btn-dark">
            <img src="/assets/arrowLeft.png" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gap-4 d-flex align-items-center">
            <div className="col-sm bg-light d-flex justify-content-center">
                <img src="/assets/AB.png" alt="" srcset=""  width={70}/>
            </div>
            <div className="col-sm p-3 bg-light d-flex justify-content-center">
                <img src="/assets/gazette.png" alt="" srcset="" width={80} />
            </div>
            <div className="col-sm p-4 bg-light d-flex justify-content-center">
                <div className="d-flex">
                <img src="/assets/monacoMatin.png" alt="" srcset="" width={100} />
                </div>
            </div>
            <div className="col-sm p-3 bg-light d-flex justify-content-center">
                <img src="/assets/monacoTribune.png" alt="" srcset="" width={80} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default EleventhCard;
