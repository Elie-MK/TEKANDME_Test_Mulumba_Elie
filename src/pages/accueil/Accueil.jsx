import { Manrope } from "next/font/google";
import Image from "next/image";

import EighthCard from "./EighthCard";
import EleventhCard from "./EleventhCard";
import FifthCard from "./FifthCard";
import FirstCard from "./FirstCard";
import FourteenthCard from "./FourteenthCard";
import NinthCard from "./NinthCard";
import SecondCard from "./SecondCard";
import SeventhCard from "./SeventhCard";
import SixthCard from "./SixthCard";
import TenthCard from "./TenthCard";
import ThirdCard from "./ThirdCard";
import ThirteenthCard from "./ThirteenthCard";
import TwelfthCard from "./TwelfthCard";
import FourthCard from "./fourthCard";
import Button from "@/components/Button";
import CardCarousel from "@/components/CardCarousel";
import CardItem from "@/components/CardItem";
import FeedBackCard from "@/components/FeedBackCard";
import AccordionCard from "@/components/AccordionCard";

const manrope = Manrope({ subsets: ["latin"] });
function Accueil() {
  return (
    <div className="bg-secondary-subtle">
      <div className="main">
        <div className="container">
          <div className="position-absolute col col-lg-4   alignText">
            <div>
              <ul>
                <li className="text-warning" id="monaco">
                  <p className="fs-5">30 ANS D'ACTIVITÉ À MONACO</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white fs-2 fw-bold ">
                L'ART DE LA COUVERTURE : NOTRE MONDE EN TOITURE
              </p>
            </div>
            <div className={manrope.className}>
              <p className="text-white-50 fs-6">
                Aenean sed adipiscing diam donec adipiscing. Aenean euismod
                elementum nisi quis eleifend quam. Lacus suspendisse faucibus
                interdum posuere lorem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second Part  */}

      <div className="container ">
        <div className="row">
          <div className="col-sm my-5 " id="secondImg">
            <Image
              src={"/assets/secondCardImg.png"}
              alt="histoire"
              width={385}
              height={404}
            />
          </div>
          <div className="col-sm my-5 d-flex align-items-center  ">
            <div className="">
              <p className="fs-1 fw-bold ">Notre Histoire en Quelques Tuiles</p>
              <div className={manrope.className}>
                <p className="secondText">
                  Depuis 30 ans, EM Couverture s'est taillé une réputation
                  impeccable dans le monde des toits à Monaco. Nous avons
                  réinventé la couverture, tout en gardant nos pieds (et nos
                  tuiles) sur terre. Découvrez notre parcours unique et notre
                  engagement envers l'excellence.
                </p>
              </div>
              <Button
                title={"EN SAVOIR PLUS"}
                style={"btn btn-light shadow-sm "}
              />
            </div>
          </div>
        </div>
      </div>

      {/* third Part  */}
      <div className="container-sm">
        <div className="mainThird ">
          <div className="position-absolute my-5 mx-4 d-flex align-items-center">
            <div>
              <div className="d-flex gap-4 align-items-center">
                <div>
                  <Image
                    src={"/assets/monaco.png"}
                    alt="monaco"
                    width={42}
                    height={32}
                  />
                </div>
                <div>
                  <Image
                    src={"/assets/france.png"}
                    alt="france"
                    width={42}
                    height={32}
                  />
                </div>
              </div>

              <div className="my-4">
                <div className="row">
                  <div className="col-sm-7 text-white-50  ">
                    <div>
                      <p className="fs-1 fw-bold text-light ">
                        NUMERO 1 A <span className="text-warning">MONACO</span>{" "}
                        ET EN REGION <span className="text-warning">PACA</span>
                      </p>
                      <div className={manrope.className}>
                        <p className="secondText" >
                          Notre engagement envers l'excellence, la précision et
                          la qualité nous a hissés au sommet de l'industrie de
                          la couverture à Monaco. Nous sommes fiers de notre
                          statut de numéro 1, acquis grâce à un travail acharné,
                          un savoir-faire inégalé et un sens de l'innovation
                          constant. Lorsque vous choisissez notre entreprise,
                          vous choisissez une tradition de qualité et une
                          réputation qui ont résisté à l'épreuve du temps.
                        </p>
                      </div>
                      <Button
                        title={"PRENONS CONTACT"}
                        style={"btn btn-warning fw-bold"}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4  mx-4 " id="imgthird">
                    <div>
                      <Image
                        src={"/assets/castor.png"}
                        alt="mascotte"
                        width={288}
                        height={447}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FourthCard */}
      <div className="container py-5">
        <div className="  ">
          <div className=" d-sm-flex justify-content-sm-between justify-content-center align-items-sm-center  secondText">
            <div className="text-center text-sm-center">
              <h1>+30</h1>
              <p className={manrope.className}>Ans d'activité</p>
            </div>
            <div className="text-center text-sm-center">
              <h1>+100</h1>
              <p className={manrope.className}>Projets terminés</p>
            </div>
            <div className="text-center text-sm-center">
              <h1 className="">32</h1>
              <p className={manrope.className}>Experts pour vous accompagner</p>
            </div>
          </div>
        </div>
      </div>

      {/*FifthCard  */}

      <div className="bg-light p-3">
        <div className="">
          <div className="row d-flex justify-content-center p-4">
            <div className="col-9">
              <p className="text-uppercase  fs-2 fw-bold text-center">
                Des Toits Qui Font la pluie et le beau temps
              </p>
            </div>
          </div>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner container-sm">
              <div className="d-flex d-sm-inline justify-content-center  carousel-item active ">
                <CardCarousel />
              </div>
            </div>
            <button
              className="carousel-control-prev d-none d-sm-inline"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn btn-transparent border border-3 border-white "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next d-none d-sm-inline"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn btn-transparent border border-3 border-white"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="d-flex my-5 justify-content-center ">
            <Button
              title={"VOIR TOUS NOS SERVICES"}
              style={"btn btn-dark rounded-0"}
            />
          </div>
        </div>
      </div>


