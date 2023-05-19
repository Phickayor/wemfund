import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

function cookiepolicy() {
    return (
        <>
            <NavBar firstNav={"Home"} firstNavLink={"/"} secondNav={"About"} secondNavLink={"/about"} />
            <div className='mx-auto w-11/12 lg:w-10/12 my-10 font-[poppins] '>
                <h3 className='text-3xl font-bold my-10'>Cookie Policy</h3>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mt-5'>Effective Date: 16th May 2023.</h3>
                    <p className='text-lg'>
                        This Cookie Policy describes how Trippayer ("we," "us," or "our") uses cookies and similar technologies
                        on our website ("Website"). By accessing or using the Website, you consent to the use of cookies and
                        similar technologies as described in this Cookie Policy. If you do not agree with the practices described
                        in this policy, please adjust your browser settings or refrain from using the Website.
                    </p>
                    <div>
                        <h3 className='text-2xl font-semibold mt-5'>What are Cookies?</h3>
                        <p >
                            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website.
                            They are widely used to enhance your browsing experience, personalize content, and provide information to the website owners.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-2xl font-semibold mt-5'>Types of Cookies We Use</h3>
                        <ul className='space-y-4 w-11/12 text-md leading-6'>
                            <li>
                                a.<b>Necessary Cookies:</b>
                                These cookies are essential for the operation of the Website and enable you to navigate and use its features.
                                They are necessary for functions such as user authentication, security, and accessibility.
                            </li>
                            <li>
                                b.<b>Performance and Analytics Cookies:</b>
                                These cookies collect information about how visitors use the Website,
                                such as the number of visitors, pages visited, and the source of traffic.
                                This data helps us analyze and improve the performance of our Website and understand
                                how users interact with it.
                            </li>
                            <li>
                                c.<b>Functionality Cookies:</b>
                                These cookies allow the Website to remember choices you make and provide enhanced features,
                                such as language preferences or customized settings. They may also be used to provide certain
                                functionalities, such as video playback or social media integration.
                            </li>
                            <li>
                                d.<b>Performance and Analytics Cookies:</b>
                                These cookies are used to deliver advertisements that are relevant to your interests based on your browsing activities.
                                They may also be used to limit the number of times you see an advertisement and measure the
                                effectiveness of advertising campaigns.

                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mt-5'>Third-Party Cookies</h3>
                        <p className='text-lg'>
                            We may allow third-party service providers to place cookies on the Website to provide
                            us with analytics, advertising, and other services. These third parties may collect information
                            about your online activities over time and across different websites when you use the Website.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mt-5'>Cookie Management</h3>
                        <p className='text-lg'>
                            You can control and manage cookies in various ways. Most web browsers
                            allow you to accept or reject cookies, delete cookies already stored on
                            your device, or be notified before a cookie is set. Please refer to
                            your browser settings or help menu to learn more about these options.
                            Please note that disabling or blocking certain cookies may impact the
                            functionality and user experience of the Website.

                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mt-5'>Updates to this Cookie Policy</h3>
                        <p className='text-lg'>

                            We reserve the right to modify or update this Cookie Policy at any time.
                            We will notify you of any material changes by posting the updated Cookie Policy on the
                            Website. Your continued use of the Website after the posting of any changes constitutes
                            your acceptance of such changes.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mt-5'>Contact Us</h3>
                        <p className='text-lg'>
                            If you have any questions or concerns about these this Cookie Policy or our use of cookies, please contact us at
                            <a href="mailto:contacttrippayer@gmail.com" className='text-blue-500'> contacttrippayer@gmail.com .</a>
                        </p>
                    </div>
                    <p className='text-lg'>
                        Please read this Privacy Policy carefully before using the Website. By using the Website, you signify your agreement to this Privacy Policy.
                    </p>
                    <h3 className='text-2xl font-semibold mt-5'>Last Updated: 16th May 2023.</h3>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default cookiepolicy