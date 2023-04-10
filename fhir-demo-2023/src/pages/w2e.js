import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import w2eLogo from '../images/w2e.jpeg';

export const Head = () => <title>FHIR Demo 2023: W2E</title>;

export default function W2e({ location }) {
  const features = [
    FeatureList.Observation,
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://w2e.fi/">
          <img src={w2eLogo} alt="W2E" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Timo Aaltonen</h3>
          <p>CTO</p>
          <address>
            <a href="mailto:timo.aaltonen@w2e.fi">timo.aaltonen@w2e.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};