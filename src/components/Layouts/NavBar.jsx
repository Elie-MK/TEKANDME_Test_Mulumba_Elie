"use client";
import { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import "./globalLayout.css";
import Link from 'next/link'

function NavBar() {
  const [select, setSelect] = useState("accueil");

  return (
    <nav className="navbar navbar-expand-lg  mx-5 p-4 bg-white">
      <div className="container-fluid">
        <div>
          <Image src="/assets/Logo.jpg" alt="Logo" width={70} height={45} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li onClick={()=>setSelect("accueil")} className={`${select === "accueil"?"nav-item fw-bold":""}`}>
              <Link className="nav-link " aria-current="page" href="/">
                ACCUEIL
              </Link>
            </li>
            <li onClick={()=>setSelect("apropos")} className={`${select === "apropos"?"nav-item fw-bold":""}`}>
              <Link className="nav-link" href="#">
                A PROPOS
              </Link>
            </li>
            <li onClick={()=>setSelect("bureau")} className={`${select === "bureau"?"nav-item fw-bold":""}`}>
              <Link className="nav-link" href="#">
                BUREAU D'ÉTUDES
              </Link>
            </li>
            <li onClick={()=>setSelect("securisation")} className={`${select === "securisation"?"nav-item fw-bold":""}`}>
              <Link className="nav-link" href="#">
                SÉCURISATION
              </Link>
            </li>
            <li onClick={()=>setSelect("service")} className={`${select === "service"?"nav-item fw-bold":""} dropdown`}>
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={()=>setSelect("realisations")} className={`${select === "realisations"?"nav-item fw-bold":""}`}>
              <Link className="nav-link" href="#">
                RÉALISATIONS
              </Link>
            </li>
            <li onClick={()=>setSelect("actualites")} className={`${select === "actualites"?"nav-item fw-bold":""}`}>
              <Link className="nav-link" href="#">
                ACTUALITÉS
              </Link>
            </li>
          </ul>
          <Button
            title={"CONTACT"}
            style="btn btn-warning fw-bold btn-rounded-none"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
