import React from 'react';
import CardGroup from './CardGroup.js'
import Card from './Card.js'

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */


const App = () => (
    <div className="cardGroup" >
        <CardGroup>
            <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
        </CardGroup>
        <CardGroup>
            <Card description="Basic tier" icon="fa-trophy" price="$10.00" hint="most popular" />
        </CardGroup>
        <CardGroup>
            <Card description="Advanced tier" icon="fa-bolt" price="$6,000.00" hint="only for enterprise-level professionals" />
        </CardGroup>
    </div>
);

export default App;
