"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie"; // Importa o universal-cookie

const AppContext = createContext();
const cookies = new Cookies(); // Cria uma instância do Cookies

export const AppProvider = ({ children }) => {
    const [logos, setLogos] = useState([]);
    const [testemunhos, setTestemunhos] = useState([]);
    const [perguntasFaq, setPerguntasFaq] = useState([]);

    // Função para verificar se os dados estão no cookie e são válidos
    const getFromCookie = (key) => {
        const cachedData = cookies.get(key);
        if (cachedData) {
            const { data, timestamp } = cachedData;
            const isValid = Date.now() - timestamp < 24 * 60 * 60 * 1000; // 24 horas em milissegundos
            if (isValid) {
                return data;
            }
        }
        return null;
    };

    // Função para salvar no cookie
    const saveToCookie = (key, data) => {
        const timestamp = Date.now();
        cookies.set(key, { data, timestamp }, { path: "/", expires: new Date(timestamp + 24 * 60 * 60 * 1000) }); // Expira em 24 horas
    };

    useEffect(() => {
        const fetchLogos = async () => {
            const cachedLogos = getFromCookie("logos");
            if (cachedLogos) {
                setLogos(cachedLogos);
                return;
            }
            try {
                const response = await axios.get("/jsons/logos.json");
                const logoPaths = response.data.map((name) => `/logos/${name}`);
                setLogos(logoPaths);
                saveToCookie("logos", logoPaths);
            } catch (error) {
                console.error("Erro ao buscar logos:", error);
            }
        };

        const fetchTestemunhos = async () => {
            const cachedTestemunhos = getFromCookie("testemunhos");
            if (cachedTestemunhos) {
                setTestemunhos(cachedTestemunhos);
                return;
            }
            try {
                const response = await axios.get("/jsons/testemunhos.json");
                setTestemunhos(response.data);
                saveToCookie("testemunhos", response.data);
            } catch (error) {
                console.error("Erro ao buscar testemunhos:", error);
            }
        };

        const fetchFaq = async () => {
            const cachedFaq = getFromCookie("faq");
            if (cachedFaq) {
                setPerguntasFaq(cachedFaq);
                return;
            }
            try {
                const response = await axios.get("/jsons/faq.json");
                setPerguntasFaq(response.data);
                saveToCookie("faq", response.data);
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
