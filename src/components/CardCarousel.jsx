import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

function CardCarousel() {
  return (
    <div className="d-sm-flex d-block  justify-content-sm-between ">
      <div className="mb-2" id="dataImg">
        <div className="position-absolute mx-3 my-4">
          <div className=" d-flex justify-content-start  ">
            <div className="p-2">
              <img src="/assets/Vector1.png" alt="" />
            </div>
          </div>
          <div className="" id="marginText">
            <p className="text-light fs-3 fw-bold">Charpente</p>
            <div className={manrope.className}>
              <p className="text-light fs-6 col-11 ">
                Morbi tristique senectus et netus et malesuada fames ac
                turpis...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2" id="dataImg2">
        <div className="position-absolute mx-3 my-4">
          <div className=" d-flex justify-content-start  ">
            <div className="p-2">
              <img src="/assets/Vector2.png" alt="" />
            </div>
          </div>
          <div className="" id="marginText">
            <p className="text-light fs-3 fw-bold">Zinguerie</p>
            <div className={manrope.className}>
              <p className="text-light fs-6 col-11 ">
                Morbi tristique senectus et netus et malesuada fames ac
                turpis...
              </p>
            </div>
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
            <p className="text-light fs-3 fw-bold">Façade</p>
            <div className={manrope.className}>
              <p className="text-light fs-6 col-11 ">
                Morbi tristique senectus et netus et malesuada fames ac
                turpis...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
