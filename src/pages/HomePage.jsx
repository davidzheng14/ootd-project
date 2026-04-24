import { Header } from '../components/Header.jsx';

export function HomePage({closet, outfitList}) {

    const firstName = "David";
    const lastName = "Zheng";

    return (
        <>
            <Header />

            <h1>
                Welcome, {firstName}!
            </h1>

            <div className="tab-button">
                Profile
            </div>
            <div>
                <div>
                    Name: {firstName} {lastName}
                </div>
                <div>
                    Items: {closet.length}
                </div>
                <div>
                    Outfits: {outfitList.length}
                </div>
            </div>
        </>
            );
}