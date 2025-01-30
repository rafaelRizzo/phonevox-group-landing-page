import Navbar from "@/components/appComponents/Navbar";
import Rodape from "@/components/appComponents/Rodape";

export default function LayoutLanding({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Rodape />
        </>
    );
}