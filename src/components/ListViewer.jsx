import { useState } from 'react';

export function ListViewer({ list, handleRemove, className, handleInfo }) {

    const [showList, setShowList] = useState([]);

    const toggleInfo = ((item) => (
        showList.includes(item.id) ? setShowList(showList.filter(id => id != item.id)) : setShowList([...showList, item.id])
    ));


    return (
        <div>
            {list.map((item) => (
                <div className={className}>
                    <img src={item.image} width="100" height="100" />
                    <h4>{item.color} {item.type}</h4>
                    <button onClick={() => toggleInfo(item)}>
                        {showList.includes(item.id) ? "Hide Info" : "Show Info"}
                    </button>
                    <div>
                        {showList.includes(item.id) ?
                            Object.entries(item).map(([key, value]) => (
                                <div>
                                    {key}: {value}
                                </div>
                            ))
                            : ""}
                    </div>
                    {handleRemove && <button onClick={() => handleRemove(item.id)}> Remove </button>}
                </div>
            ))}
        </div>
    );
}