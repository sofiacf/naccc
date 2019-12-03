import React, { useContext, useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import brick from '../images/brick.png'
import '../Sponsors.css'
import { AppContext } from './App'

interface CategoryProps {
    name: string;
    description: string;
}
const Category: React.FC<CategoryProps> = ({ children, description, name }) => <fieldset>
    <details>
        <summary><span><legend>{ name } Sponsorship</legend></span></summary>
        <p>{ description }</p>
    </details>
    { children }
</fieldset>

interface ItemProps {
    type: string;
    id: string;
    name: string;
    price: number;
}

const eventText = 'Support an event and we\'ll feature you as its title sponsor in all schedules, social media, printed materials, and live megaphone shoutouts for the event you make happen.'
const mainRaceText = 'Sponsor the main race and we\'ll prominently feature you as its title sponsor in all schedules, social media, printed materials, and live megaphone shoutouts all weekend. We\'ll display your banner on the race course, too!'
const registrationText = 'We\'ll tell everyone you helped us get one of these items in the welcome bag. Include your company on an instagram post.'
const merchText = 'Sponsor one of these items and we\'ll feature your logo on it—prominently!'
const inKindText = 'For in-kind donations, reach out and get in touch with us'

export const Sponsors: React.FC = () => {
    const [total, setTotal] = useState<number>(0)
    const [options, setOptions] = useState<Record<string, number>>({})
    const setBackgroundSrc = useContext(AppContext)
    setBackgroundSrc(brick)
    useEffect(() => setTotal(Object.values(options).reduce((a, b) => a + b, 0)), [options])

    function onChange(event: React.ChangeEvent<HTMLInputElement>, name: string, amount: number): void {
        const newOptions = { ...options }
        if (event.target.checked) newOptions[name] = amount
        else delete newOptions[name]
        setOptions(newOptions)
    }

    function Item({ id, name, price, type }: ItemProps): JSX.Element {
        return <>
            <label htmlFor={ id }>
                <input
                    type='checkbox'
                    name={ type }
                    id={ id }
                    checked={ options[name] >= 0 }
                    onChange={ e => onChange(e, name, price) }
                /> { name } - ${ price }
            </label>
            <br/>
        </>
    }

    return <>
        <Helmet>
            <title>NACCC | Sponsorship</title>
            <meta name='description' content='Become a sponsor of the 2020 North American Cycle Courier Championship! A variety of sponsorship opportunities are available now.'/>
        </Helmet>
        <header><h2>Become a sponsor!</h2></header>
        <main>
            <form className='sponsor-form'>
                <h2>Sponsorship Opportunities</h2>
                <p>{ 'We are proud to present an exciting  selection of sponsorship opportunities for your business. ' +
                'The NACCC has always been a community-based, volunteer-organized event, and' +
                ' we\'re counting on your support to make this a NACCC to remember.'
                }</p>
                <Category name='Event' description={ eventText }>
                    <Item
                        type='event'
                        id='friday'
                        name='Friday party'
                        price={ 1200 }
                    />
                    <Item
                        type={ 'event' }
                        id='saturday'
                        name='Saturday party'
                        price={ 1200 }
                    />
                    <Item
                        type={ 'event' }
                        id='awards'
                        name='Awards party'
                        price={ 1500 }
                    />
                    <Item
                        type={ 'event' }
                        id='art'
                        name='Art show'
                        price={ 1000 }
                    />
                    <Item
                        type={ 'event' }
                        id='lock'
                        name='Quick lock event'
                        price={ 1000 }
                    />
                    <Item
                        type={ 'event' }
                        id='track'
                        name='Track day'
                        price={ 1000 }
                    />
                    <Item
                        type={ 'event' }
                        id='wtnb'
                        name='WTNB race'
                        price={ 500 }
                    />
                    <Item
                        type={ 'event' }
                        id='alleycat'
                        name='Alleycat'
                        price={ 500 }
                    />
                </Category>
                <Category name='Main Race' description={ mainRaceText }>
                    <Item
                        type='main'
                        id='main'
                        name='Main race'
                        price={ 2500 }
                    />
                    <Item
                        type='main'
                        id='checkpoint'
                        name='Checkpoint'
                        price={ 2000 }
                    />
                    <Item
                        type='main'
                        id='megaphone'
                        name='Megaphone'
                        price={ 500 }
                    />
                </Category>
                <Category name='Registration' description={ registrationText }>
                    <Item
                        type='reg'
                        id='numbers'
                        name='Racer numbers'
                        price={ 144 }
                    />
                    <Item
                        type='reg'
                        id='wristband'
                        name='Wristbands'
                        price={ 400 }
                    />
                    <Item
                        type='reg'
                        id='patch'
                        name='Patches'
                        price={ 200 }
                    />
                    <Item
                        type='reg'
                        id='hats'
                        name='Hats'
                        price={ 200 }
                    />
                </Category>
                <Category name='Merch' description={ merchText }>
                    <Item
                        type='merch'
                        id='shirts'
                        name='Shirts'
                        price={ 100 }
                    />
                    <Item
                        type='merch'
                        id='kit'
                        name='Jersey/kit'
                        price={ 600 }
                    />
                </Category>
                <Category name='In Kind' description={ inKindText }>
                    <Item
                        type='inkind'
                        id='kit-inkind'
                        name='Jersey/kits'
                        price={ 0 }
                    />
                    <Item
                        type='inkind'
                        id='caps-inkind'
                        name='Caps'
                        price={ 0 }
                    />
                    <Item
                        type='inkind'
                        id='swag-inkind'
                        name='Registration packet swag'
                        price={ 0 }
                    />
                    <Item
                        type='inkind'
                        id='bags-inkind'
                        name='Prize bags'
                        price={ 0 }
                    />
                    <Item
                        type='inkind'
                        id='awards-inkind'
                        name='Main race awards'
                        price={ 0 }
                    />
                    <Item
                        type='inkind'
                        id='prizes-inkind'
                        name='Side event prizes'
                        price={ 0 }
                    />
                </Category>
            </form>
            { total > 0 && <form action='https://www.paypal.com/cgi-bin/webscr' method='post'>
                <fieldset>
                    <legend>Total: ${ total }</legend>
                    <h2>Sponsor us!</h2>
                    <input type='hidden' name='business' value='donate@bostonbma.org'/>
                    <input type='hidden' name='cmd' value='_donations'/>
                    <input type='hidden' name='item_name' value={ Object.keys(options).join(', ') + ' sponsor' }/>
                    <input type='hidden' name='item_number' value='NACCC Sponsorship'/>
                    <input type='hidden' name='amount' value={ total }/>
                    <input type='hidden' name='currency_code' value='USD'/>
                    <input
                        type='image'
                        className='paypal-button'
                        name='submit'
                        src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
                        alt='Sponsor the NACCC!'
                    />
                    <img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'/>
                </fieldset>
            </form> }
        </main>
    </>
}
