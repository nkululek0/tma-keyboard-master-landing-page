import './Hero.css'
import { Button } from '../Button'
import Keyboard from '../../assets/images/keyboard.png'

export function Hero () {

    return (
        <article className='hero-wrapper mb-4'>
            <section className='hero-content mx-4'>
                <div className='description-wrapper mb-8'>
                    <h1 className='main-heading font-[900] uppercase mb-4'>Typemaster Keyboard</h1>
                    <p className='text font-[500]'>
                        Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.
                    </p>
                </div>
                <div className='flex justify-between items-center mb-12'>
                    <Button buttonType='sub-button'>Pre-Order Now</Button>
                    <p className='text font-[600] uppercase'>Release on 5/27</p>
                </div>
            </section>
            <div className='hero-image relative w-full h-[17rem] ml-4 overflow-clip rounded-tl-2xl rounded-bl-2xl'>
                <img src={ Keyboard } alt='image of black keyboard' className='absolute scale-[2] left-[6rem] bottom-[4rem]'/>
            </div>
        </article>
    )
}