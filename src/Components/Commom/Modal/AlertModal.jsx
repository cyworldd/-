import React from 'react';
import styled from 'styled-components';
import './AlertModal.css';
const Modal = (props) => {

  const { open, close, header } = props;

  return (
      <div className = {open ? 'openModal modal' : 'modal'}>
        { open ? (
          <section>
            <header>
              {header}
            <button className = "close" onClick = {close}>
              &times;
            </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className = 'close' onclick = {close}>
                close
              </button>
            </footer>
          </section>
        ) : null }
      </div>
  );
}

export default AlertModal