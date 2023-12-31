import Button from "@/components/Button";
import FeedBackCard from "@/components/FeedBackCard";

function TenthCard() {
  return (
    <div>
      <div className="tenthCard">
        <div className="container">
        <div className="row position-absolute">
          <div className="col-sm  d-flex align-items-center">
          <div>
          <div>
              <img src="/assets/Etoile.png" alt="" srcset="" />
            </div>
            <div>
              <p className="fs-1 text-light ">Ce que Pensent nos clients</p>
            </div>
            <div>
              <Button title={"PRENONS CONTACT"} style={"btn btn-warning rounded-0"} />
            </div>
          </div>
          </div>

          <div className="col-sm p-3" id="feedback">
            <FeedBackCard
              image={"assets/claradupont.png"}
              name={"Clara dupont"}
              text={
                "J'ai fait appel à l'Entreprise Monégasque de Couverture pour une réparation de toit et je suis ravi du résultat. Leur équipe est compétente, efficace, et l'humour qu'ils apportent à leur travail est un vrai plus. Je les recommande vivement !"
              }
            />
            <FeedBackCard
              image={"assets/francois.png"}
              name={"François dupuis"}
              text={
                "C'est rare de trouver une entreprise qui peut allier compétence technique et convivialité de cette manière. Je les recommande vivement à tous ceux qui ont besoin de services de couverture de premier ordre."
              }
            />
            <FeedBackCard
              image={"assets/aurelien.png"}
              name={"Aurélien lemarchand"}
              text={
                "C'est un vrai plaisir de travailler avec eux. Récemment, j'ai eu besoin d'une réparation de toit en urgence, et ils ont réagi rapidement et avec professionnalisme. Le résultat était impeccable, comme toujours. Je recommande cette entreprise à tous ceux qui recherchent des experts de la couverture avec une touche d'originalité."
              }
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TenthCard;
