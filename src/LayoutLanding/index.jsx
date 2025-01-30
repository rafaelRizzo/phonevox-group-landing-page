import Ajuda from "@/components/appComponents/Ajuda";
import Navbar from "@/components/appComponents/Navbar";
import Rodape from "@/components/appComponents/Rodape";

export default function LayoutLanding({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Ajuda />
            <Rodape />
        </>
    );
}