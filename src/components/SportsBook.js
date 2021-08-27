import React from 'react'
import '../CSS/SportsBook.css'
import SportsList from './SportsList';

function SportsBook() {
 return (
   <div>
     <container className="sportsbook">
       <div className="sportsbook-header">SPORTS BOOK</div>
       <div className="sportsbook-sports"><SportsList /></div>
       <div className="sportsbook-matches">404 data not found</div>
     </container>
   </div>
 );
}

export default SportsBook
