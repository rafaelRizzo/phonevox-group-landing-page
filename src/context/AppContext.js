"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [logos, setLogos] = useState([]);
    const [testemunhos, setTestemunhos] = useState([]);
    const [perguntasFaq, setPerguntasFaq] = useState([]);

    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const response = await axios.get("/logos.json");
                const logoPaths = response.data.map((name) => `/logos/${name}`);
                setLogos(logoPaths);
            } catch (error) {
                console.error("Erro ao buscar logos:", error);
            }
        };

        const fetchTestemunhos = async () => {
            try {
                const response = await axios.get("/testemunhos.json");
                setTestemunhos(response.data);
            } catch (error) {
                console.error("Erro ao buscar testemunhos:", error);
            }
        };

        const fetchFaq = async () => {
            try {
                const response = await axios.get("/faq.json");
                setPerguntasFaq(response.data);
            } catch (error) {
                console.error("Erro ao buscar FAQ:", error);
            }
        };

        // Executa as três funções de forma independente
        fetchLogos();
        fetchTestemunhos();
        fetchFaq();
    }, []);

    return (
        <AppContext.Provider value={{ logos, testemunhos, perguntasFaq }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook personalizado para consumir o contexto
export const useAppContext = () => useContext(AppContext);
