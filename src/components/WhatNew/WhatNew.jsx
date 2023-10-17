import TitleMain from '../TitleMain/TitleMain';
import styles from './WhatNew.module.scss';
const WhatNew = () =>{
    return(
        <>
            <section className={styles.new}>
                <div className="container">
                <TitleMain 
                title="What's new"
                btnTitle="SHOW ALL INSIGHTS"
                showBtn={true}
                />
                
                <div className={`${styles.new_box} row`}>
                    <div className={`${styles.box_left} col-md-7 ${styles.london}`}>
                    <a href="/" style={{backgroundImage: 'url(/images/new1.jpg)'}}>
                        <div className={`${styles.content} ${styles.s_bg}`}>
                            <div className={styles.timeline}>
                            <span className={styles.type}>News</span>
                            |
                            <span className={styles.time}>25&nbsp;Aug&nbsp;2023</span>
                            </div>
                            <h2 className={styles.title}>
                            IT’S ACTION TIME FOR NEW HOMES IN HARROW NAMED AFTER PIONEERING PHOTOGRAPHER 
                            </h2>
                            <p className={styles.intr}>
                            In a nod to iconic English photographer James Robertson, Barratt London has announced the launch of the Robertson Apartments at its site Eastman Village in Harrow – offering a selection of one, two- and three-bedroom apartments to prospective buyers, situated in the heart of a top London redevelopment area. 
                            </p>
                        </div>
                    </a>
                    </div>
                    <div className={`${styles.box_right} col-md-5`}>
                    <ul>
                        <li className={`${styles.london} ${styles.s_bg}`}>
                        <a href="#">
                            <div className={styles.new_img} style={{backgroundImage: 'url(/images/news1.jpg)'}}></div>
                            <div className={styles.new_content}>
                            <div className={styles.timeline}>
                                <span className={styles.type}>News</span>
                                |
                                <span className={styles.time}>9&nbsp;Jun&nbsp;2023</span>
                            </div>
                            <h5 className={styles.title}>
                                NEW FIXTURE FOR THE WEMBLEY PROPERTY SCENE – BARRATT LONDON AND TRANSPORT FOR LONDON LAUNCH WEMBLEY PARK GARDENS
                            </h5>
                            <p className={styles.intr}>
                                Wembley Park Gardens is a perfect connection hub. 
                            </p>
                            </div>
                        </a>
                        </li>
                        <li className={`${styles.london} ${styles.s_bg}`}>
                        <a href="#">
                            <div className={styles.new_img} style={{backgroundImage: 'url(/images/news2.jpg)'}}></div>
                            <div className={styles.new_content}>
                            <div className={styles.timeline}>
                                <span className={styles.type}>News</span>
                                |
                                <span className={styles.time}>1&nbsp;May&nbsp;2023</span>
                            </div>
                            <h5 className={styles.title}>
                                INVEST IN LONDON’S MOST POPULOUS BOROUGH - BARRATT LONDON LAUNCHES NEW APARTMENTS AT HENDON WATERSIDE
                            </h5>
                            <p className={styles.intr}>
                                Barratt London will launch the latest phase of homes at its landmark Hendon Waterside development in NW9 this Spring. Goldfinch Apartments
                            </p>
                            </div>
                        </a>
                        </li>
                        <li className={`${styles.london} ${styles.s_bg}`}>
                        <a href="#">
                            <div className={styles.new_img} style={{backgroundImage: 'url(/images/news3.jpg)'}}></div>
                            <div className={styles.new_content}>
                            <div className={styles.timeline}>
                                <span className={styles.type}>News</span>
                                |
                                <span className={styles.time}>4&nbsp;Apr&nbsp;2023</span>
                            </div>
                            <h5 className={styles.title}>
                                A POST-EASTER TREAT: BARRATT LONDON LAUNCHES LATEST PHASE OF APARTMENTS AT FORMER CHOCOLATE FACTORY
                            </h5>
                            <p className={styles.intr}>
                                Barratt London is to launch the latest phase of homes at its landmark Hayes Village development in West London. Set on the site of the former Nestlé chocolate factory, the Richart Apartments.
                            </p>
                            </div>
                        </a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            
                </div>
            </section>
        </>
    );
}

export default WhatNew;