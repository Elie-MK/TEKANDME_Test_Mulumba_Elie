import Footer from "./Footer";
import NavBar from "./NavBar";

function MainLayout({children}) {
    return (
        <>
            <NavBar/>
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;