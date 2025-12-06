import MaxWidthButton from '../components/MaxWidthButton';
import { ArrowDown } from 'lucide-react';

export default function LandingPage() {
    return (
            <main className="section-wrapper">
                <section className="hero">
                    <div className="bg-shape-container">
                        <div className="background-shape blue"></div>
                        <div className="background-shape purple"></div>
                    </div>
                    <h1 >Réinvente tes échanges, explore le futur</h1>
                    <p className="mt-32 medium-gray-txt txt-center">Une exprérience de communication pensée pour demain : rapide, fluide et sans limites.</p>
                    <div className="center mt-48">
                        <MaxWidthButton link='/register'>Inscris toi dès maintenant</MaxWidthButton>
                    </div>
                    <div className="hero-footer">
                        <span>Fais défiler pour en savoir plus</span>
                        <ArrowDown className='icon-white' />
                    </div>
                </section>
                <section className='mt-48 feature-section'>
                    <h2>Fonctionnalités</h2>
                    <h3 className='mt-32'>Découvre une nouvelle façon de communiquer</h3>
                    <p className='medium-gray-txt mt-16'>Explore les différentes Fonctionnalités qui rendent notre plateforme unique.</p>
                </section>
            </main>
    )
}