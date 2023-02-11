import React, { useState } from 'react';

const CarbonEmission = () => {
  const [url, setUrl] = useState('');
  const [emission, setEmission] = useState(0);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const calculateEmission = async () => {
    try {
      // Call the website-carbon API to calculate the carbon footprint of the website
      const response = await fetch(`https://api.websitecarbon.com/site?url=${url}`);
      const data = await response.json();
      setEmission(data.carbon.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Calculate Carbon Footprint</h2>
      <label htmlFor="url">
        URL:
        <input
          type="text"
          id="url"
          value={url}
          onChange={handleChange}
        />
      </label>
      <button onClick={calculateEmission}>
        Calculate
      </button>
      {emission > 0 && (
        <p>
          Estimated carbon footprint: {emission} g CO2
        </p>
      )}
    </div>
  );
};

export default CarbonEmission;