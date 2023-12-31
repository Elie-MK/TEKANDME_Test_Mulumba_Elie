
import "./globalComponents.css";

function CardCarousel() {
  return (
    <div>
      <div className="" id="dataImg">
        <div className="position-absolute mx-3 my-4">
        <div className=" d-flex justify-content-start  ">
          <div className="p-2">
          <img src="/assets/Vector1.png" alt="" srcset="" />
          </div>
        </div>
         <div className="" id="marginText">
         <p className="text-light fs-4 fw-bold">Charpente</p>
          <p className="text-light" id="paragraph">
            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
            rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
            tellus rutrum tellus...
          </p>
         </div>
        </div>
      </div>
      
    </div>
  );
}

export default CardCarousel;
