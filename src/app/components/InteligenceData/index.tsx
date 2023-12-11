/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
const intelligenceData = [
  {
    ioc: '1.2.3.4',
    threat: 'low',
    countryCode: 'us',
    seenBy: ['usSS', 'whiteHatsAnon'],
    lastSeen: 1650309845083,
  },
  {
    ioc: '1.2.3.5',
    threat: 'high',
    countryCode: 'us',
    seenBy: ['usSS'],
    lastSeen: 1650307825088,
  },
  {
    ioc: 'gougle.com',
    threat: 'high',
    countryCode: 'ca',
    seenBy: ['usSS', 'whiteHatsAnon', 'ruWatch', 'privateInc', 'angiesList'],
    lastSeen: 1650609845087,
  },
  {
    ioc: 'goople.com',
    threat: 'high',
    countryCode: 'ru',
    seenBy: ['usSS', 'whiteHatsAnon', 'angiesList'],
    lastSeen: 1650109815283,
  },
];
export function InteligenceData() {
  const [analyzedData, setAnalyzedData] = useState({});

  useEffect(() => {
    // Function to process intelligence data and produce the desired output
    const analyzeIntelligenceData = data => {
      const attributeCounts = {};

      data.forEach(entry => {
        Object.keys(entry).forEach(attribute => {
          if (typeof entry[attribute] !== 'string') {
            return;
          }

          attributeCounts[attribute] = attributeCounts[attribute] || {};
          attributeCounts[attribute][entry[attribute]] =
            (attributeCounts[attribute][entry[attribute]] || 0) + 1;
        });
      });

      const result = Object.keys(attributeCounts).reduce((acc, attribute) => {
        const countsArray = Object.entries(attributeCounts[attribute]) as [
          string,
          number,
        ][];
        const sortedCounts = countsArray.sort((a, b) => b[1] - a[1]);
        acc[attribute] = sortedCounts.slice(0, 3);
        return acc;
      }, {});

      return result;
    };

    // Get the analyzed data
    const result = analyzeIntelligenceData(intelligenceData);

    // Set the analyzed data in the state
    setAnalyzedData(result);
  }, []); // Empty dependency array to run the effect only once
  return (
    <>
      <div>
        <h1>Analyzed Intelligence Data</h1>
        {Object.keys(analyzedData).map(attribute => (
          <div key={attribute}>
            <h2>{attribute}</h2>
            <ul>
              {analyzedData[attribute].map(([value, tally]) => (
                <li key={value}>{`${value} (${tally})`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
