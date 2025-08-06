import './LandingPage.css'
import Logo from '../../assets/icons/logo.svg'
import { Button } from '../Button'
import { KeyboardFeatures } from '../KeyboardFeatures'
import { AdditionalContent } from '../AdditionalContent'
import { Hero } from '../Hero'

export function LandingPage () {

    return (
        <>
            <div className='landing-page-main-wrapper'>
                <div className='header-wrapper flex justify-between mx-4 mt-4 mb-8'>
                    <img src={ Logo } alt='page logo' />
                    <Button buttonType='main-button'>Pre-Order Now</Button>
                </div>
                <div className='content-wrapper'>
                    <Hero />
                    <AdditionalContent />
                    <KeyboardFeatures />
                </div>
                <div className='footer-wrapper flex justify-center mt-12 mb-4'>
                    <p className='text font-[600] flex justify-around gap-2'>
                        <span>Typemaster 2021</span>
                        <span>|</span>
                        <span>All Rights Reserved</span>
                    </p>
                </div>
            </div>
        </>
    )
}