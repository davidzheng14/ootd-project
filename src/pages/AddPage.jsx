import { useState, useRef } from "react";
import { Header } from '../components/Header.jsx';
import { ListViewer } from '../components/ListViewer.jsx';

export function AddPage({ closet, setCloset }) {

    const [image, setImage] = useState("");
    const imageRef = useRef("");
    const category = useRef("");
    const categories = [
        { type: "Blouse", category: "tops" },
        { type: "Button-Down Shirt", category: "tops" },
        { type: "Camisole", category: "tops" },
        { type: "Crop Top", category: "tops" },
        { type: "Henley", category: "tops" },
        { type: "Hoodie", category: "tops" },
        { type: "Polo Shirt", category: "tops" },
        { type: "Sweatshirt", category: "tops" },
        { type: "Sweater", category: "tops" },
        { type: "Tank Top", category: "tops" },
        { type: "T-Shirt", category: "tops" },
        { type: "Turtleneck", category: "tops" },

        { type: "Chinos", category: "bottoms" },
        { type: "Jeans", category: "bottoms" },
        { type: "Leggings", category: "bottoms" },
        { type: "Shorts", category: "bottoms" },
        { type: "Skirt", category: "bottoms" },
        { type: "Sweatpants", category: "bottoms" },
        { type: "Trousers", category: "bottoms" },

        { type: "Blazer", category: "outerwear" },
        { type: "Bomber Jacket", category: "outerwear" },
        { type: "Denim Jacket", category: "outerwear" },
        { type: "Fleece Jacket", category: "outerwear" },
        { type: "Leather Jacket", category: "outerwear" },
        { type: "Parka", category: "outerwear" },
        { type: "Peacoat", category: "outerwear" },
        { type: "Puffer Jacket", category: "outerwear" },
        { type: "Trench Coat", category: "outerwear" },
        { type: "Varsity Jackey", category: "outerwear" },
        { type: "Vest", category: "outerwear" },
        { type: "Windbreaker", category: "outerwear" },

        { type: "Dress", category: "one-pieces" },
        { type: "Onesie", category: "one-pieces" },
        { type: "Overalls", category: "one-pieces" },
        { type: "Suit", category: "one-pieces" },

        { type: "Bra", category: "undergarments" },
        { type: "Socks", category: "undergarments" },
        { type: "Tights", category: "undergarments" },
        { type: "Underwear", category: "undergarments" },

        { type: "Boots", category: "footwear" },
        { type: "Dress shoes", category: "footwear" },
        { type: "Flats", category: "footwear" },
        { type: "Flip-flops", category: "footwear" },
        { type: "Heels", category: "footwear" },
        { type: "Sandals", category: "footwear" },
        { type: "Sneakers", category: "footwear" },

        { type: "Hat", category: "accessories" },
        { type: "Bag", category: "accessories" },
        { type: "Belt", category: "accessories" },
        { type: "Scarf", category: "accessories" },
        { type: "Gloves", category: "accessories" },
        { type: "Tie", category: "accessories" },
        { type: "Jewelry", category: "accessories" },
        { type: "Watch", category: "accessories" },
        { type: "Glasses", category: "accessories" },

        { type: "Other", category: "others" },


    ]
    const colors = [
        "Black",
        "Blue",
        "Brown",
        "Gray",
        "Green",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "White",
        "Yellow"
    ]
    const today = new Date().toISOString().split('T')[0];

    const [color, setColor] = useState("");

    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState(today);



    function handleFileUpload(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    function handleType(e) {
        category.current = categories.find((obj) => obj.type == e.target.value).category;
        setType(e.target.value);
    }

    function handleColor(e) {
        setColor(e.target.value);
    }
    function handleSize(e) {
        setSize(e.target.value);
    }

    function handleBrand(e) {
        setBrand(e.target.value);
    }

    function handlePrice(e) {
        setPrice(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleSubmit() {
        setCloset([
            {
                category: category.current,
                type: type,
                color: color,
                size: size,
                brand: brand,
                date: date,
                image: image,
                price: price,
                id: crypto.randomUUID()
            },
            ...closet,
        ]);
        setImage("");
        imageRef.current.value = "";
        setType("");
        category.current = "";
        setColor("");
        setSize("");
        setBrand("");
        setDate(today);
        setPrice("");
    }


    return (
        <>
            <Header />

            <div class="tab-button">
                Add
            </div>
            <div className="add-page">
                <input type='file' onChange={handleFileUpload} ref={imageRef} />
                <div>
                    {image &&
                        <div className="image">
                            <img src={image} width="100" height="100" />
                        </div>

                    }
                </div>
                <div>
                    <div>
                        Type: *
                        <select value={type} onChange={handleType}>
                            <option value="" disabled>--Choose Type--</option>
                            <option value="" disabled>-Tops-</option>
                            {categories.filter((item) =>
                                item.category == "tops").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Bottoms-</option>
                            {categories.filter((item) =>
                                item.category == "bottoms").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Outerwear-</option>
                            {categories.filter((item) =>
                                item.category == "outerwear").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-One-pieces-</option>
                            {categories.filter((item) =>
                                item.category == "one-pieces").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Undergarments-</option>
                            {categories.filter((item) =>
                                item.category == "undergarments").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Footwear-</option>
                            {categories.filter((item) =>
                                item.category == "footwear").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Accessories-</option>
                            {categories.filter((item) =>
                                item.category == "accessories").map((type) =>
                                    <option value={type.type}> {type.type} </option>
                                )}
                            <option value="" disabled>-Others-</option>
                            <option value="Other" > Other </option>
                        </select>
                    </div>

                    <div>
                        Color: *
                        <select value={color} onChange={handleColor}>
                            <option value="" disabled>--Choose Color--</option>
                            {colors.map((color) => {
                                return (
                                    <option value={color}> {color} </option>
                                );
                            })}

                        </select>
                    </div>

                    <div>
                        Brand: <input type='text' value={brand} onChange={handleBrand} />
                    </div>

                    <div>
                        Size: <input type='text' value={size} onChange={handleSize} />
                    </div>

                    <div>
                        Price: <input type='text' value={price} onChange={handlePrice} />
                    </div>

                    <div>
                        Date: <input type='date' value={date} onChange={handleDate} />
                    </div>

                    <div>
                        Note: <input type='text' />
                    </div>
                </div>
                <button onClick={handleSubmit}> Submit </button>



            </div>

            <ListViewer list={closet}/>
        </>
    );
}