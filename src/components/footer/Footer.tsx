import "./styles.scss";

export function Footer() {
    return(
        <div className="container-fluid mt-5">
            <hr />
            <div className="d-flex contents">
                <div className="d-flex flex-column gap-2 footer">
                    <h1 className="apollo fw-bold">APOLLO</h1>
                    <p className="text-secondary">O projeto tem a intenção de solucionar o problema de vendas de produtos pelo Discord de forma manual, automatizando o processo de cobrança e de entrega de produtos.</p>
                </div>
                <div className="d-flex gap-5 w-50 justify-content-around contents">
                    <div className="d-flex flex-column support">
                        <h1 className="text-secondary fw-bold fs-3 mb-3">Suporte</h1>
                        <ul className="list-unstyled">
                            <li><p className="text-secondary lh-1">Área do cliente</p></li>
                            <li><p className="text-secondary lh-1">Email</p></li>
                            <li><p className="text-secondary lh-1">Discord</p></li>
                            <li><p className="text-secondary lh-1">Termos e serviços</p></li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column services">
                        <h1 className="text-secondary fw-bold fs-3 mb-3">Serviços</h1>
                        <ul className="list-unstyled">
                            <li><p className="text-secondary lh-1">Github</p></li>
                            <li><p className="text-secondary lh-1">Discord</p></li>
                            <li><p className="text-secondary lh-1">Youtube</p></li>
                            <li><p className="text-secondary lh-1">Termos e serviços</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}