{/* SixthCard */}

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
      <div className="container p-sm-5 ">
        <div className=" d-flex justify-content-center  " id="mainSixth">
          <img src="/assets/videobg.png"  />
        </div>
        <div className="d-flex justify-content-center" id="mascotSixth">
          <img src="/assets/castor.png" width={200} />
        </div>
      </div>

      <div className="d-flex justify-content-center my-sm-5 my-5 p-sm-5">
      <button className="btn btn-light rounded-0 shadow gap-2 align-items-center  d-sm-flex">
      
          <img src="/assets/youtube.png" width={30} />
   
        <div className=" fs-5 fw-bold">
          VOIR NOTRE CHAINE YOUTUBE
        </div>
      </button>
      </div>
    </div>

{/* SeventhCard */}

<div className="container p-3">
      <div className="row d-flex justify-content-center">
        <p className="col-sm-6 fs-1 fw-bold text-center">Maîtrisez l'Art de la Couverture : Notre Savoir-faire en Action</p>
      </div>
      <div className=" d-block    ">
      <div className="d-flex justify-content-center d-sm-flex justify-content-sm-start ">
      <CardItem title={"Nom de la réalisation"} img={"/assets/firstproject.png"} desc={"Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus.  Sodales ut eu sem integer. Urna cursus eget nunc scelerisque."} />
      </div>
      <div className="d-flex justify-content-center d-sm-flex justify-content-sm-end ">

      <CardItem title={"Roca Team Monaco"} img={"/assets/rocateam.png"} desc={"Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus.  Sodales ut eu sem integer. Urna cursus eget nunc scelerisque."} />
      </div>

      <div className="d-flex justify-content-center ">

      <CardItem title={"Carmelha"} img={"/assets/carmelha.png"} desc={"Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci phasellus egestas tellus rutrum tellus.  Sodales ut eu sem integer. Urna cursus eget nunc scelerisque."} />
      </div>
      </div>
    
    </div>

{/* EighthCard */}

<div className="container ">
      <div className="row">
       
        <div className="col-sm my-5 d-flex align-items-center  ">
          <div>
            <p className="fs-1 fw-bold ">Un bureau d’études innovant</p>
            <div className={manrope.className}>
            <p className="text-justify ">
              Derrière chaque toit exceptionnel se cache une équipe de cerveaux
              brillants. Notre bureau d'études est l'endroit où l'innovation et
              la précision se marient pour créer des toits qui défient les
              conventions. Nous faisons des calculs pour que vous n'ayez pas à
              le faire !
            </p>
            </div>
            <Button
              title={"EN SAVOIR PLUS"}
              style={"btn btn-light shadow-sm "}
            />
          </div>
        </div>
        <div className="col-sm my-5 d-flex justify-content-center d-none d-sm-inline  " >
          <Image src={"/assets/eighthimg.png"} alt="bureau" width={385} height={404} />
        </div>
      </div>
    </div>

