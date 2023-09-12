import './desktop.css';

import Card1 from './Card/card1';
import Card2 from './Card/card2';
import Card3 from './Card/card3';

function Desktop() {
    return (
        <div className="main-container">
            <div className="button-container">
            <button className="custom-button black-bg" style={{ color: 'white' }}>Pay Monthly</button>

                <button className="custom-button transparent-bg">Pay Yearly(25%)</button>
            </div>
            <div className="desktop-container">
                <div className="card-container-row">
                    {/* Container 1 */}
                    
                    <Card1 />
                    {/* Container 2 */}
                    <Card2 />
                    
                    {/* Container 3 */}
                    <Card3 />
                </div>
            </div>
            
        </div>
    );
}

export default Desktop;
