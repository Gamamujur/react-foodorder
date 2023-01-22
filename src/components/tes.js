import React, {useState,useEffect} from 'react'

import { CSSTransition } from 'react-transition-group';

const duration = {
    enter: 1000,
    exit: 1000,
  };

const tes = () => {
    const [currentDiv, setCurrentDiv] = useState('name');

    useEffect(() => {
        let timeout;
        if (currentDiv === 'name') {
          timeout = setTimeout(() => setCurrentDiv('profession'), 1000);
        } else if (currentDiv === 'profession') {
          timeout = setTimeout(() => setCurrentDiv('age'), 1000);
        }
        return () => clearTimeout(timeout);
      }, [currentDiv]);
  return (
    <div>
    <CSSTransition
      in={currentDiv === 'name'}
      timeout={duration}
      classNames="fade"
      unmountOnExit
    >
      <div>Nama : John Doe</div>
    </CSSTransition>
    <CSSTransition
      in={currentDiv === 'profession'}
      timeout={duration}
      classNames="fade"
      unmountOnExit
    >
      <div>Profesi : Software Engineer</div>
    </CSSTransition>
    <CSSTransition
      in={currentDiv === 'age'}
      timeout={duration}
      classNames="fade"
      unmountOnExit
    >
      <div>Umur : 30</div>
    </CSSTransition>
  </div>
  )
}

export default tes