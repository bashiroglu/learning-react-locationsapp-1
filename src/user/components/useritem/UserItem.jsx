import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/elements/Avatar/Avatar';
import Card from '../../../shared/components/elements/Card/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          {/*  by Link we say that we some
        click here take to that address but to wrapping many comps, we say when
        someone click whole div */}
          <div className="user-item__image">
            <Avatar
              image={props.image}
              alt={
                props.name
              } /* these 
            avatar and card is componets for styling purposes */
            />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;