import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const manrope = Manrope({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="container ">
      <div className="d-block d-sm-flex">
        <div className="col-sm my-4">
          <div>
            <div>
              <Image src="/assets/Logo.jpg" alt="Logo" width={70} height={45} />
            </div>

            <div>
              <p className="text-uppercase fw-bold mt-3 fs-3">
                prenez rendez-vous dès maintenant
              </p>
            </div>
            <div className="my-4 ">
              <div className="d-flex d-sm-flex align-items-center ">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                      fill="#2B2B2B"
                      fillOpacity="0.7"
                    />
                  </svg>
                </div>

                <div className={manrope.className}>
                  <p className="mt-3 fs-5">1 rue Bel Respiro - 98000 Monaco</p>
                </div>
              </div>

              <div className="d-sm-flex gap-3 align-items-center ">
              <div className="col-md-6 col-8 mt-3">
                <div className="input-group mb-3 shadow">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 13.42V16.9561C18 17.4811 17.5941 17.9167 17.0705 17.9537C16.6331 17.9846 16.2763 18 16 18C7.1634 18 0 10.8366 0 2C0 1.72371 0.01545 1.36687 0.04635 0.9295C0.08337 0.40588 0.51894 0 1.04386 0H4.5801C4.83678 0 5.05176 0.19442 5.07753 0.4498C5.10067 0.67907 5.12218 0.86314 5.14207 1.00202C5.34435 2.41472 5.75753 3.75936 6.3487 5.00303C6.44359 5.20265 6.38171 5.44159 6.20185 5.57006L4.04355 7.1118C5.35752 10.1811 7.8189 12.6425 10.8882 13.9565L12.4271 11.8019C12.5572 11.6199 12.799 11.5573 13.001 11.6532C14.2446 12.2439 15.5891 12.6566 17.0016 12.8584C17.1396 12.8782 17.3225 12.8995 17.5502 12.9225C17.8056 12.9483 18 13.1633 18 13.42Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="+3377 93502022"
                    
                    aria-label="number"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <Button title={"Être contacté"} style={"btn rounded-0 btn-warning fw-bold "} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm my-4 ">
          <div className="row">
            <div className="col-sm">
              <p className="fw-bold">NAVIGATION</p>
              <div className={manrope.className}>
              <div className="mb-3">
                <Link href="#">Accueil</Link>
              </div>
              <div className="mb-3">
                <Link href="#">A propos</Link>
              </div>
              <div className="mb-3">
                <Link href="#">Bureau d'études</Link>
              </div>
              <div className="mb-3">
                <Link href="#">Travaux</Link>
              </div>
              <div className="mb-3">
                <Link href="#">Actualtés</Link>
              </div>
              </div>
            </div>
            <div className="col-sm">
              <p className="fw-bold">SERVICES</p>
              <div className={manrope.className}>

              <div className="mb-3">
                <Link href="#">Charpente</Link>
              </div>
              <div className="mb-3">
                <Link href="#">Couverture</Link>
              </div>
              <div className="mb-3">
                <Link href="#">Zinguerie</Link>
              </div>
              <div>
                <Link href="#">Façades</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-md-flex align-items-center justify-content-between pb-2">
        <div className="">
          <div className={manrope.className}>
          <p className="textCopyrightFooter fs-5">
            © 2023, tous droits réservés. Développé par Tendances.Group{" "}
          </p>
          </div>
        </div>
        <div className="col-sm d-none d-sm-inline mx-5">
          <img src="/assets/castordemi.png" alt="" width={200} />
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
    </footer>
  );
}

export default Footer;
