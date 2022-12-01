import React from 'react';

const AccordionBs = () => {
  return (
    <div>
      <h2>Accordion</h2>
      <div className='accordion w-25 mx-auto' id='accord'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordionId'>Accordion 1</button>
          </h2>
          <div id='accordionId' className='accordion-collapse collapse show' data-bs-parent='#accord'>
            <div className="accordion-body">
              <p>Hello How Are You Mirana</p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordionId1'>Accordion 2</button>
          </h2>
          <div id='accordionId1' className='accordion-collapse collapse' data-bs-parent='#accord'>
            <div className="accordion-body">
              <p>Argentina Ar Jitena</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionBs;