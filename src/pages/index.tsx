// pages/index.tsx
import Image from 'next/image';

export default function Home() {
    return (
        <div style={{ paddingTop: '60px' }}>
            <section className="w-full bg-cover bg-center h-[400px] relative" style={{ backgroundImage: `url('/images/moderntech.png')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl text-white font-bold">Modern Investing</h1>
                    <p className="text-lg text-white mt-4">Experience empowered with technology - the new leverage for private markets</p>
                    <a href="https://www.wisestrats.com/contact-us" className="inline-block px-12 py-3 bg-[#f06449] uppercase text-white rounded hover:bg-[#d9533f]">
                    Connect
                    </a>
                </div>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-3xl mb-6">Invest with confidence</h2>
                    <p className="mt-6 text-xl">Why partner with us?</p>
                    <p className="mt-1 text-xl">We don’t try to stand out in a crowded space by using the same antiquated approach.</p>
                    <p className="mt-1 text-xl">We achieve leverage in deal making by applying technology practically. We invest with conviction because we look at deals differently than the competition with visibility into target company performance. We identify and capture value where other teams don’t think to look or simply can’t.</p>
                    <p className="mt-1 text-xl">Transparency enables our team and partners to uncover opportunities, capture value with actionable data and insight, and to validate results with monitoring and reporting.</p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    {/* <Image src="/images/yellowtree.jpg" alt="Differentiation" className="w-auto h-auto max-w-full max-h-[600px]" /> */}
                    <Image 
                        src="/images/yellowtree.jpg" 
                        alt="Differentiation" 
                        className="w-auto h-auto max-w-full max-h-[600px]" 
                        width={600}  // Original image width
                        height={600} // Original image height
                        layout="responsive"
                    />
                </div>
                </section>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8">
                <div className="lg:w-full p-8">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <form className="space-y-4">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded" />
                        <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded" />
                    </div>
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
                    <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                    <button type="submit" className="w-full bg-[#f06449] text-white py-3 rounded hover:bg-[#d9533f]">Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    );
  }