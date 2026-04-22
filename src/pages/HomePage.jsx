import { Header } from '../components/Header.jsx';

export function HomePage({closet}) {

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
            </div>
        </>
            );
}