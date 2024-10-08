// pages/consulting.tsx
import Image from 'next/image';

export default function Consulting() {
    return (
        <div style={{ paddingTop: '60px' }}>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl mb-6">Our Vision</h2>
                    <p className="mt-6 text-xl">Wise Strategies, LLC was founded to provide an alternative to traditional strategy consulting firms for both clients and consulting professionals. Our vision is to deliver superior levels of service, strategic recommendations, and achievable implementation, while enabling team members to maintain healthy personal lives and continue their professional development.</p>
                    <p className="mt-1 text-xl">Our team of US and international professionals bring quantitative rigor, advanced technical competencies, and practical experience together to deliver tailored solutions facing our partners’ businesses. Teamwork is key, and ensuring our partners and management professionals work together to deliver value is our top priority.</p>
                    <p className="mt-1 text-xl">-</p>
                    <p className="mt-1 text-xl">Mark Wise, CEO & Founder</p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    {/* <Image src="/images/rugby.jpg" alt="Differentiation" className="w-auto h-auto max-w-full max-h-[600px]" /> */}
                    <Image 
                        src="/images/rugby.jpg" 
                        alt="Teamwork" 
                        className="w-auto h-auto max-w-full max-h-[600px]" 
                        width={600}  // Original image width
                        height={600} // Original image height
                        layout="responsive"
                    />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div className="lg:w-full p-6">
                    <h2 className="text-3xl mb-6">Our Approach</h2>
                    <p className="mt-6 text-xl">Wise Strategies, LLC supports businesses with strategic recommendations driven by rigorous quantitative and qualitative analysis. We leverage structured problem solving and data analysis to ensure credible recommendations and results. Our close collaboration with clients ensures existing business practices are accurately reflected and understood during problem solving to inform implementation planning and execution.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="text-center">
                    <Image src="/images/woods.jpg" alt="Strategy" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full" width={48} height={48} layout="responsive" />
                    <h3 className="text-2xl font-bold">Strategy Development</h3>
                    <p className="text-lg">Evaluate and determine the optimal strategic path forward for your business in a dynamic market.</p>
                </div>
                <div className="text-center">
                    <Image src="/images/analytics.jpg" alt="Analytics" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full" width={48} height={48} layout="responsive"  />
                    <h3 className="text-2xl font-bold">Analytics</h3>
                    <p className="text-lg">Maximize use of your organizations data, exploiting new technologies and software to transform dispersed information into actionable intelligence.</p>
                </div>
                <div className="text-center">
                    <Image src="/images/coding.jpg" alt="Implementation" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full" width={48} height={48} layout="responsive"/>
                    <h3 className="text-2xl font-bold">Implementation</h3>
                    <p className="text-lg">Act and effect change to capture savings, develop opportunities, and create value.</p>
                </div>
                </section>

                <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                    <div className="lg:w-1/2 p-20">
                        <h2 className="text-3xl mb-6 font-bold">SDVOSB Certified</h2>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <Image src="/images/sdvosb.png" alt="SDVOSB" className="w-auto h-auto max-w-full max-h-[200px]" width={200} height={200}/>
                    </div>
                </section>

        </div>
    );
  }
  