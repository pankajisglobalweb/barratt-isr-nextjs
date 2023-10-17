import Link from 'next/link';
import styles from './index.module.scss';
import { getmetadata } from '@/libraries/getMetaData';


export async function generateMetadata() {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/privacy-policy`, {
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

const PrivacyPolicy = () => {
    return (
        <>
            <section className={styles.content}>
                <div className='container'>
                    <div className={styles.my_row}>
                        <div className={styles.content_left}>
                            <ul>
                                <li><Link href="/privacy-policy" className={styles.active}>Barratt Homes Privacy Policy</Link></li>
                                <li><Link href="/privacy-policy/hardington-residential">Benham and Reeves Privacy policy</Link></li>
                                <li><Link href="/privacy-policy/terms-of-use">Terms of use</Link></li>
                                <li><Link href="/privacy-policy/cookies">Cookie Policy</Link></li>
                            </ul>
                        </div>

                        <div className={styles.content_right}>
                            <h1>Barratt Homes Privacy Policy</h1>
                            <div className={styles.detail}>
                                <p>This is the privacy statement for Barratt Homes. Please read it carefully.
                                    You should only use this site and complete our Reservation Form if you
                                    agree to our use of information about you in accordance with this
                                    privacy statement.</p>
                                <h2>Protecting your personal data</h2>
                                <p>We&apos;re committed to protecting you and your family&apos;s personal data and information. This policy applies to any personal information or “personal data” that we collect from you. It covers how we:</p>
                                <ul>
                                    <li>Collect.</li>
                                    <li className="bold">Use.</li>
                                    <li>Disclose.</li>
                                    <li>Transfer.</li>
                                    <li>Store.</li>
                                    <li>Destroy/Remove your personal data.</li>
                                    <li>It also includes the use of cookies on our websites and how you can control these in addition to how you can contact us.</li>
                                </ul>
                                <p>
                                    Please read this policy carefully. By using any of our websites, and any services we offer via our websites, you are agreeing to the processing of your data as set out below. We sometimes use your data to provide additional marketing services but you can always opt out. For more information, see Section 6 Contacting you for marketing purposes below.
                                </p>

                                <h2>1. Introducing Barratt Developments PLC</h2>
                                <p>
                                    The Barratt Developments PLC group includes the brands:
                                </p>
                                <ul>
                                    <li>Barratt Homes.</li>
                                    <li>David Wilson Homes.</li>
                                    <li>Barratt London.</li>
                                    <li>BD Living.</li>
                                    <li>Wilson Bowden Developments.</li>
                                    <li>In addition, we act on behalf of a number of Joint Ventures, in which we hold a material interest.</li>
                                </ul>
                                <p>
                                    In this policy, &quot;we&quot; refers to all of the above.
                                </p>
                                <p>
                                    The Barratt Developments PLC website is operated by a third party on Barratt&apos;s behalf. The Barratt Developments PLC website has a separate privacy policy aimed at investors which is located at <a href="/">http://www.barrattdevelopments.co.uk/site-services/privacy</a>
                                </p>
                                <h2>2. Our commitment to you</h2>
                                <p>
                                    We are committed to safeguarding your personal information and we comply with all data protection laws including:
                                </p>
                                <ul>
                                    <li>The Data Protection Act 2018;</li>
                                    <li>The UK GDPR - General Data Protection Regulation; and</li>
                                    <li>Any regulations made under or to supplement either of the above, relating to the personal information that we collect about you.</li>
                                </ul>

                                <h2>3. When do we collect personal information about you?</h2>
                                <p>
                                    We may collect personal information when you:
                                </p>
                                <ul>
                                    <li>Visit/access one of our websites or platforms¹.</li>
                                    <li>Contact us by telephone, email, SMS, letter or any other form of messaging.</li>
                                    <li>Visit any of our offices or developments.</li>
                                    <li>Complete any of our website forms for a service request.</li>
                                    <li>Access information about our developments and/or new homes via a third-party provider, such as a property portal e.g. Rightmove or others.</li>
                                    <li>Whenever you enter into any transaction with us, whether it’s in person or any other way.</li>
                                    <li>If you request information from us with a view to entering into a transaction with us.</li>
                                </ul>
                                <p>As well as information about:</p>
                                <ul>
                                    <li>Your use of our website.</li>
                                    <li>The purpose of your visit to our website or the reason you made contact with us.</li>
                                </ul>
                                <p>This policy also covers our use of any of your personal information, whether provided to us in person, over the phone, via email, SMS or any social messaging, via website forms, property portals or in other correspondence.</p>
                                <h2>Requests for additional information</h2>
                                <p>Sometimes we will require you to provide further personal information. This may be if you are purchasing or thinking about purchasing a home from us, or if you ask us to contact you with properties/developments that may be of interest to you. Whenever we do this, we will tell you why we are collecting this information and how we will use it.</p>
                                <h2>Identity verification and anti-money laundering</h2>
                                <p>
                                    One of the circumstances in which we may request additional personal information from you is when you are thinking about purchasing a home with us and, before you can do so, we need to verify your identity and comply with our anti-money laundering obligations.
                                </p>
                                <p>
                                    To carry out those checks, we may use a system provided by a third party, Credas Technologies Ltd (Credas).  We will provide certain personal information to Credas (your name, address and contact information). Credas will then contact you to ask you to download the Credas mobile application and to provide certain additional personal information via that mobile application (this may include, for example, your financial data, your photo and passport information).  Credas will verify the information you have provided against other databases that they have access to (such as the full electoral roll, and information held by credit reference agencies)), before providing us with the results of those searches to allow us to decide whether we can progress with your house purchase.  In carrying out these checks Credas may handle certain special categories of personal information; in particular, biometric data (if they need to scan the photo on your passport) and information about any criminal convictions or offences you have committed.
                                </p>
                                <p>
                                    Where Credas needs to verify your information against databases held by credit reference agencies - because it cannot verify that information by reference to the full electoral roll - then those checks will leave what&apos;s called a &quot;soft footprint&quot; on your credit record; a soft footprint has no negative effect on your credit rating.
                                </p>
                                <p>
                                    You can find further information about ours, and Credas&apos; use of your personal information for these purposes in Credas&apos; End User Privacy Policy, rel=&quot;noopener noreferrer&quot; which is available <a href="https://www.credas.co.uk/credas-end-user-privacy-policy/">here</a>.
                                </p>
                                <p>
                                    We use your personal information for these purposes on the basis that we have a legal obligation to carry out these checks.  It is in our legitimate interests to use the Credas system to undertake those checks because it is a simpler, more effective way of carrying out these checks than for us to do them manually.  If you would rather we did not use the Credas system to verify your identity, please raise your objection with our sales adviser when they collect personal information from you. If you&apos;d like more information on our use of the Credas system, please contact our Data Protection Manager (you can find their details at the end of this privacy policy).
                                </p>

                                <h2>Queries via social media</h2>
                                <p>
                                    Our social media pages, such as Twitter and Facebook, are monitored by a third-party company. They pass any customer queries, questions or complaints onto the most appropriate person in our team, so that we can respond accordingly.
                                </p>

                                <h2>IP addresses</h2>
                                <p>
                                    If you contact us online, we may monitor the type of device used by you. This may include specific identification, such as your IP address².
                                </p>

                                <h2>CCTV and call monitoring</h2>
                                <p>
                                    Our developments and Sales Offices use CCTV to make sure we provide a safe and secure environment for all visitors to our premises and to ensure the protection of our employees and property. We also record calls for training, monitoring and quality purposes to and from our Customer Services Helpline.
                                </p>

                                <h2>4. How will we use this information?</h2>
                                <p>
                                    We do not sell customers&apos; personal data to third parties and will only use your personal information to provide you with details of our own products, properties or developments which we believe will be of interest to you. In addition, we may use your information to:
                                </p>
                                <ul>
                                    <li><span className="bold">Contact you</span>. If you have indicated a specific interest in a property/development, or a particular area in which we have properties/developments available.</li>
                                    <li><span className="bold">Contact you</span></li>
                                    <li><span className="bold">Provide a relevant service</span>. If you have contacted us for a specific purpose or accessed our services by completing a website form and not opted out, we&apos;ll take into account your perceived preferences for a specific property type or location. In the event that you do not wish to receive this personalised service, you can unsubscribe from our emails or similarly contact us as set out in Section 10 of this policy.</li>
                                    <li><span className="bold">Tailor our service to your location</span>. With your permission, we may use IP addresses and device identifiers to identify your location. We will use this for general, depersonalised statistical purposes. We may also use this information to direct you to specific developments/properties in your area.</li>
                                    <li><span className="bold">Improve our service</span>. We provide information to third parties for research, market research and analytical purposes. These activities will be undertaken to help us to improve and promote our products and services and provide consumer insight. No personal data will be publicly available.</li>
                                </ul>
                                <p>
                                    Please rest assured that any personal information given to us for a specific use or purpose will not be used for any other purpose without your notification and (where appropriate) permission. See Section 10.
                                </p>

                                <h2>5. When will we contact you?</h2>
                                <p>
                                    We may contact you:
                                </p>
                                <ul>
                                    <li><span className="bold">For legitimate purposes</span> aligned with our contract.</li>
                                    <li><span className="bold">In relation to a previous communication from you. </span>This includes any comment or complaint concerning us, our services, properties or developments, or any previous contact we may have had with you.</li>
                                    <li><span className="bold">If you requested further information</span> or signed up to a product, property or development, whether directly through us or via a third-party provider, such as a property portal.</li>
                                    <li><span className="bold">If you have expressed an interest</span> in a specific product, property or development.</li>
                                    <li><span className="bold">To provide you with additional information</span> concerning a specific property/development, type of property/ development or similar properties/developments to those in which you have expressed an interest.</li>
                                    <li><span className="bold">For marketing purposes</span> if you have chosen to receive a service from us by completing one of our website forms and not opted out, in accordance with this policy³, see Section 6.</li>
                                </ul>
                                <h2>6. Contacting you for marketing purposes</h2>
                                <p>
                                    We will only contact you for marketing purposes, via email, SMS or phone, if you have agreed to this or where you have requested a service from us and not opted out. You can easily unsubscribe from any of those sources at any time.
                                </p>
                                <p>
                                    We will deem a service request to be any of the following:
                                </p>
                                <ul>
                                    <li><span className="bold">Online appointment booking</span> - using our appointment tool on the website to select a date and time to visit one of our developments.</li>
                                    <li><span className="bold">Arrange a viewing</span> - to request a viewing. In this instance we will call you to arrange a suitable time for an appointment for you to visit one of our developments.</li>
                                    <li><span className="bold">Call-back request</span> - when you request us to call you back to find out more about one of our developments.</li>
                                    <li><span className="bold">Keep me informed</span> - this is where you ask us to keep you updated on a development that has not launched yet (coming soon site).</li>
                                    <li><span className="bold">Download brochure</span> - when you request to download a brochure of one of our developments.</li>
                                    <li><span className="bold">Registration</span> - when you register on our website with an account to store your searches, etc.</li>
                                    <li><span className="bold"></span></li>
                                    <li><span className="bold"></span></li>
                                </ul>

                                <h2>Information emails/SMS/phone calls</h2>
                                <p>
                                    We offer regular information by emails, telephone and SMS communications concerning our properties and developments.
                                </p>

                                <h2>Tailoring our service to you</h2>
                                <p>
                                    We may personalise our communications with you based on the information you provide to us and the information we obtain when you use our platforms.
                                </p>

                                <h2>Third parties</h2>
                                <p>
                                    We do not allow the information we hold about you to be used for advertising purposes or to be shared with third parties for them to use for marketing their own products and services. However, if you show an interest in a specific property/development or type of property/development via a third-party website, such as a property portal, this is outside of our remit - we have no control over who else can contact you.
                                </p>
                                <p>
                                    We may send you articles, guides and information in relation to household related topics that have been produced in conjunction with one of our carefully selected charitable partners in order to provide you with inspiration and guidance.
                                </p>

                                <h2>7. Keeping your information private</h2>
                                <p>
                                    Your information will be kept private and confidential, except where we are obliged/permitted to share it with third parties by law (e.g. Government bodies, law enforcement agencies and similar).
                                </p>
                                <p>
                                    We will retain your information within our group of companies, except:
                                </p>
                                <p>
                                    <span className="bold">At your request:</span> If you have requested that we share the information with you or have given your permission.
                                </p>
                                <p>
                                    <span className="bold">To fulfil our legal obligations or our contractual/similar obligations to you:</span> For example, in connection with any property you are in the course of purchasing or have purchased from us, or which you had previously sought to purchase from us. This could include:
                                </p>
                                <ul>
                                    <li>To our solicitors, your solicitors or other advisers for the purposes of progressing a sale or dealing with any issue you may have.</li>
                                    <li>To a third party for the purposes of carrying out a survey in relation to your experience with us.</li>
                                    <li>With a consultant or a subcontractor appointed to carry out/required to carry out work to a property which you have purchased.</li>
                                    <li>To any of your advisers in connection with any contract or transaction entered into with us for the purposes of performance of our obligations.</li>
                                    <li>For statistical or similar analysis in relation to purchase or use of our properties, products or any service we provide.</li>
                                    <li>To third parties (including Credas) for the purposes of verifying your identity and complying with our anti-money laundering obligations (as described in more detail in section 3).</li>
                                </ul>

                                <h2>Keeping you in the know</h2>
                                <p>
                                    When you enter into a contract with us, we will set out, as comprehensively as possible, the purposes for which we may use your personal information in order to fulfil our contract with you and address any issues relating to our performance.
                                </p>

                                <h2>Destroying data</h2>
                                <p>
                                    Whilst not sharing your personal information, we may use suitable and accredited third-party organisations specifically for the purpose of destroying or deleting any personal data.
                                </p>

                                <h2>8. Is there an age limit to who we can contact?</h2>
                                <p>
                                    If you are under the age of 18, you should obtain your parents’ or guardians’ permission before you contact us. It is unlikely that we will be in a position to provide you with any information which may assist you, or be relevant to you, until you reach the age of 18 – this is simply because of the nature of the legal obligations you will enter into when purchasing a property.
                                </p>

                                <h2>9. How long do we store your information?</h2>
                                <p>
                                    This is dependent upon its purpose, or the amount of time set out in the contract you enter into with us.
                                </p>
                                <ul>
                                    <li><span className="bold">Purchasing a property:</span> If you enter into a contract with us to purchase a property, we will hold your information for a maximum of 12 years from the date of completion of that purchase.</li>
                                    <li><span className="bold">Anti-money laundering:</span> In the event that you provide us with personal information so that we can fulfil any anti-money laundering obligations, we will retain such information for a period of 5 years - this is to fulfil our legal obligations.</li>
                                    <li><span className="bold">If you contact us:</span> If you get in touch regarding any of our properties/developments or types of property/developments or the services we provide - whether we receive such contact directly from you or via a third party - we will retain your personal information until whichever of the below happens first:</li>
                                    <li><span className="bold">You request that we delete it:</span> We will need to retain a record of your request to be deleted.</li>
                                    <li><span className="bold">A maximum period of 2 years:</span> From the date that you last made contact with us - directly or via a third-party - in relation to any of our properties or developments.</li>
                                </ul>
                                <p>
                                    We will use all reasonable efforts to delete (aside from the note of your request to be deleted) all information in our possession which constitutes, in our reasonable opinion, personal data belonging to you.
                                </p>

                                <h2>10. Your rights</h2>
                                <h2>Deletion of personal data “Right to be forgotten”</h2>
                                <p>
                                    It is your right to request the deletion of your personal data from our records, except (as explained above) if it is necessary for us to perform our legal obligations or contractual obligations to you or another third party.
                                </p>

                                <h2>Keeping your details accurate</h2>
                                <p>
                                    You have the right to ask us to rectify any personal data we hold about you which is inaccurate or incomplete.
                                </p>

                                <h2>Sending a request</h2>
                                <p>
                                    A request for the deletion or correction of personal data should be addressed to the Data Protection Manager at Barratt Developments PLC at our registered office, or by email to dataprotectionmanager@barrattplc.co.uk
                                </p>
                                <p>
                                    Please note that while we always strive to comply with any requests you make, we cannot guarantee to action any request for the deletion or rectification of your personal data if it is not made using the method outlined above.
                                </p>

                                <h2>What do we do?</h2>
                                <p>
                                    Within reason, we will aim to make anonymous and/or delete any of the personal data which we hold in relation to you. It is in the nature of digital or computer records that we cannot guarantee that every trace or record of your personal data will be removed, but we will delete it as far as it is reasonably possible for us to do so.
                                </p>

                                <h2>Third party platforms</h2>
                                <p>
                                    If you wish to be deleted from or want to ensure your details are accurate with any third-party owned platform, such as a property portal, you will need to contact them directly. These third party websites have their own privacy policies, and are also likely to use cookies, and we therefore advise you to review them.
                                </p>

                                <h2>11. Finding out what personal information we hold.</h2>
                                <p>
                                    Under the UK GDPR, you have the right to request a copy of any personal information we hold about you and to have any inaccuracies corrected.
                                </p>
                                <p>
                                    Whilst no fee is charged, we may require you to prove your identity (with two documents of approved identification) before searching our records. At the present time, the information will be provided to you within one month from the date the request was received.
                                </p>

                                <h2>Identification that we accept</h2>
                                <p>
                                    The following are examples of the type of identification that we can accept in order to process your information request:
                                </p>
                                <ul>
                                    <li>Passport.</li>
                                    <li>Driving licence.</li>
                                    <li>Birth or marriage certificate.</li>
                                    <li>Utility bill (from the past 3 months).</li>
                                    <li>Current vehicle registration document.</li>
                                    <li>Bank statement (from the past 3 months).</li>
                                    <li>Rent book or similar tenancy agreement (that covers the past 3 months).</li>
                                </ul>
                                <p>
                                    Please note, if we have previously established your identity and it matches the information you provide, this may be sufficient for the purposes of actioning your request. If you have not previously provided us with identification, then we may require you to provide copy documentation of the examples listed above in order to process your request.
                                </p>
                                <p>
                                    The amount we charge and the period of time in which we are able to action your request may alter by law. If so, this policy will be amended.
                                </p>

                                <h2>Any questions?</h2>
                                <p>
                                    So that we avoid any delays to your application, please address any questions concerning our privacy and cookies policy to the Data Protection Manager at the registered office of Barratt Developments PLC set out below or using the email address provided in this policy.
                                </p>

                                <h2>12. Accessing our platforms from outside the UK.</h2>
                                <p>
                                    Depending upon your location, different privacy rules may apply as a matter of law. Any personal information that we use or process is done so in accordance with the law applicable in England, Wales or Scotland, as appropriate.
                                </p>

                                <h2>13. Web browser cookies.</h2>
                                <h2>What is a cookie?</h2>
                                <p>
                                    A cookie contains a small amount of data and (typically) a unique identifier. When you access any of our websites or platforms (or those of third-party providers) a cookie will be sent to your device. The cookie records information about your online preferences and therefore allows us to tailor our websites and any contact with you to your specific interests.
                                </p>

                                <h2>Why do we use cookies?</h2>
                                <p>
                                    The information we obtain by monitoring all visits to our websites enables us to improve, through anonymous analysis, our services to our customers and visitors.
                                </p>
                                <p>
                                    Many websites use cookies in order to see whether a device has visited the website before. Any repeat visit is verified by finding the cookie left previously. By using cookies in this way, we can provide a better and more personal user experience. It also enables us to recognise whether you have already signed up to receive information from us – thus avoiding duplication.
                                </p>
                                <p>
                                    Your web browser may also provide us with information concerning your device, such as an IP address or details about the browser you are using. For example, if you are looking at a specific location or property, we may use your location to ensure that any web pages or communications are tailored to you.
                                </p>

                                <h2>Please note, you are able to change your cookies settings to control access to any device you are using.</h2>
                                <h2>Information about other websites</h2>
                                <p>
                                    We cannot control any information concerning websites other than those operated by us. You must refer to those websites for their terms and conditions and privacy policies.
                                </p>

                                <h2>14. Mobile applications.</h2>
                                <p>
                                    We occasionally release mobile applications to complement specific developments. Use of these mobile applications is set out in the terms and conditions, which you will need to accept in order to load and access the app on your device.
                                </p>

                                <h2>15. Changes to our privacy and cookies policy.</h2>
                                <p>
                                    We may make changes and update our privacy and cookies policy from time to time and in accordance with updated legislation. Any such changes will be shown here as part of our privacy and cookies policy and will apply from the date that they are published. We are unable to contact you directly to inform you of these changes, other than in response to a specific request made to our Data Protection Manager as referred to above.
                                </p>
                                <p>
                                    May 2021: We updated this privacy policy to refer to our use of your personal information for the purposes of verifying your identity and complying with our anti-money laundering obligations.  Specifically, we updated this privacy policy to refer to our use of the Credas system for those purposes.
                                </p>

                                <h2>16. Contacting us concerning our privacy and cookies policy.</h2>
                                <p>
                                    Any contact you wish to make with us concerning this policy or how it works in practice should be directed to the Data Protection Manager. Please either write using the email address provided, or via post to our registered office:
                                </p>
                                <p>
                                    Barratt Developments PLC<br />

                                    Barratt House<br />

                                    Cartwright Way<br />

                                    Forest Business Park<br />

                                    Coalville<br />

                                    Leicestershire LE67 1UF<br />

                                    <a href="mailto:dataprotectionmanager@barrattplc.co.uk">dataprotectionmanager@barrattplc.co.uk</a>
                                </p>
                                <p>
                                    ¹ Platforms are the means by which we establish digital contact, including websites operated by us.
                                </p>
                                <p>
                                    ² IP addresses are specific to any device used. This could be a laptop computer, tablet or phone.
                                </p>
                                <p>
                                    ³ Similar developments may include developments in similar locations. Properties may include other properties within our range, which we consider relevant based on previous contact with you.
                                </p>
                            </div>
                        </div>





                    </div>
                </div>
            </section>
        </>
    );
}

export default PrivacyPolicy;