import { useState } from 'react';
import { Button } from '@mui/material';
import './gallery.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image1 from '../../assets/images/1.jpg';
import Image2 from '../../assets/images/2.jpg';
import Image3 from '../../assets/images/3.jpg';
import Image4 from '../../assets/images/4.jpg';
import Image5 from '../../assets/images/5.jpg';
import Image6 from '../../assets/images/6.jpg';
import Image7 from '../../assets/images/7.jpg';
import Image8 from '../../assets/images/8.jpg';
import Image9 from '../../assets/images/9.jpg';
import Image10 from '../../assets/images/10.jpg';
import Image11 from '../../assets/images/11.jpg';
import Image12 from '../../assets/images/12.jpg';
import Image13 from '../../assets/images/13.jpg';
import Image14 from '../../assets/images/14.jpg';
import Image15 from '../../assets/images/15.jpg';
import Image16 from '../../assets/images/16.jpg';
import { Modal } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";

const imageArr = [{
    original:Image1,
    thumbnail:Image1,

}, {
    original:Image2,
    thumbnail:Image2,
}, {
    original:Image3,
    thumbnail:Image3,
}, {
    original:Image4,
    thumbnail:Image4
}, {
    original:Image5,
    thumbnail:Image5,
}, {
    original:Image6,
    thumbnail:Image6,
}, {
    original:Image7,
    thumbnail:Image7,
}, {
    original:Image8,
    thumbnail:Image8,
}, {
    original:Image9,
    thumbnail:Image9,
}, {
    original:Image10,
    thumbnail:Image10,
}, {
    original:Image11,
    thumbnail:Image11,
}, {
    original:Image12,
    thumbnail:Image12,
}, {
    original:Image13,
    thumbnail:Image13,
}, {
    original:Image14,
    thumbnail:Image14,
}, {
    original:Image15,
    thumbnail:Image15,
}, {
    original:Image16,
    thumbnail:Image16,
}]


const Gallery = () => {
    const [selectedButton, setSelectedButton] = useState('All')

    const applyFilter = (filterType) => {
        setSelectedButton(filterType)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const filters = ['All', 'Branding', 'Design', 'Development']

    return (
        <>
            <div className='gallery'>
                <div className='title'>Gallery</div>
                <div className='links'>
                    <span>Pages</span>

                    <span className='icon'> <IoIosArrowRoundForward /> </span>
                    <span>Gallery</span>
                </div>

                <div className='gallery-container'>
                    <div className='title'>Photo Gallery</div>
                    <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    <div className='button-container'>
                        {filters.map((filter, key) => {
                            return (
                                <Button key={key} className={selectedButton === filter ? 'active' : ''} variant={selectedButton === filter ? 'contained' : 'outlined'} onClick={() => applyFilter(filter)}>{filter}</Button>
                            )
                        })}
                    </div>
                </div>

                <div className='image-container'>
                    {imageArr.map((image) => {
                        return (
                            <div>
                                <img className='img' onClick={handleShow} src={image.original}></img>
                            </div>
                        )
                    })}

                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                   Image Viewer
                </Modal.Header>
                <Modal.Body>
                <ImageGallery items={imageArr} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Gallery;