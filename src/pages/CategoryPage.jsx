import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { ListViewer } from "../components/ListViewer";
import './CategoryPage.css';

export function CategoryPage({ closet, setCloset, outfitList, setOutfitList }) {

    const [display, setDisplay] = useState([]);

    const { category } = useParams();

    const navigate = useNavigate();

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

    useEffect(() => {
        if(category == "all"){
            setDisplay([...closet]);
        } else {
            setDisplay([...closet].filter((item) => item.category == category));
        }
    }, [category]);

    


    return (
        <>
            <div className="title">{category.charAt(0).toUpperCase() + category.slice(1)}</div>

            <ul className="closet-nav">
                <li onClick={() => navigate('/closet/all')}>All</li>
                <li onClick={() => navigate('/closet/tops')}>Tops</li>
                <li onClick={() => navigate('/closet/bottoms')}>Bottoms</li>
                <li onClick={() => navigate('/closet/outerwear')}>Outerwear</li>
                <li onClick={() => navigate('/closet/one-pieces')}>One-pieces</li>
                <li onClick={() => navigate('/closet/undergarments')}>Undergarments</li>
                <li onClick={() => navigate('/closet/footwear')}>Footwear</li>
                <li onClick={() => navigate('/closet/accessories')}>Accessories</li>
                <li onClick={() => navigate('/closet/others')}>Others</li>
                {/* <li onClick={() => setDisplay([...closet])}>All</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "tops"))}>Tops</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "bottoms"))}>Bottoms</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "outerwear"))}>Outerwear</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "one-pieces"))}>One-pieces</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "undergarments"))}>Undergarments</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "footwear"))}>Footwear</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "accessories"))}>Accessories</li>
                <li onClick={() => setDisplay([...closet].filter((item) => item.category == "others"))}>Others</li> */}
            </ul>

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
            {/* <div>
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
            </div> */}

            <ListViewer list={display} />

            

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