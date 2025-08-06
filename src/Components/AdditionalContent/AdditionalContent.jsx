import './AdditionalContent.css'
import KeyboardAndPhone from '../../assets/images/keyboard-and-phone.png'
import Laptop from '../../assets/images/laptop.png'

export function AdditionalContent () {

    return (
        <article className='additional-content-wrapper mb-12'>
            <div className='additional-content-image flex mb-12'>
                <img src={ KeyboardAndPhone } alt='image of black keyboard and phone' className='w-3/10'/>
                <img src={ Laptop } alt='image of black laptop' className='w-6/10'/>
            </div>
            <section className='additional-content mx-4'>
                <h2 className='main-heading text-4xl font-[900] uppercase mb-4'>Mechanical wireless keyboard</h2>
                <p className='text font-[500]'>
                    The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variaty of switches and keycaps, along with reliable wireless connectivity.
                </p>
            </section>
        </article>
    )
}