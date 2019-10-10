import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from '../../assets/cat.svg';

const TopBar = () => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
  <a class="navbar-brand" href="#">{<Logo width="45" height="45" />}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button> 
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Why GitHub? </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enterprise</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Explore</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Marketplace</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Pricing
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Ação</a>
          <a class="dropdown-item" href="#">Outra ação</a>
          <a class="dropdown-item" href="#">Algo mais aqui</a>
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>
);

export default TopBar;
