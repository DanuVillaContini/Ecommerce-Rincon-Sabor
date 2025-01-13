import LogoTitle from "../components/LogoTitle";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/SecondNavbar";
import MainCorousel from "../components/MainCorousel";
import CustomCards from '../components/CustomCards';
import img from '../assets/smoothieBananaAnana.jpg';
// import img2 from '../assets/changuche.jpg';



export default function HomeScreen() {
    return (
        <>
            <Navbar />
            <LogoTitle />
            <SecondNavbar />
            <MainCorousel />
            <CustomCards
                image={img}
                title="Smoothie de Banana y Ananá"
                description="Delicioso smoothie natural de banana y ananá, perfecto para cualquier momento del día."
                price="$150"
            />


        </>
    )
}
