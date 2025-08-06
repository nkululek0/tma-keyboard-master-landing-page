export function Feature (props) {

    const { image, imageAlt, title, description } = props

    return (
        <>
            <section className="feature">
                <div className="icon-wrap flex justify-center w-[80px] h-[70px] p-5 mb-4 rounded-2xl">
                    <img src={ image } alt={ imageAlt }/>
                </div>
                <h3 className='main-heading text-3xl font-[900] uppercase mb-4'>{ title }</h3>
                <p className='text font-[500]'>{ description }</p>
            </section>
        </>
    )
}