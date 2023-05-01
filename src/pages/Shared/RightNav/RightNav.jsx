import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login with</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div>
                <h2 className='mt-4'>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div><img className='w-100 h-100' src={bg} alt="" /></div>
        </div>
    );
};

export default RightNav;