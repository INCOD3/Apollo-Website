import { ProductProps, deleteProduct } from "../../api/ServiceRequests";

import { useAuthHeader } from 'react-auth-kit';

export function Product(props: ProductProps) {
    const header = useAuthHeader();

    return (
        <div className="card border-0 shadow p-4 d-flex">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row w-100 justify-content-between">
                    <h1 className="fs-5 fw-bold text-primary my-0">{props.name.toUpperCase()}</h1>
                    <button
                        className="btn btn-outline-danger py-1"
                        onClick={() => {
                            deleteProduct(header().substring(7), props.id, () => {
                                if (props.onDelete) props.onDelete()
                            });
                        }}
                    >x</button>
                </div>
                <h1 className="text-secondary fw-bold fs-5 mt-0 my-0">R$ {props.price.toString().replace(".", ",")}</h1>
            </div>
            <hr className="my-1" />
            <p className="fs-6 text-secondary mb-0">{props.description}</p>
        </div>
    );
}