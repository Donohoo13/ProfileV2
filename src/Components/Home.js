import React from 'react';
import { Media } from 'mdbreact';

const Home = () => (
    <div>
        <Media>
  <Media left className="mr-3">
    <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
  </Media>
  <Media body>
    <Media heading>
      Media heading
    </Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <Media className="mt-3">
      <Media left className="pr-3">
        <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Nested media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  </Media>
  </Media>
    </div>
);

export default Home;