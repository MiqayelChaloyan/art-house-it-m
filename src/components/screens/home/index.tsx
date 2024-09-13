'use client'

import About from './About';
import Programming from './Programming';
import OurAdvantages from './OurAdvantages';
import Learn from './Learn';
import Partners from './Partners';


interface Props {
    about: ABOUT_US_DETAILS_QUERYResult;
    data: HOME_DETALIS_QUERYResult;
    partners: PARTNER_Result[];
};

const Home = ({ about, data, partners }: Readonly<Props>) => {
    return (
        <>
            <About data={about?.about_us} />
            <Programming data={data?.about_course} />
            <OurAdvantages advantages={data?.our_advantages} />
            <Learn content={data?.content} />
            <Partners partners={partners} />
        </>
    )
};

export default Home;