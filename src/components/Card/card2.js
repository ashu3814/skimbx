

function Card2() {
    return (
        <div className="card-container">
                        <div className="top-container">
                            <h1 className="heading">Shopify</h1>
                            <p className="paragraph">FOR  SMALL BUSINESSES</p>
                            <p className="description">Level up your business with professional reportinf and more ataff account.</p>
                            <div className="amount-container">
                                <p className="amount">₹7,447  <span className="rupee">INR</span>
                                <span className="rupee">/mo</span>
                                </p>
                                
                                
                            </div>
                        </div>
                        <p className="trial">Get your first 3 months for ₹20/mo</p>
                        <div className="bottom-container">
                        <p className="paragraph" style={{ textAlign: 'left' }}>What's included on Shopify</p>

                            <ul className="list-container">
                                <li className="item-container">
                                    ✓ Professional reports
                                </li>
                                <li className="item-container">
                                    ✓ Upto 1,000 inventory locations
                                </li>
                                <li className="item-container">
                                    ✓ 5 staff accounts
                                </li>
                            </ul>
                            <div className="button-container">
                                <button className="custom-button transparent-bg">Try for free</button>
                            </div>
                        </div>
                    </div>
     
    );
  }
  
  export default Card2;