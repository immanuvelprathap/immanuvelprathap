import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  filter: grayscale(100%) contrast(1.2) brightness(0.9);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 5rem;
  
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 3rem;
    background: var(--panel-bg);
    border: 1px solid var(--border-color);
    width: 100%;
    max-width: 320px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  .map__card__heading {
    font-family: 'Outfit', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  .map__card__link {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 1.3rem;
    margin-top: 2rem;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid var(--text-primary);
    transition: color 0.2s ease, border-color 0.2s ease;
    
    &:hover {
      color: var(--text-secondary);
      border-color: var(--text-secondary);
    }
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    .map__card {
      position: relative;
      right: auto;
      bottom: auto;
      margin: 4rem auto;
      max-width: 90%;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Current Base</h3>
          <PText>Bern, Switzerland</PText>
          <a
            className="map__card__link"
            href="https://maps.google.com/?q=Bern,Switzerland"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </MapStyles>
  );
}