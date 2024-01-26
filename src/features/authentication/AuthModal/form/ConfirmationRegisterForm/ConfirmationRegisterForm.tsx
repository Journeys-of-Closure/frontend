import React from 'react';
import './ConfirmationRegisterForm.css';
import { IconContext } from "react-icons";
import { BsPatchCheck } from 'react-icons/bs';

function ConfirmationRegisterForm() {
  return (
    <React.Fragment>
      <div id="confirmationRegister-container">
        <IconContext.Provider value={{ size: '3em' }}>
          <BsPatchCheck />
        </IconContext.Provider>
        <p id="confirmation-text"> We have send an confirmation email for your response. Please ensure to check your spam box incase you can’t find it in your inbox. </p>
      </div>
    </React.Fragment>
  )

} export default ConfirmationRegisterForm;
