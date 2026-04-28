
import { ListViewer } from '../components/ListViewer.jsx';

export function OutfitPage( { outfitList } ) {
    return(
        <>
            <div>
                <h1> Outfits: </h1>
                # of Outfits: {outfitList.length}
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