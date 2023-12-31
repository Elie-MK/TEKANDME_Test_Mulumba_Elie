import CardCarousel from "@/components/CardCarousel";
import "../globalPages.css";
import Button from "@/components/Button";

function FifthCard() {
  return (
    <div className="bg-light p-3">
      <div className="container">
        <div className="row d-flex justify-content-center p-4">
          <div className="col-9">
            <p className="text-uppercase fs-1 fw-bold text-center">
              Des Toits Qui Font la pluie et le beau temps
            </p>
          </div>
        </div>

        <div>
          <CardCarousel />
        </div>

        <div className="d-flex my-5 justify-content-center ">
          <Button
            title={"VOIR TOUS NOS SERVICES"}
            style={"btn btn-dark rounded-0"}
          />
        </div>
      </div>
    </div>
  );
}

export default FifthCard;
