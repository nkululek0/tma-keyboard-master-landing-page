import './AdditionalContent.css'
import KeyboardAndPhone from '../../assets/images/keyboard-and-phone.png'
import Laptop from '../../assets/images/laptop.png'

export function AdditionalContent () {

    return (
        <article className='additional-content-wrapper mb-12 min-[768px]:ml-4 min-[1024px]:flex min-[1024px]:gap-24 '>
            <div className='additional-content-image flex gap-4 mb-12 mr-4 min-[1024px]:flex-grow-[4] min-[1024px]:m-0'>
                <div className="image-wrapper w-3/10 relative overflow-clip rounded-tr-2xl rounded-br-2xl min-[768px]:rounded-2xl">
                    <img src={ KeyboardAndPhone } alt='image of black keyboard and phone' className='object-cover scale-[1.4] relative right-[1rem] top-[0rem]'/>
                </div>
                <div className="second-image-wrapper w-7/10 overflow-clip relative rounded-2xl">
                    <img src={ Laptop } alt='image of black laptop' className='object-cover scale-[2] absolute left-[6rem] bottom-[2rem]'/>
                </div>
            </div>
            <section className='additional-content mx-4 min-[768px]:flex justify-between gap-4 min-[1024px]:flex-col min-[1024px]:justify-center min-[1024px]:flex-grow-[1] min-[1024px]:m-0 min-[1024px]:w-min'>
                <h2 className='main-heading font-[900] uppercase mb-4 min-[768px]:w-3/10 min-[1024px]:w-min min-[1024px]:m-0'>Mechanical wireless keyboard</h2>
                <p className='text font-[500] min-[768px]:w-[27rem] min-[1024px]:w-auto'>
                    The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variaty of switches and keycaps, along with reliable wireless connectivity.
                </p>
            </section>
        </article>
    )
}