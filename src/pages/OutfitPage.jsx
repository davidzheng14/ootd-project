import { Header } from '../components/Header.jsx';
import { ListViewer } from '../components/ListViewer.jsx';

export function OutfitPage( { outfitList } ) {
    return(
        <>
            <Header />
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