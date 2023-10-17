import Link from 'next/link';
import styles from '../index.module.scss';
import { getmetadata } from '@/libraries/getMetaData';


export async function generateMetadata() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/privacy-policy/hardington-residential`, {
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

const HardingtonResidential = () => {
  return (
    <>
      <section className={styles.content}>
        <div className='container'>
          <div className={styles.my_row}>
            <div className={styles.content_left}>
              <ul>
                <li><Link href="/privacy-policy">Barratt Homes Privacy Policy</Link></li>
                <li><Link href="/privacy-policy/hardington-residential" className={styles.active}>Benham and Reeves Privacy policy</Link></li>
                <li><Link href="/privacy-policy/terms-of-use">Terms of use</Link></li>
                <li><Link href="/privacy-policy/cookies">Cookie Policy</Link></li>
              </ul>
            </div>

            <div className={styles.content_right}>
              <h1>Benham and Reeves Privacy policy</h1>
              <div className={styles.detail}>
                <h2>Benham and Reeves - Data Privacy</h2>
                <p>
                  Data Privacy is of high importance for Benham and Reeves and we want to be open and transparent with our use of your personal data. We have a policy setting out how your personal data will be processed and protected.
                </p>
                <h3>YOUR PRIVACY &amp; THIS POLICY</h3>
                <p>
                  We take the privacy of your personal information very seriously and know that you will wish to understand how we will use your personal information.
                </p>

                <h3>This Privacy Policy:</h3>
                <ul>
                  <li>
                    Will inform you about what personal information we collect and why, how we use it, who we share it with, as well as giving you other important information.
                  </li>
                  <li>
                    Covers personal information collected via our website as well as personal information that you may provide when corresponding directly with us; and
                  </li>
                  <li>
                    Sets out your rights and who you can contact for further information.
                  </li>
                </ul>
                <p>
                  By clicking on the “I agree to the Privacy Policy and Terms and Conditions” button you: (i) confirm that you have read, understood and agree to the terms of this Privacy Policy; and (ii) expressly consent to your personal information and/or any other data you might provide to us, being collected, transferred, used and/or disclosed by us as set out in this Privacy Policy.
                </p>

                <h3>WHICH PERSONAL INFORMATION DO WE COLLECT?</h3>
                <h2>Personal information that you provide voluntarily, including:</h2>

                <ul>
                  <li>Contact information, such as your name, mobile phone number, and email address;</li>
                  <li>Details of the type of property that you are interested in purchasing, such as number of bedrooms, location, price range;</li>
                  <li>Details of how interested you are in making a purchase and when you are looking to buy;</li>
                  <li>Details of whether you are a purchasing by way of a mortgage or other means and if you are planning to live in the property or purchasing it as an investment;</li>
                  <li>Where you have provided your feedback we will record your opinions and the text that you have written;</li>
                  <li>Details of your marketing preferences and whether you are happy to receive marketing communications via Email, Telephone, or text message.</li>
                </ul>

                <p>
                  There are generally no adverse effects for you if you choose not to provide your personal information. You will still be able to use our website to view properties, download brochures or request copies of them in person. However, without some of this personal information, we may not be able to communicate with you and/or take certain actions that you request, for example because this personal information is required to respond to your enquiries.
                </p>

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

                <h2>Uses of your personal information:</h2>
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

export default HardingtonResidential;