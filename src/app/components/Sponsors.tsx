/* eslint-disable */
import React from 'react'

interface CategoryProps {
    name: string;
    description: string;
}
const Category: React.FC<CategoryProps> = ({ children, description, name }) => <fieldset>
    <details>
        <summary>
            <legend>{ name } Sponsorship</legend>
        </summary>
        <p>{ description }</p>
    </details>
    { children }
</fieldset>

interface ItemProps {
    type: string;
    id: string;
    name: string;
}
const Item: React.FC<ItemProps> = (props) => {
    const { id, name, type } = props
    return <>
        <label htmlFor={ id }>
            <input type='checkbox' name={ type } id={ id }
                   value={ name }/> { name }
        </label>
        <br/>
    </>
}

const eventText = 'Support an event and we\'ll feature you as its title sponsor in all schedules, social media, printed materials, and live megaphone shoutouts for the event you make happen.'
const mainRaceText = 'Sponsor the main race and we\'ll prominently feature you as its title sponsor in all schedules, social media, printed materials, and live megaphone shoutouts all weekend. We\'ll display your banner on the race course, too!'
const registrationText = 'We\'ll tell everyone you helped us get one of these items in the welcome bag. Include your company on an instagram post.'
const merchText = 'Sponsor one of these items and we\'ll feature your logo on it—prominently!'
const inKindText = 'For in-kind donations, reach out and get in touch with us'

export const Sponsors: React.FC = () => <>
    <header><h2>Become a sponsor!</h2></header>
    <main>
        <form>
            <h2>Sponsorship Packages</h2>
            <p>{ 'We are proud to present an exciting' +
            ' selection of sponsorship opportunities for your business. The NACCC' +
            ' has always been a community-based, volunteer-organized event, and' +
            ' we\'re counting on your support to make event special.' }</p>
            <Category name='Event' description={ eventText }>
                <Item type='event' id='friday' name='Friday party'/>
                <Item type='event' id='saturday' name='Saturday party'/>
                <Item type='event' id='awards' name='Awards party'/>
                <Item type='event' id='art' name='Art show'/>
                <Item type='event' id='lock' name='Quick lock event'/>
                <Item type='event' id='track' name='Track day'/>
                <Item type='event' id='wtnb' name='WTNB race'/>
                <Item type='event' id='alleycat' name='Alleycat'/>
            </Category>
            <Category name='Main Race' description={ mainRaceText }>
                <Item type='main' id='main' name='Main Race'/>
                <Item type='main' id='checkpoint' name='Checkpoint'/>
                <Item type='main' id='megaphone' name='Megaphone'/>
            </Category>
            <Category name='Registration' description={ registrationText }>
                <Item type='reg' id='numbers' name='Racer numbers'/>
                <Item type='reg' id='wristband' name='Wristbands'/>
                <Item type='reg' id='shirts' name='Shirts'/>
                <Item type='reg' id='patch' name='Patches'/>
                <Item type='reg' id='hats' name='Hats'/>
            </Category>
            <Category name='Merch' description={ merchText }>
                <Item type='merch' id='shirts' name='shirts'/>
                <Item type='merch' id='kit' name='Jersey/kit'/>
                <Item type='merch' id='stickers' name='Stickers'/>
            </Category>
            <Category name='In Kind' description={ inKindText }>
                <Item type='inkind' id='kit' name='Jersey/kits'/>
                <Item type='inkind' id='hats' name='Hats'/>
                <Item type='inkind' id='swag' name='Registration packet swag'/>
                <Item type='inkind' id='bags' name='Prize bags'/>
                <Item type='inkind' id='awards' name='Main race awards'/>
                <Item type='inkind' id='prizes' name='Side event prizes'/>
            </Category>
        </form>
    </main>
</>
