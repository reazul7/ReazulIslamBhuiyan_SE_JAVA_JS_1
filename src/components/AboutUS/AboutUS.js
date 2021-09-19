import React from 'react';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const AboutUS = () => {
    return (
        <div>
            <NavBar />
            
            {/* about us banner design */}
            <div className="relative h-64 m-8 overflow-hidden rounded-lg bg-green-500">
                <div className="absolute z-30 flex w-full h-full">
                    <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
                        <h2 className="text-5xl">About Sweet iTech</h2>
                        <span></span>
                    </div>
                    <div className="absolute top-0 right-0 flex w-full h-full">
                        <div className="w-1/3 h-full bg-green-500"></div>
                        <div className="relative w-1/3">
                            <svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-20 h-full text-green-500">
                                <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                            <svg fill="currentColor" viewBox="0 0 100 100" className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
                                <polygon points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 block w-9/12 h-full"><img alt="image" className="object-cover min-w-full h-full" src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" /></div>
            </div>


            {/* Our Services Area */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-7x1">

                    {/* Our Services header */}
                    <div className="flex flex-wrap w-full mb-4 p-4">
                        <div className="w-full mb-6 lg:mb-0 text-center">
                            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Our Services</h1>
                            <div className="h-1 w-20 bg-green-500 rounded mx-auto"></div>
                        </div>
                    </div>

                    {/* Services Details */}
                    <div className="flex flex-wrap -m-4">

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/L7J6ZCJ7RPOIVWYQGRYWCNUTWZRR55QRUIJVOZ1H9WDJFTJGFI5XWQ4VXKTJZT31RRDEH8DNM12550C1MH0IQ9H4E2QPAD4Q2A7XIcon-4%20(2).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">Software Ecosystems</h2>
                                <p className="leading-relaxed text-base">Mobile, Web and IoT based, customised multi-tiered solutions to manage every aspect of enterprise operations, creating an ecosystem</p>
                            </div>
                        </div>

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/I6Q0CH5GOXS25L1Z6Y5XL2P6OMIKXPSLNU0LG5IE2QDML0M6Z2O05P1PNQU3IL78R5U2FYANX1Q0APRZLYOHO5RPVCKJGP40YYWWIcon-2%20(2).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">Mobile Applications</h2>
                                <p className="leading-relaxed text-base">Android and iOS apps supporting world-wide distributed systems bringing your business in your mobile device</p>
                            </div>
                        </div>

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/DWHBYPPBKNMVB4AOCO969FPFLSBUWBHQ9E3N3WREF9M6SNS76ZVCKOV4M37OZFKVI0PKQ41NM81DHUV1UY6ZMBHA70S9XXQU6Z7CIcon-3%20(2).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">Business Solutions</h2>
                                <p className="leading-relaxed text-base">Customised ERP, CRM, HR and BI solutions that are scalable and load-balanced, self-sustaining in all dimensions</p>
                            </div>
                        </div>

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/L7J6ZCJ7RPOIVWYQGRYWCNUTWZRR55QRUIJVOZ1H9WDJFTJGFI5XWQ4VXKTJZT31RRDEH8DNM12550C1MH0IQ9H4E2QPAD4Q2A7XIcon-4%20(2).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">Cloud-native Systems</h2>
                                <p className="leading-relaxed text-base">Explore the future with distributed systems, using latest cloud-based technologies and integrated CDN servers</p>
                            </div>
                        </div>

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/JV430VUUHTWHN2PT6XZ4J0MHPLBZ0LJPZGATSXCD9ATX8S416NVZUQGJ2H2QZWVE8DFJ6JBPDCWRGFUZG0RIZZCISKTFUK52UB4ZIcon-5%20(3).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">Corporate Websites</h2>
                                <p className="leading-relaxed text-base">Portfolio showcasing and product demonstration with responsive and gorgeous web-based dynamic sites with easy-to-use admin panels</p>
                            </div>
                        </div>

                        {/* Single Services */}
                        <div className="xl:w-1/3 md:w-1/2 p-4 ">
                            <div className="bg-white p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded w-3/4 mx-auto" src="https://colony-hr.sweetitech.co.uk/abc/HKGEXUAZWFGC63KZ88A9EII1ZNB4BJIG8GMF4AFGFBICS7E47A2HVE9KT49C6080RA22VVXGDRV3YNZBHDJKWDVI74J7S6651EEIIcon-6%20(4).png" alt="Image Size 720x400" />
                                <h2 className="text-lg font-bold text-gray-900 font-medium title-font m-2 text-center">E-Commerce Solutions</h2>
                                <p className="leading-relaxed text-base">End to end solution to manage every aspect of E-Commerce and F-Commerce businesses, including mobile app integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default AboutUS;