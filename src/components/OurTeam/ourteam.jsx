"use client"
import TitleMain from '@/components/TitleMain/TitleMain';
import styles from './index.module.scss';
import TeamBox from '@/components/TeamBox/TeamBox';



const OurTeam = () => {

    return (
        <>
            <div className={styles.teamSec}>
                <TitleMain
                    title={"Our team"}
                    tagName="h1"
                />

                <section className={`${styles.team_box} ${styles.china_team}`}>
                    <div className='container'>
                        <div className={`${styles.team_list}`}>
                            <TeamBox
                                memImg={"/images/dhanvee.jpg"}
                                memName="Dhanvee Panchmatiya"
                                memInfo="Head of Business Development"
                                email="dhanvee.panchmatiya@benhams.com"
                                phone1="+91 93212 86252"
                            />
                            <TeamBox
                                memImg={"/images/sushant.jpg"}
                                memName="Sushant Ohri"
                                memInfo="Business Development Manager – Delhi"
                                email="sushant.ohri@benhams.com"
                                phone1="+91 95602 08670"
                            />
                            <TeamBox
                                memImg={"/images/shivani.jpg"}
                                memName="Shivani Pawar"
                                memInfo="Business Development Executive"
                                email="shivani.pawar@benhams.com"
                            />
                            <TeamBox
                                memImg={"/images/rebecca.jpg"}
                                memName="Rebecca Paul"
                                memInfo="Business Development & Administrative Executive"
                                email="rebecca.paul@benhams.com"
                            />

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default OurTeam;

