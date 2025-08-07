import './KeyboardFeatures.css'
import Screen from '../../assets/icons/screen.svg'
import Bluetooth from '../../assets/icons/bluetooth.svg'
import Battery from '../../assets/icons/battery.svg'
import LightBulb from '../../assets/icons/light-bulb.svg'
import { Feature } from './Components/Feature'

export function KeyboardFeatures () {

    return (
        <section className="keyboard-feature-wrapper grid grid-cols-1 gap-12 mx-4 min-[768px]:grid-cols-2">
            <Feature
                image={ Screen }
                imageAlt="icon of desktop screen"
                title="Highly Compatible"
                description="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
            />
            <Feature
                image={ Bluetooth }
                imageAlt="icon of bluetooth branding"
                title="Wireless With Bluetooth"
                description="Powerful 2.4G RF technology that allows you to connect the cordless keyboard from up to 30 meters away. Simply plug the unifying receiver into your computer."
            />
            <Feature
                image={ Battery }
                imageAlt="icon of a battery"
                title="High Capacity Battery"
                description="Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
            />
            <Feature
                image={ LightBulb }
                imageAlt="icon of a light bulb"
                title="RGB Backlit Modes"
                description="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
            />
        </section>
    )
}