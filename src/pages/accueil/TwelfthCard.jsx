import Button from "@/components/Button";

function TwelfthCard() {
  return (
    <div className="twelfthCard my-5">
      <div className="container   ">
        <div className=" position-absolute text-light  ">
        <div className="row " id="contentTweflth">
        <div className="col-sm-6 ">
        <div>
          <p className="fs-1">Evaluez votre projet</p>
        </div>
        <div>
          <p>
            Vous envisagez des travaux de couverture ou de toiture ? Ne cherchez
            pas plus loin. Remplissez quelques détails, cliquez, et nous vous
            enverrons rapidement un devis personnalisé pour votre projet.
          </p>
        </div>
        <div>
            <Button title={"Demande de devis en ligne"} style={"btn btn-warning fw-bold rounded-0"} />
        </div>
        </div>
        <div className="col-sm"></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TwelfthCard;
