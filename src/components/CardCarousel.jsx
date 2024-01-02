import "./globalComponents.css";

function CardCarousel() {
  return (
    <div className="d-sm-flex  justify-content-sm-between ">
      <div className="mb-2" id="dataImg">
        <div className="position-absolute mx-3 my-4">
          <div className=" d-flex justify-content-start  ">
            <div className="p-2">
              <img src="/assets/Vector1.png" alt="" />
            </div>
          </div>
          <div className="" id="marginText">
            <p className="text-light fs-4 fw-bold">Charpente</p>
            <p className="text-light" id="paragraph">
              Morbi tristique senectus et netus et malesuada fames ac turpis.
              Nisl rhoncus mattis rhoncus urna neque viverra...
            </p>
          </div>
        </div>
      </div>
      <div className="" id="dataImg2">
        <div className="position-absolute mx-3 my-4">
          <div className=" d-flex justify-content-start  ">
            <div className="p-2">
              <img src="/assets/Vector2.png" alt="" />
            </div>
          </div>
          <div className="" id="marginText">
            <p className="text-light fs-4 fw-bold">Zinguerie</p>
            <p className="text-light" id="paragraph">
              Morbi tristique senectus et netus et malesuada fames ac turpis.
              Nisl rhoncus mattis rhoncus urna neque viverra...
            </p>
          </div>
        </div>
      </div>
      <div className="" id="dataImg3">
        <div className="position-absolute mx-3 my-4">
          <div className=" d-flex justify-content-start  ">
            <div className="p-2">
              <img src="/assets/Vector3.png" alt="" />
            </div>
          </div>
          <div className="" id="marginText">
            <p className="text-light fs-4 fw-bold">Façade</p>
            <p className="text-light" id="paragraph">
              Morbi tristique senectus et netus et malesuada fames ac turpis.
              Nisl rhoncus mattis rhoncus urna neque viverra...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
