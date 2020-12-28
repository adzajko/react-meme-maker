import React, { useState } from 'react';
import { Modal, Button, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { convertSvgToImage } from '../../hooks/svg-to-image/useSvgToImg.hook';
import { getBase64Image } from '../../hooks/image-to-svg/getBase64';
import { useLocalStorageSetter } from '../../hooks/local-storage/useLocalStorageSetter.hook';

export const MemeMaker = props => {
  const [bottomText, setBottomText] = useState('');
  const [topText, setTopText] = useState('');
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Make a meme
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between'>
        <svg
          width='100%'
          id='svg_ref'
          height='100%'
          xmlns='https://www.w3.org/TR/SVG/'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <image href={props.activememe} height='100%' width='100%' />
          <text
            // style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
            // x={this.state.topX}
            // y={this.state.topY}
            x='50'
            y='10'
            dominantBaseline='middle'
            textAnchor='middle'
            // onMouseDown={event => this.handleMouseDown(event, 'top')}
            // onMouseUp={event => this.handleMouseUp(event, 'top')}
          >
            {topText}
          </text>
          <text
            // style={textStyle}
            dominantBaseline='middle'
            textAnchor='middle'
            // x={this.state.bottomX}
            // y={this.state.bottomY}
            x='50'
            y='90'
            // onMouseDown={event => this.handleMouseDown(event, 'bottom')}
            // onMouseUp={event => this.handleMouseUp(event, 'bottom')}
          >
            {bottomText}
          </text>
        </svg>
        <div className='meme-form'>
          <FormGroup>
            <Label for='toptext'>Top Text</Label>
            <input
              className='form-control'
              type='text'
              name='toptext'
              id='toptext'
              value={topText}
              placeholder='Add text to the top'
              onChange={event => setTopText(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for='bottomtext'>Bottom Text</Label>
            <input
              className='form-control'
              type='text'
              name='bottomtext'
              id='bottomtext'
              placeholder='Add text to the bottom'
              value={bottomText}
              onChange={event => setBottomText(event.target.value)}
            />
          </FormGroup>
          <div className='btn-group'>
            <button
              onClick={() =>
                convertSvgToImage(document.getElementById('svg_ref'))
              }
              className='btn btn-primary'
            >
              Download{' '}
            </button>
            <button
              className='btn btn-dark'
              onClick={useLocalStorageSetter(
                getBase64Image(document.getElementById('svg-ref'))
              )}
            >
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
