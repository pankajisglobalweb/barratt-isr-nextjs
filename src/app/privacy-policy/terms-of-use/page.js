import Link from 'next/link';
import styles from '../index.module.scss';
import { getmetadata } from '@/libraries/getMetaData';



export async function generateMetadata() {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/privacy-policy/terms-of-use`, {
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        return getmetadata(data)
    } catch (e) {
        return {};
    }
}


const TermsOfUse = () => {
    return (
        <>
            <section className={styles.content}>
                <div className='container'>
                    <div className={styles.my_row}>
                        <div className={styles.content_left}>
                            <ul>
                                <li><Link href="/privacy-policy">Barratt Homes Privacy Policy</Link></li>
                                <li><Link href="/privacy-policy/hardington-residential">Benham and Reeves Privacy policy</Link></li>
                                <li><Link href="/privacy-policy/terms-of-use" className={styles.active}>Terms of use</Link></li>
                                <li><Link href="/privacy-policy/cookies">Cookie Policy</Link></li>
                            </ul>
                        </div>

                        <div className={styles.content_right}>
                            <h1>Terms of use</h1>
                            <div className={styles.detail}>
                                <h2>Protecting your personal data</h2>
                                <p>
                                    This website is provided by Benham & Reeves on behalf of Barratt London, a brand of Barratt Developments PLC (“Barratt”). By accessing this website you are deemed to have accepted these terms. If you do not agree to them you must not use this website. We may at any time revise these terms of use. You should therefore check these terms of use every time you visit this website to review the conditions applicable to your current use of the website. Barratt is incorporated in England and Wales. This website is operated and maintained by Benham & Reeves on behalf of Barratt from its offices in Dubai, United Arab Emirates. Benham & Reeves and Barratt make no representation that content on this website is appropriate or available for use in other locations. Those who choose to access this website from other locations do so on their own initiative and are responsible for compliance with local or national laws, if and to the extent local and national laws are applicable.
                                </p>
                                <h3>Disclaimers</h3>
                                <p>
                                    The website is provided on an &quot;as is&quot; basis by Benham & Reeves on behalf of barratt. Benham & Reeves and barratt expressly disclaims all warranties, including the warranties of merchantability, fitness for a particular purpose and non-infringement. Benham & Reeves and barratt disclaims all responsibility for any loss, injury, claim, liability or damage of any kind resulting from, arising out of or any way related to (a) any errors in or omissions from this website and the content, including but not limited to technical inaccuracies and typographical errors, (b) any third party websites or content therein directly or indirectly accessed through links in this website, including but not limited to any errors in or omissions therefrom, (c) the unavailability of the website or any portion thereof, (d) your use of this website or (e) your use of any equipment or software in connection with the website or (f) any viruses that may infect your computer equipment, software or other property as a result of browsing or use of this website.
                                </p>

                                <h3>Accuracy of Information</h3>
                                <p>
                                    Benham & Reeves and Barratt has taken all reasonable care in the preparation of the contents of this website and intends that the information is accurate at the time it is uploaded. However, such information can be subject to change and therefore we do not warrant its accuracy. Particulars are for illustration only. We operate a policy of continuous product development and individual features may vary from time to time. Consequently, these particulars should be treated as general guidance only and do not constitute a contract, part of a contract, or a warranty. You should take appropriate steps to verify any information upon which you wish to rely on. To find out more about a development, we advise that you speak to a Benham & Reeves agent.
                                </p>

                                <h3>HOW DO WE COLLECT YOUR INFORMATION?</h3>
                                <h2>Personal Information provided by you:</h2>
                                <p>In no event and under no legal or equitable theory, whether in tort, contract, strict liability or otherwise, shall Benham & Reeves or Barratt be liable for any direct, indirect, special, incidental or consequential damages arising out of any use of the information contained herein, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of results, or computer failure or malfunction.</p>

                                <h3>HOW DO WE COLLECT YOUR INFORMATION?</h3>
                                <h2>Personal Information provided by you:</h2>
                                <p>
                                    The main way that we collect your personal information from you is when you provide it to us. This could be through our website or when speaking to one of our sales staff, either in person, via email or on the telephone.
                                </p>

                                <h2>Personal information provided by third parties:</h2>
                                <p>
                                    Occasionally we may receive personal information about you from other sources, which we may add to the personal information we already hold about you in order to help us provide our products and services to you.
                                </p>
                                <p>
                                    We may receive your initial name and contact details from an introducer or other person(s) acting as agent on your behalf.
                                </p>

                                <h3>WHY WE WILL USE YOUR PERSONAL INFORMATION?</h3>

                                <h3>Uses of your personal information:</h3>
                                <p>The most common purposes for which we will use your personal information are:</p>

                                <h2>General communication:</h2>
                                <p>
                                    We will use your personal information to communicate with you and provide you with the details of international properties that you have requested and to respond to any enquiries you may have.
                                </p>

                                <h2>Understanding your property search requirements:</h2>
                                <ul>
                                    <li>We will use the personal information that you provide to us to try to find the right property for you.</li>
                                    <li>We will use the details of when you are looking to buy and assess how interested we believe you are in making a purchase.</li>
                                    <li>We will use the details of the type of property that you are interested in purchasing, the above information and your direct marketing preferences to inform you about international properties that we believe may be suitable to you.</li>
                                </ul>

                                <h2>Direct Marketing:</h2>
                                <p>
                                    Where you have expressly given us consent, we may send you information about new property developments and/or services which may be of interest to you. We will only do this where you have agreed to it and using your preferred methods of communication.
                                </p>

                                <p>
                                    We will do our best only to send you information about news, offers and the latest properties that could be suitable for you. To help with this we will ask for personal information about you – the more we know about the type of international property you are interested in, the easier it will be for us to find the right property for you.
                                </p>

                                <p>
                                    We ask for your express consent to receive marketing materials. This gives you the best opportunity to find the home that is right for you. We will not send you any information about timeshare properties.
                                </p>

                                <p>
                                    You can unsubscribe or withdraw your consent and ask us to stop sending you marketing materials at any time by using the ‘unsubscribe’ link at the bottom of our marketing emails, by informing one of our sales consultants (with whom you have previously been dealing).
                                </p>

                                <p>
                                    We keep a record of when we receive consent from individuals and regularly review consent to check updates to preferences. We act on requests to unsubscribe or withdrawals of consent as soon as we can.
                                </p>

                                <h3>WHO WE WILL SHARE YOUR INFORMATION WITH?</h3>
                                <p>
                                    We may disclose your personal information to our third party service providers, agents, subcontractors and other organisations for the purposes of providing services to us or directly to you on our behalf. Such third parties may include cloud services providers (such as hosting and email management), or other third parties who provide services to us. These include but are not limited to IT service providers, solicitors, auditors and any agents acting on our or your behalf. Where these third party providers are based in other jurisdictions, they may be subject to applicable laws exclusive to them that are different from the laws of your country (and, in some cases, not as protective).
                                </p>

                                <p>
                                    When we engage third party service providers, we will retain control over and we will remain fully responsible for your personal information and we will use appropriate safeguards and technical or regulatory measures as required by applicable law to ensure the integrity and security of your personal data when engaging such service providers. We instruct our third party service providers not to use your personal information for their own purposes, and require that such personal information will be used/processed by these service providers only for specified purposes and in accordance with our instructions.
                                </p>

                                <p>
                                    We may also share your personal information with law enforcement and regulatory agencies, if prescribed under any applicable law or if required to be furnished by us in connection with their duties.
                                </p>

                                <h2>Third Party Links:</h2>
                                <p>
                                    Our websites may include links to third party websites, plug-ins and applications. Clicking on these links or enabling such connections may allow third parties to collect or share data about you. We are not responsible for such third party websites or their privacy policies. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                                </p>

                                <h3>CHANGES &amp; UPDATES TO PRIVACY POLICY</h3>
                                <p>
                                    By accepting the terms of this Privacy Policy, you acknowledge and agree that we may amend this Privacy Policy from time to time in our absolute discretion, including (but not limited to) in order to reflect any changes to the way in which we process your personal information or changing legal requirements. In case of any such changes, we will post the changed Privacy Policy on our website or publish it otherwise. The changes will take effect as soon as they are posted on the privacy policy page. Your continued use of our website, platform and/or services after the publication date of a revised version of this Privacy Policy constitutes acceptance of its revised terms. If you are a regular user of our website we recommend that you check the Privacy Policy regularly for any updates.
                                </p>

                                <p>
                                    This information was last updated: March 4 2023 17:00.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default TermsOfUse;