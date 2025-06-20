import { useRef, useState } from 'react';
import './StepperForm.css';

const steps = [
  'Product Selection',
  'Payment Method',
  'Payment Form',
  'Purchase Success',
];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const visitedSteps = useRef(new Set<number>());

  const handleContinue = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
      visitedSteps.current.add(activeStep);
    }
    else {
      setActiveStep(0);
      visitedSteps.current.clear();
    }
  };

  return (
    <div id='wrapper'>
      <ol>
        {steps.map((step, index) => (
          <li
            key={index}
            className={index === activeStep ? 'selected' : '' + (visitedSteps.current.has(index) ? ' visited' : '')}
            onClick={() => {
              if (visitedSteps.current.has(index)) {
                setActiveStep(index);
              }
            }
            }
          >
            {step}
          </li>
        ))}
      </ol>

      {activeStep === 0 && (
        <ul>
          <li className="blue-product">
            <input type="checkbox" id="product1" />
            <label htmlFor="product1">Product 1</label>
          </li>
          <li className="red-product">
            <input type="checkbox" id="product2" />
            <label htmlFor="product2">Product 2</label>
          </li>
          <li className="orange-product">
            <input type="checkbox" id="product3" />
            <label htmlFor="product3">Product 3</label>
          </li>
          <li className="green-product">
            <input type="checkbox" id="product4" />
            <label htmlFor="product4">Product 4</label>
          </li>
        </ul>
      )}

      <button onClick={handleContinue}>{activeStep === steps.length - 1 ? "Start" : "Next"}</button>
    </div>
  );
};

export default StepperForm;
