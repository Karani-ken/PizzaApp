import React, { useState } from 'react'
import '../index.css'
import {Modal} from 'react-bootstrap'
const Pizza = ({ pizza }) => {
    const [quantity, setquantity] = useState(1)
    const [variant, setvariant] = useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1 className='Header'>{pizza.name}</h1>
                <img src={pizza.image} alt='' className="img-fluid"
                    style={{ height: '200px', width: '200px' }} />
            </div>
            

            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>Variants</p>
                    <select className='form-control'
                        value={variant} onChange={(e) => [setvariant(e.target.value)]}>
                        {pizza.variants.map(variant => {
                            return <option value={variant}>{variant}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control'
                        value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h5 className='mt-1'>Price :{pizza.prices[0][variant] * quantity}</h5>
                </div>
                <div className='m-1 w-100'>
                    <button style={{ background: 'red', color: 'white', borderRadius: '5px', border: '1px solid green' }}>
                        Add to cart
                    </button>
                </div>


            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img src={pizza.image} alt='' className="img-fluid"
                    style={{ height: '400px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button style={{ background: 'red', color: 'white', borderRadius: '5px', border: '1px solid green' }} onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default Pizza