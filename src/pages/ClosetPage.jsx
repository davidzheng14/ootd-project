import { ListViewer } from "../components/ListViewer";
import { Header } from '../components/Header.jsx';
import { useState } from 'react';

export function ClosetPage({ closet, setCloset, outfitList, setOutfitList }) {

    const [display, setDisplay] = useState([]);
    const [outfitMode, setOutfitMode] = useState(false);
    const [outfitDraft, setOutfitDraft] = useState([]);

    function showAll() {
        setDisplay([...closet]);
    }

    function showTops() {
        setDisplay([...closet].filter((item) => item.category == "tops"));
    }

    function showBottoms() {
        setDisplay([...closet].filter((item) => item.category == "bottoms"));
    }

    function showOuterwear() {
        setDisplay([...closet].filter((item) => item.category == "outerwear"));
    }

    function showOnePieces() {
        setDisplay([...closet].filter((item) => item.category == "one-pieces"));
    }

    function showUndergarments() {
        setDisplay([...closet].filter((item) => item.category == "undergarments"));
    }

    function showFootwear() {
        setDisplay([...closet].filter((item) => item.category == "footwear"));
    }

    function showAccessories() {
        setDisplay([...closet].filter((item) => item.category == "accessories"));
    }

    function showOthers() {
        setDisplay([...closet].filter((item) => item.category == "others"));
    }

    function handleMode() {
        setOutfitMode(outfitMode ? false : true);
    }

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






    return (
        <>
            <Header />
            <div className="tab-button">
                Closet
            </div>
            <div>
                <button onClick={showAll}>View All</button>
                <button onClick={showTops}>Tops</button>
                <button onClick={showBottoms}>Bottoms</button>
            </div>
            <div>
                <button onClick={showOuterwear}>Outerwear</button>
                <button onClick={showOnePieces}>One-pieces</button>
                <button onClick={showUndergarments}>Undergarments</button>
            </div>
            <div>
                <button onClick={showFootwear}>Footwear</button>
                <button onClick={showAccessories}>Accessories</button>
                <button onClick={showOthers}>Others</button>
            </div>
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
            <div>
                <h1> Outfit List: </h1>
                Outfits: {outfitList.length}
                {outfitList.map((outfit) => {
                    return (
                        <div className="outfit">
                            <ListViewer list={outfit} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}