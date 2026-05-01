import { useParams } from "react-router";

export function CategoryPage () {

    const { category } = useParams();

    return(
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
    );
}