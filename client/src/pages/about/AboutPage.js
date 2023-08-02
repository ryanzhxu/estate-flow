import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='listing-page'>
      <div className='listing-contents'>
        <div className='listing-right'>
          <div className='listing-header'>
            <h2>About</h2>
            <br></br>
            <Link to='/'>
            <div className='btn btn-outline-primary'>
            <i className="bi bi-house"></i>
            </div>
            </Link>
          </div>
          <br></br>
          <h3>Estate Flow - Simplify Your Property Management</h3>
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
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
