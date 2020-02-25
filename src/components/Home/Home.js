import React, {Component} from 'react'

class Home extends Component {
    
render () {
    return (
        <div>
            <nav>
                <h2>Credit Repair</h2>
                <ul className='navbar'>
                    <li>Home</li>
                    <li>How it Works</li>
                    <li>Education</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Get Started!</li>
                    <li>Client Login</li>
                </ul>
            </nav>

            <section className='background-container'>

            </section>

            <section className='expectations'>
                <h1>We set high expectations</h1>
                <p>We set high expectations for ourselves as a credit repair company. You can expect only the 
                   best service from our team of credit experts. In the financial industry, we are well respected 
                   and dedicated to helping our clients to get back on their best financial track. We are here to 
                   assist you on your journey. We work with credit bureaus and creditors to fix and rebuild tarnished credit.
                   Let our services and experience speak itself.
                </p>
            </section>

            <section className='process'>
                <h1>The Process</h1>
                <a className='box1'>
                    <h1>Analyze</h1>
                    <p>We work with you to identify any questionable negative item hurting your score.</p>
                <a/>
                <a className='box2'>
                    <h1>Address</h1>
                    <p>We challenge those negative item with the bureaus and your creditors.</p>
                </a>
                <a className='box3'>
                    <h1>Accelerate</h1>
                    <p>We keep the process going, helping you reach your credit goals.</p>
                </a>
            </section>

            <section className='education'>
                <h1>Education</h1>
                <a className='legal-box'>
                    <h1>Is Credit Repair Legal?</h1>
                    <p>Credit repair is legal option for those with less-than-great credit scores. 
                       However, before working with just any company that promises to improve credit scores, 
                       it is important to determine whether or not that company is operating within the 
                       boundaries of the law.</p>
                </a>
            </section>

        </div>
    )}
}

export default Home