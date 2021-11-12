import React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getProfil } from '../../JS/actions/profilAction';
import './home2.css'
import { Link } from 'react-router-dom'
import Navigation from '../navigaton/Navigation'
const home2 = () => {
    
    
    return (
        <div>
           



           <Navigation/>
<body>

  <header>
   
    
  </header>

  <section class="titles">

    <h1></h1>
    <p>The doctor-nutritionist anticipates, diagnoses and takes charge of disorders related to nutrition (diabetes, food allergy or intolerance, obesity, cholesterol, anorexia, etc.).</p>

  </section>

  <section class="container-boxes">
    <div class="box">

      <div class="icon">
        <a href=""><i class="fas fa-fire"></i></a>
      </div>

      <div class="text">
        <a href="">
          <h3>The Nutitionniste</h3>
          <p>The best teacher you can have, internationally renowned "hooker".</p>
        </a>
      </div>

    </div>

    <div class="box">

      <div class="icon">
        <a href=""><i class="fas fa-seedling"></i></a>
      </div>

      <div class="text">
        <a href="">
          <h3>My Nutrition</h3>
          <p>We will use only animal-friendly, fair-trade yarn. Only the best!</p>
        </a>
      </div>

    </div>

    <div class="box">

      <div class="icon">
        <a href=""><i class="fas fa-address-card"></i></a>
      </div>

      <div class="text">
        <a href="">
          <h3>My Nutrition</h3>
          <p>Become a member, become family. Teamwork is everything.</p>
        </a>
      </div>

    </div>
  </section>

</body>


        </div>
    )
}

export default home2
