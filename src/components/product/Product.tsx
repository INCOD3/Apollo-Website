interface ProductProps {
    name: string;
    price: number;
    description?: string;
}

export function Product(props: ProductProps) {
    return (
        <div className="card border-primary p-2 d-flex">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row w-100 justify-content-between">
                    <h1 className="fs-5 fw-bold text-primary my-0">{props.name.toUpperCase()}</h1>
                    <button className="btn btn-outline-danger py-1">x</button>
                </div>
                <h1 className="text-secondary fw-bold fs-5 mt-0 my-0">R$ {props.price.toString().replace(".", ",")}</h1>
            </div>
            <hr className="my-1" />
            <p className="fs-6 text-secondary mb-0">{props.description}</p>
        </div>
    );
}