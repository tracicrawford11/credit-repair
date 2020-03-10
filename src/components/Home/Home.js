import React, {Component} from 'react'
import { Link } from 'react-router-dom'
//import './Home.css'

class Home extends Component {
    
render () {
    return (
        <div>
            <nav className="topnav">
                <h2 className='crc'>Credit Repair by Crawford</h2>
                <ul className='navbar'>
                    <li><Link to='/'><button>Home</button></Link></li>
                    <li><Link to='/services'><button>Services</button></Link></li>
                    <li><Link to='/contact'><button>Contact</button></Link></li>
                    <li><Link to='/getstarted'><button>Get Started!</button></Link></li>
                    <li><Link to='/login'><button>Client Login</button></Link></li>
                </ul>
            </nav>
            <section className='background-container'>
                {/* <img src='https://www.lexingtonlaw.com/content/dam/lexington-law/assets/images/seo-articles/content-image/credit-repair-company/2-benefits-of-repairing-your-credit.jpg' alt='benefits'/> */}
                <img className='fix-credit' src='https://www.badcredit.org/wp-content/uploads/2019/05/free-credit-repair-feat.jpg' alt='Fix'/>
            </section>

            <section className='expectations'>
                <h1 className='exp'>Introducing the next generation of credit repair.</h1>
                <p className='parexp'>We are an innovative team of dedicated, passionate, and remarkable individuals determined to help you repair the financial defects on your record and get you on the road to financial freedom.
                </p>
            </section>
            <section className='images'>
                <img className='benefits' src='https://www.lexingtonlaw.com/content/dam/lexington-law/assets/images/seo-articles/content-image/credit-repair-company/2-benefits-of-repairing-your-credit.jpg' alt='benefits' />
                <img className='advantage' src='https://www.lexingtonlaw.com/content/dam/lexington-law/assets/images/seo-articles/content-image/credit-repair-company/5-advantages-of-credit-repair-company.jpg' alt='advantage' />
            </section>

            <section className='education'>
                <h1 className='edu'>Education</h1>
                <article className='education-boxes'>
                    <a className='edbox1'>
                       <img className='myth1' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_10.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox2'>
                        <img className='fact1' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_11.jpg' alt='errors'/> 
                    </a>
                    <a className='edbox3'>
                        <img className='scores' src='https://bankonus.com/finance-expert/wp-content/uploads/2018/11/Good-Credit-Score.jpg' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='education2'>
                <h1 className='edu2'>Education</h1>
                <article className='education-boxes2'>
                    <a className='edbox1-2'>
                        <img className='myth2' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_08.jpg' alt='scores' />
                    </a> 
                    <a className='edbox2-2'>
                       <img className='fact2' src='https://www.creditlawcenter.com/wp-content/uploads/2017/06/Top-5-Credit-Myths-1_Page_09.jpg' alt='scores' />
                    </a>
                    <a className='edbox3-2'>
                        <img className='summary2' src='https://thecreditpros.com/wp-content/uploads/2018/06/how-credit-scores-are-built.gif' alt='Credit' />
                    </a>
                </article>
            </section>

            <section className='process'>
                <h1 className='proc'>The Process</h1>
                <img className='steps' src='https://www.jtaylorandassociates.com/images/process.png' alt='steps' />
            </section>

        </div>
    )}
}

export default Home