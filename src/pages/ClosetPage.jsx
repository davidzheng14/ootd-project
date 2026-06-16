
import { useState } from 'react';
import { Link } from 'react-router';
import './ClosetPage.css';

export function ClosetPage() {

    
    

    // function showAll() {
    //     setDisplay([...closet]);
    // }

    // function showTops() {
    //     setDisplay([...closet].filter((item) => item.category == "tops"));
    // }

    // function showBottoms() {
    //     setDisplay([...closet].filter((item) => item.category == "bottoms"));
    // }

    // function showOuterwear() {
    //     setDisplay([...closet].filter((item) => item.category == "outerwear"));
    // }

    // function showOnePieces() {
    //     setDisplay([...closet].filter((item) => item.category == "one-pieces"));
    // }

    // function showUndergarments() {
    //     setDisplay([...closet].filter((item) => item.category == "undergarments"));
    // }

    // function showFootwear() {
    //     setDisplay([...closet].filter((item) => item.category == "footwear"));
    // }

    // function showAccessories() {
    //     setDisplay([...closet].filter((item) => item.category == "accessories"));
    // }

    // function showOthers() {
    //     setDisplay([...closet].filter((item) => item.category == "others"));
    // }


    

    






    return (
        <>
            {/* <div className="tab-button">
                <h1>Closet </h1>
            </div> */}
            {/* <div>
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
            </div> */}

            
            <div className="closet-page">
                <div className="closet-button">
                    <i class="ph ph-coat-hanger"></i>
                    <Link to="/closet/all">View All</Link>
                    
                </div>
                <div className="closet-button">
                    <i class="ph ph-t-shirt"></i>
                    <Link to="/closet/tops">Tops</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-pants"></i>
                    <Link to="/closet/bottoms">Bottoms</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-hoodie"></i>
                    <Link to="/closet/outerwear">Outerwear</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-dress"></i>
                    <Link to="/closet/one-pieces">One-pieces</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-sock"></i>
                    <Link to="/closet/undergarments">Undergarments</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-sneaker"></i>
                    <Link to="/closet/footwear">Footwear</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-sketch-logo"></i>
                    <Link to="/closet/accessories">Accessories</Link>
                </div>
                <div className="closet-button">
                    <i class="ph ph-question"></i>
                    <Link to="/closet/others">Others</Link>
                </div>
            </div>
            

            
            
        </>
    );
}