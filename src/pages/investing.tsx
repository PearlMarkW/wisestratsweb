// pages/investing.tsx
import Image from 'next/image';

export default function Investing() {
    return (
        <div style={{ paddingTop: '60px' }}>
            <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl mb-6">How we invest</h2>
                    <p className="mt-6 text-xl">Experience supporting and directly working in private equity has contributed to our team’s conviction that the industry, and more specifically funds, need to evolve.</p>
                    <p className="mt-1 text-xl">The environment has shifted dramatically away from the industry’s founding where financial leverage and multiple accretion were enough to be successful. Other scaling factors have also been diluted to where a new approach is needed to maintain returns at an appreciable level.</p>
                    <p className="mt-1 text-xl">Advances in technology, and practical application of their capabilities to the “right” opportunities, can create leverage for teams willing to evolve and take a new approach to deal making.</p>
                    <p className="mt-1 text-xl">Our partners are informed throughout the entire deal lifecycle. From sourcing new opportunities, diligence, and throughout the hold period, we provide visibility and insight so there aren’t any avoidable surprises.</p>\
                    <p className="mt-1 text-xl">We confidently tackle the challenge today’s markets present.</p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    {/* <Image src="/images/hiking.jpg" alt="Leading change" className="w-auto h-auto max-w-full max-h-[600px]" /> */}
                    <Image 
                        src="/images/hiking.jpg" 
                        alt="Leading change" 
                        className="w-auto h-auto max-w-full max-h-[600px]" 
                        width={600}  // Original image width
                        height={600} // Original image height
                        layout="responsive"
                    />
                </div>
            </section>
        </div>
    );
  }
  