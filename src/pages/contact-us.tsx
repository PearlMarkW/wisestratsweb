// pages/contact-us.tsx

export default function ContactUs() {
    return (
        <div style={{ paddingTop: '60px' }}>
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