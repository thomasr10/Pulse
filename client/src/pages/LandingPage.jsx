import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';
import MaxWidthButton from '../components/MaxWidthButton';
import { ArrowDown, Mic, Monitor, Video } from 'lucide-react';

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
                <div className="cards-container mt-32">
                    <HomeCard icon={<Mic className='icon' />} subtitle={'Chat Vocal en Temps Réel'} text={'Crystal clear voice and video for seamless communication'} />
                    <HomeCard icon={<Monitor className='icon' />} subtitle={'Partage Ton Écran à Tes Amis'} text={'Crystal clear voice and video for seamless communication'} />
                    <HomeCard icon={<Video className='icon' />} subtitle={'Chat Vocal en Temps Réel'} text={'Crystal clear voice and video for seamless communication'} />
                </div>
            </section>
            <section className="mt-48 cta-section">
                <div className="bg-shape-container">
                    <div className="background-shape blue"></div>
                    <div className="background-shape purple"></div>
                </div>
                <h2 className="title pt-32">Prêt(e) à Construire Ton Monde ?</h2>
                <p className="medium-gray-txt txt-center mt-16">Rejoins des milliers de communautés et connecte toi au monde de demain.</p>
                <div className="center mt-32">
                    <MaxWidthButton link='/register'>Commence ton aventure</MaxWidthButton>
                </div>
            </section>
            <Footer />
        </main>
    )
}