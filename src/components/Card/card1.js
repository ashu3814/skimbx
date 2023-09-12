function Card1() {
    return (
      <div className="card-container" style={{ borderColor: '#59b6d3', borderWidth: '2px', borderStyle: 'solid', position: 'relative' }}>
        <button
          className="most-popular-button"
          style={{
            backgroundColor: '#59b6d3',
            color: '#fff',
            position: 'absolute',
            top: '-15px', 
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Most Popular Offer
        </button>
        <div className="top-container">
          <h1 className="heading">Basic</h1>
          <p className="paragraph">FOR INDIVIDUALS & SMALL BUSINESSES</p>
          <p className="description">Everything you need to create your store, ship products, and process payments.</p>
          <div className="amount-container">
            <p className="amount">₹1,994 <span className="rupee">INR</span><span className="rupee">/mo</span></p>
            
          </div>
        </div>
        <p className="trial">Get your first 3 months for ₹20/mo</p>
        <div className="bottom-container">
          <p className="paragraph" style={{ textAlign: 'left' }}>What's included on basic</p>
          <ul className="list-container">
            <li className="item-container">
              ✓ Basic reports
            </li>
            <li className="item-container">
              ✓ Upto 1,000 inventory locations
            </li>
            <li className="item-container">
              ✓ 2 staff accounts
            </li>
          </ul>
          <div className="button-container">
            <button className="custom-button transparent-bg">Try for free</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card1;
  