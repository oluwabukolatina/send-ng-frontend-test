import React, { useState } from 'react';
import Navigation from '../supply/Navigation';
import { RequestContainerStyles } from '../../styles/styled/RequestStyles';

const Request = () => {
  const [smBorder, setSMBorder] = useState(false);
  const [dWipesBorder, setDWipesBorder] = useState(false);
  const [handSanitizerBorder, setHandSanitizerBorder] = useState(false);
  const [facialBorder, setFacialBorder] = useState(false);
  const [dGlovesBorder, setDGlovesBorder] = useState(false);
  const [gownBorder, setGownBorder] = useState(false);

  const [respiratorBorder, setRespiratorBorder] = useState(false);
  const [nRespiratorBorder, setNRespiratorBorder] = useState(false);

  const [kNRespiratorBorder, setKNespiratorBorder] = useState(false);
  const [eGlovesBorder, setEGlovesBorder] = useState(false);

  const changKNRespiratoreColor = () => {
    setKNespiratorBorder(!kNRespiratorBorder);
  };
  const changeNRespiratorColor = () => {
    setNRespiratorBorder(!nRespiratorBorder);
  };
  const changeRespiratorColor = () => {
    setRespiratorBorder(!respiratorBorder);
  };
  const changeSMColor = () => {
    setSMBorder(!smBorder);
  };

  const changeGownColor = () => {
    setGownBorder(!gownBorder);
  };

  const changeExamGlovesColor = () => {
    setEGlovesBorder(!eGlovesBorder);
  };

  const changedWipesColor = () => {
    setDWipesBorder(!dWipesBorder);
  };

  const changeHandSantizerColor = () => {
    setHandSanitizerBorder(!handSanitizerBorder);
  };

  const changeFacialColor = () => {
    setFacialBorder(!facialBorder);
  };

  const changeDGlovesBorder = () => {
    setDGlovesBorder(!dGlovesBorder);
  };

  return (
    <RequestContainerStyles>
      <Navigation />
      <div className="request-body">
        <div className="product-offered">
          <h3 className="request-product-offered">
            What products do you offer?
          </h3>
          <p>Select all that applies</p>
        </div>
        <div className="request-form-container">
          <form className="request-form">
            {/* <input /> */}
            <div className="request-items-container">
              <div
                onClick={() => changeRespiratorColor()}
                style={{
                  border: respiratorBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                  // background-color: transparent !important;
                  // border: 2px solid #eaf2fd;
                }}
                className="request-items"
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Respirators</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">Surgical N95 or Equivalent</span>
                </div>
              </div>
              <div
                style={{
                  border: nRespiratorBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeNRespiratorColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Respirators</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">N95 or Equivalent</span>
                </div>
              </div>
            </div>
            <div className="request-items-container">
              <div
                style={{
                  border: kNRespiratorBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changKNRespiratoreColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Respirators</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">KN95 or Equivalent</span>
                </div>
              </div>
              <div
                style={{
                  border: gownBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeGownColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Gowns</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">PB70</span>
                </div>
              </div>
            </div>
            <div className="request-items-container">
              <div
                style={{
                  border: eGlovesBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeExamGlovesColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Examination Gloves</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">Powder free nitrile(ASTM D6319)</span>
                </div>
              </div>
              <div
                style={{
                  border: dGlovesBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeDGlovesBorder()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Examination Gloves</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">Powder free nitrile(ASTM D3578)</span>
                </div>
              </div>
            </div>
            <div className="request-items-container">
              <div
                style={{
                  border: facialBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeFacialColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Facial Shields</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">ANSI Z871</span>
                </div>
              </div>
              <div
                style={{
                  border: handSanitizerBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changeHandSantizerColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Hand Sanitizer</p>
                </div>
                <div style={{ width: '60%' }}>
                  {/*<span className="item">Surgical N95 or Equivalent</span>*/}
                </div>
              </div>
            </div>
            <div className="request-items-container">
              <div
                style={{
                  border: dWipesBorder
                    ? '2px solid #2f80ed'
                    : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                className="request-items"
                onClick={() => changedWipesColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Disinfecting Wipes</p>
                </div>
                <div style={{ width: '60%' }}>
                  <span className="item">EPA Cerified</span>
                </div>
              </div>
              <div
                style={{
                  border: smBorder ? '2px solid #2f80ed' : '2px solid #eaf2fd',
                  background: respiratorBorder ? '#eaf2fd;' : 'transparent',
                }}
                // style={{ smBorder ?'rgba(47,128,237,0.0509804)' }}
                className="request-items"
                onClick={() => changeSMColor()}
              >
                {/* <input style={{ width: '100%' }} /> */}
                <div className="request-item">
                  <p>Surgical Mask</p>
                </div>
                <div style={{ width: '60%' }}>
                  {/*<span className="item">Surgical N95 or Equivalent</span>*/}
                </div>
              </div>
            </div>
            <div className="button-container">
              <button disabled={true} className="request-button">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </RequestContainerStyles>
  );
};

export default Request;
