import "../globalPages.css";

function SeventhCard() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <p className="col-sm-6 fs-1 fw-bold text-center">Maîtrisez l'Art de la Couverture : Notre Savoir-faire en Action</p>
      </div>
      <div className="card  " id="cards">
        <img src="/assets/firstProject.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nom de la réalisation</h5>
          <p className="card-text ">
            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl
            rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas
            tellus rutrum tellus. 
          </p>
          <div className="d-flex justify-content-end">
          <a href="#" className="btn btn-light shadow ">
            PlUS D'INFOS
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhCard;
