import React from 'react';

const Repo = (props) => {
  return (
    <ul className="repo-description">
      <li className="repo-name">{props.repo.name}</li>
      <li className="repo-description">{props.repo.description}</li>
      <li className="repo-watchers">{props.repo.watchers}</li>
    </ul>
  );
};

export default Repo;
