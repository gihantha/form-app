import React, { useState } from 'react';

const SelectorCom = ({value, order}) => {
    const [selected, setSelected] = useState([]);
    const handleSelected = () => {
        setSelected(prevSelected => {
            if (prevSelected.includes(value)) {
              return prevSelected.filter(item => item !== value);
            } else {
              return [...prevSelected, value];
            }
        });
    }

  return (
    <div
        className="selector-container "
        onClick={handleSelected}
    >        
        <div 
            className='squre'
            style={{
                backgroundColor: selected.includes(value) ? 'rgb(207, 159, 255)' : '#fcf9ff',
                color: selected.includes(value) ? '#fcf9ff' : 'rgb(207, 159, 255)'
            }}
        >   
            {order}
        </div>
        <span>{value}</span>
        <div className='ps-4'>
            {selected.includes(value) && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16" className=''>
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>    
            )}
        </div>
        
    </div>
  )
}

export default SelectorCom