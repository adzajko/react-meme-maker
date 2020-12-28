import { memeStarters } from '../../util/meme-starters/meme-starters.js';
import React, { useState } from 'react';
import { MemeMaker } from '../meme-maker/MemeMaker';
import { getBase64Image } from '../../hooks/image-to-svg/getBase64';

export const Home = () => {
  const setActives = (modalShow, activeMeme) => {
    setActiveMeme(activeMeme);
    setModalShow(modalShow);
  };
  const [modalShow, setModalShow] = useState(false);
  const [activeMeme, setActiveMeme] = useState('');
  return (
    <section className='meme-maker-page'>
      <section className='meme-maker-page__grid-container'>
        {memeStarters.map((image, index) => {
          return (
            <div className='meme-maker-page__meme-container' key={index}>
              <img
                className='img-fluid meme-maker-page__meme'
                src={image.src}
                alt='meme'
                onClick={() => setActives(true, image.src)}
              />
              <MemeMaker
                activememe={activeMeme}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          );
        })}
      </section>
    </section>
  );
};
