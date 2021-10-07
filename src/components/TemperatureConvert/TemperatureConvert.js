import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

function TemperatureConvert() {
  const [fahrenheitValue, setfahrenheitValue] = useState("");
  const [celciusValue, setcelciusValue] = useState("");
  const cToF = (celsius) => {
    setfahrenheitValue((celsius * 9) / 5 + 32 + " °F");
  };
  const fToC = (fahrenheit) => {
    setcelciusValue(((fahrenheit - 32) * 5) / 9 + " °C");
  };
  return (
    <div>
      <Card title="Temperature Converter">
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <label htmlFor="celcius">Celcius</label>
            <InputText
              id="celcius"
              onChange={(e) => cToF(e.target.value)}
              type="text"
            />
          </div>
          <div className="p-field p-col-6 p-mt-4">{fahrenheitValue}</div>
          <div className="p-field p-col-6">
            <label htmlFor="celcius">Fahrenheit</label>
            <InputText
              id="celcius"
              onChange={(e) => fToC(e.target.value)}
              type="text"
            />
          </div>
          <div className="p-field p-col-6 p-mt-4">{celciusValue}</div>
        </div>
      </Card>
    </div>
  );
}

export default TemperatureConvert;
