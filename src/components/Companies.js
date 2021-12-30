import React from 'react'
import './Companies.css'
import Retool from '../images/retool.png'
import Readme from '../images/readme.png'
import Expo from '../images/expo.png'
import Activision from '../images/activision.png'
import Mercury from '../images/mercury.png'
import Dribbble from '../images/dribbble.png'
import Craft from '../images/craft.png'
import Raycast from '../images/raycast.png'
import Quill from '../images/quill.png'

const Companies = () => {
    return (
        <section className="companies" style={{ backgroundColor: 'black' }}>
            <div className="container py-5 text-center">
                <p className="text-primary mb-3">POWERING THE NEXT GENERATION OF COMPANIES</p>
                <div className="company-list">
                    <img src={Retool} alt={Retool} width='100px' className="my-4" />
                    <img src={Readme} alt={Readme} width='100px' className="my-4" />
                    <img src={Expo} alt={Expo} width='100px' className="my-4" />
                    <img src={Activision} alt={Activision} width='100px' className="my-4" />
                    <img src={Mercury} alt={Mercury} width='100px' className="my-4" />
                    <img src={Dribbble} alt={Dribbble} width='100px' className="my-4" />
                    <img src={Craft} alt={Craft} width='100px' className="my-4" />
                    <img src={Raycast} alt={Raycast} width='100px' className="my-4" />
                    <img src={Quill} alt={Quill} width='100px' className="my-4" />
                </div>
            </div>
        </section>
    )
}

export default Companies
