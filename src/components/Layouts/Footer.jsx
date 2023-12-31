import Image from "next/image";
import Link from 'next/link'

function Footer() {
  return (
    <footer className="container ">
      <div className="row">
        <div className="col-sm my-4">
          <div>
            <div>
              <Image src="/assets/Logo.jpg" alt="Logo" width={70} height={45} />
            </div>

            <div className="my-4 ">
              <div className="d-flex align-items-center">
                <img src="/assets/location.png" alt="" />
                <p className=" ">1 rue Bel Respiro - 98000 Monaco</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm my-4 ">
            <div className="row">
          <div className="col-sm">
            <p className="fw-bold">NAVIGATION</p>
            <div>
              <Link  href="#">Accueil</Link>
            </div>
            <div>
              <Link  href="#">A propos</Link>
            </div>
            <div>
              <Link  href="#">Bureau d'études</Link>
            </div>
            <div>
              <Link  href="#">Travaux</Link>
            </div>
            <div>
              <Link  href="#">Actualtés</Link>
            </div>
          </div>
          <div className="col-sm">
          <p className="fw-bold">SERVICES</p>
        
            <div>
              <Link  href="#">Charpente</Link>
            </div>
            <div>
              <Link  href="#">Couverture</Link>
            </div>
            <div>
              <Link  href="#">Zinguerie</Link>
            </div>
            <div>
              <Link href="#">Façades</Link>
            </div>
          </div>
            </div>
        </div>
        <div className="row d-flex align-items-center">
            <div className="col-sm-5">
                <p className="textCopyrightFooter" >© 2023, tous droits réservés. Développé par Tendances.Group </p>
            </div>
            <div className="col-sm">
                <img src="/assets/castordemi.png" alt="" width={100} />
            </div>
            <div className="col-sm d-flex gap-3">
                <div>
                    <img src="/assets/fb.png" alt="" />
                </div>
                <div>
                    <img src="/assets/inst.png" alt="" />
                </div>
                <div>
                    <img src="/assets/in.png" alt="" />
                </div>
                <div>
                    <img src="/assets/yt.png" alt="" />
                </div>
                
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
