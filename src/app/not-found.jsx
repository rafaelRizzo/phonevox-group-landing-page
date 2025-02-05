export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold">Página não encontrada</h1>
            <p className="text-lg text-gray-500 mt-2">Oops! Parece que essa página não existe.</p>
            <a href="/" className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
                Voltar para a página inicial
            </a>
        </div>
    );
}
