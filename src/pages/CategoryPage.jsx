import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { ListViewer } from "../components/ListViewer";

export function CategoryPage({ closet, setCloset, outfitList, setOutfitList }) {

    const [display, setDisplay] = useState([]);

    const { category } = useParams();

    const [outfitMode, setOutfitMode] = useState(false);
    const [outfitDraft, setOutfitDraft] = useState([]);

    function addToDraft(item) {
        { !outfitDraft.some(o => o.id === item.id) && setOutfitDraft([...outfitDraft, item]) }
    }

    function handleRemove(id) {
        setCloset(prevCloset => prevCloset.filter((item) => item.id !== id));
        setDisplay(prevDisplay => prevDisplay.filter((item) => item.id !== id));
    }

    function handleAddOutfit() {
        setOutfitList([outfitDraft, ...outfitList]);
        setOutfitDraft([]);
    }

    function handleMode() {
        setOutfitMode(outfitMode ? false : true);
    }

    


    return (
        <>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>


            <div>
                Sort by:
                <select>
                    <option> Latest </option>
                    <option> Oldest </option>
                    <option> Price [Low - High] </option>
                    <option> Price [High - Low] </option>
                </select>
            </div>
            <div>
                <button onClick={handleMode}> Outfit Mode </button>: {outfitMode ? "On" : "Off"}
            </div>
            <div>
                {display.map((item) => {
                    return (
                        <>
                            <div className="item" key={item.id} onClick={outfitMode && (() => addToDraft(item))}>
                                <div className="image">
                                    <img src={item.image} width="100" height="100" />
                                </div>
                                <div> Brand: {item.brand} </div>
                                <div> Type: {item.type} </div>
                                <div> Size: {item.size} </div>
                                <div> Color: {item.color} </div>
                                <div> Price: {item.price} </div>
                                <div> Date: {item.date} </div>

                                <div> Category : {item.category} </div>
                            </div>
                            <button onClick={() => handleRemove(item.id)}> Remove </button>
                        </>
                    );
                })}
            </div>

              

            <div>
                <h1>Outfit Draft: </h1>
                <ListViewer list={outfitDraft} />
            </div>
            <div>
                {outfitDraft.length > 0 && <button onClick={handleAddOutfit}> Add Outfit </button>}
            </div>
        </>
    );
}