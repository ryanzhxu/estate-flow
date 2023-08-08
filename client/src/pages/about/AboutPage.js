import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomeButton from '../../shared/components/HomeButton';

const AboutPage = () => {
  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>About</h2>
            <br />
            <HomeButton />
          </div>
          <br></br>
          <h2>Estate Flow - Simplify Your Property Management</h2>
          <br></br>
          <p>
            Estate Flow is a comprehensive web app designed for property managers, offering seamless management of
            rental properties, houses, townhouses, condos, commercial spaces, and offices. This app efficiently stores
            and organizes data related to properties, buildings, land, tenants, managers, maintenance workers, and more.
            With Estate Flow, users can effortlessly perform CRUD operations, and track various fees, leases, and
            expenses. Our goal is to empower property managers to maximize their efficiency and profitability while
            ensuring the security and privacy of sensitive data.
          </p>
          <p>Developers: Helena Xu, Ryan Xu, Zichao Zhou, Yixuan Li, Nicholas Luong</p>
          <h4>Who is it for:</h4>
<p>property managers</p>
<h4>What will it do? (What "human activity" will it support?)</h4>
<p>manages rental properties: houses, townhouses, condos, commercial, offices</p>
<h4>What type of data will it store?</h4>
<p>properties, buildings, land, tenants, maintenance workers, etc.</p>
<h4>What will users be able to do with this data?</h4>
<p>CRUD, analysis</p>
<h4>What is some additional functionality you can add/remove based on time constraints?</h4>
<p>- keep track of various fees: rent, strata, utilities, building miscellaneous expenses</p>
<p>- keep track of lease</p>
<br></br>
<h3>Project task requirements:</h3>
<br></br>
<h4>3-5 minimum requirements (will definitely complete)</h4>
<p>- user can add/edit/remove properties that they are managing</p>
<p>- user can add/edit/remove tenants to/from a property they are managing</p>
<p>- calculate profit for the owner based on rental income minus expenses, e.g. downpayment, mortgage, management fees, etc.</p>
<h4>2-7 "standard" requirements (will most likely complete)</h4>
<p>- due date reminder showed on the dashboard</p>
<p>- manage tenant information, including lease agreements, rental payments, etc.</p>
<p>- filter/search for properties owned</p>
<h4>2-3 stretch requirements (plan to complete at least 1!)</h4>
<p>- have a tenant facing client and an owner facing client</p>
<p>- provide security (login/password) for each user.</p>
<p>- ensure the security and privacy of sensitive data</p>
<h4>Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks!</h4>
<p>User can add a property that they are managing</p>
<p>- design the classes that will hold the property information</p>
<p>- implement a way to persist the added data into the DB</p>
<p>- design the user interface for adding a property</p>
<p>User can add a tenant to a property they are managing</p>
<p>- design the classes that will hold the tenant information</p>
<p>- implement a way to persist the added data into the DB</p>
<p>- design the user interface for adding a tenant to a property</p>
</div>
        </div>
      </div>
  );
};

export default AboutPage;
