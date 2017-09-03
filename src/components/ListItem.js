import React from 'react';

const ListItem = ({ item: { checked, name} }) => {
    return (
    <li className="list__item">
      <label>
        <input type="checkbox" defaultChecked={checked} />
        <span>{name}</span>
      </label>
    </li>
    );
}

export default ListItem;