{/* NinthCard */}

<div className="container ">
      <div className="row ">
        <div className="col-sm my-5  d-none d-sm-inline  " id="secondImg">
          <Image
            src={"/assets/ninthImg.png"}
            alt="histoire"
            width={385}
            height={404}
          />
          <div className="position-absolute" id="secondNinthImg">
          <Image
            src={"/assets/secondNinthImg.png"}
            alt="histoire"
            width={205}
            height={104}
          />
          </div>
        </div>
        <div className="col-sm my-5 d-flex align-items-center  ">
          <div>
            <p className="fs-1 fw-bold ">Inline sécurité</p>
            <p className={manrope.className}>
              Massa eget egestas purus viverra. Nisi scelerisque eu ultrices
              vitae. Orci eu lobortis elementum nibh tellus molestie nunc non.
              Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper
              viverra nam libero justo laoreet sit. Nibh praesent tristique
              magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc
              mattis enim ut tellus elementum sagittis.
            </p>
            <Button
              title={"EN SAVOIR PLUS"}
              style={"btn btn-light shadow-sm "}
            />
          </div>
        </div>
      </div>
    </div>

{/* TenthCard */}

<div>
      <div className="tenthCard p-sm-4 py-4">
        <div className="container-sm ">
        <div className="row position-absolute">
          <div className="col-sm  align-items-center">
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

          <div className="col-sm" id="feedback">
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

{/* EleventhCard */}

<div className="container elevenCard">
      <div className="d-flex align-items-center justify-content-center gap-5">
        <div>
          <p className="fs-1 fw-bold text-center my-5">ILS PARLENT DE NOUS</p>
        </div>
        <div className="d-sm-flex gap-4 align-items-center  d-none ">
          <div className="btn btn-dark">
            <img src="/assets/arrowRight.png" alt="" srcset="" />
          </div>
          <div className="btn btn-dark">
            <img src="/assets/arrowLeft.png" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="container">
       <div className="">
       <div className=" gap-5 d-block d-sm-flex justify-content-center align-items-center">
            <div className=" bg-white mb-3  px-3 d-flex justify-content-center">
                <img src="/assets/AB.png" alt="" srcset=""  width={70}/>
            </div>
            <div className=" p-3 bg-white mb-3 d-flex justify-content-center">
                <img src="/assets/gazette.png" alt="" srcset="" width={80} />
            </div>
            <div className=" p-4 bg-white mb-3 d-flex justify-content-center">
                <div className="d-flex">
                <img src="/assets/monacoMatin.png" alt="" srcset="" width={100} />
                </div>
            </div>
            <div className=" p-3 bg-white d-flex justify-content-center">
                <img src="/assets/monacoTribune.png" alt="" srcset="" width={80} />
            </div>
        </div>
       </div>
      </div>
    </div>

{/* TwelfthCard */}

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

{/* ThirteenthCard */}

<div className="container">
      <div className="row pb-4">
        <div className="col-sm d-none d-sm-flex ">
          <img src="assets/ThirrteenthImg.png" alt="" srcset="" width={350} />
        </div>
        <div className="col-sm d-flex align-items-center ">
          <div>
            <div>
              <p className="fs-1 fw-bold">Vos Interrogations Sous le Toit de l'Humour</p>
            </div>
            <AccordionCard />
          </div>
        </div>
      </div>
    </div>

{/* FourteenthCard */}
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
   
      <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner container-sm">
              <div className="d-block container gap-4 d-sm-flex justify-content-center  carousel-item active ">
              <div className="mb-4">
            <img src="/assets/insta.png" alt=""  />
          </div>
          <div className="mb-4">
            <img src="/assets/insta.png" alt=""  />
          </div>
          <div className="mb-4">
            <img src="/assets/insta.png" alt=""  />
          </div>
         
              </div>
            </div>
            <button
              className="carousel-control-prev d-none d-sm-inline"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn btn-transparent border border-3 border-white "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next d-none d-sm-inline"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn btn-transparent border border-3 border-white"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        
      </div>

      <div className="d-flex justify-content-center my-4 ">
        <Button title={"REJOIGNEZ-NOUS SUR INSTAGRAM"} style={"btn btn-light fw-bold"} />
      </div>
    </div>
    </div>
  );
}

export default Accueil;
