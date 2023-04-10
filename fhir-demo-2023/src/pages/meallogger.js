import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import mealloggerLogo from '../images/meallogger.jpeg';

export const Head = () => <title>FHIR Demo 2023: Meallogger</title>;

export default function Meallogger({ location }) {
  const features = [
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.meallogger.com/">
          <img src={mealloggerLogo} alt="Meallogger" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Michael Quarshie</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:michael@meallogger.com">michael@meallogger.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};