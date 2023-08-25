import Banner from '../../components/Banner/Banner';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section1/Section';
import Services from '../../components/Servi/Services';
import './HomePage.css';

function HomePage() {
	return (
		<div>
			<Banner />
            <Section />
            <Services/>
            <Contact/>
            <Footer />
		</div>
	);
}

export default HomePage;
