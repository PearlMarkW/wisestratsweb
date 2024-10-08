// pages/careers.tsx
import Image from 'next/image';

export default function Careers() {
    return (
        <div style={{ paddingTop: '60px' }}>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div className="lg:w-full p-6">
                    <h2 className="text-3xl mb-6">Careers</h2>
                    <p className="mt-6 text-xl">We're looking for independent, ambitious, collaborative, creative, hands-on, and solution oriented individuals to join our team. We specialize in supporting US and international professionals as they balance superior engagement with clients and maintaining a personal life. Team members currently originate from the US, Canada, Mexico, and Europe.</p>
                    <p className="mt-1 text-xl">Contact us to learn more about how we can work together to tackle unique client challenges.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="text-center">
                    <Image src="/images/associate.jpg" alt="Associate" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full" width={48} height={48} layout="responsive"/>
                    <h3 className="text-2xl font-bold">Associate</h3>
                    <ul className="list-disc pl-6 space-y-2 text-left">
                        <li>Undergraduate degree with technical / quantitative or economic competency (e.g. engineering, math, computer science, chemistry, statistics, economics, business)</li>
                        <li>2-4 years consulting experience at reputable management / strategy consulting firm</li>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Quantitative orientation, comfort with analytics and potentially coding (SQL, R, Python, SAS, Tableau, PowerBI, Excel, Powerpoint)</li>
                            <li>Ability to work independently with limited guidance, if any; objective / outcome oriented and focused rigor</li>
                            <li>Able to interact and collaborate with mid-level executives and present to senior executives</li>
                            <li>Develop presentation materials to support dialogue and change management</li>
                            <li>Workplan and adapt efforts as perspective changes / improves</li>
                            <li>Flexibility for on-site and remote support</li>
                            <li>Clear communication (verbal and written); able to communicate with client and internally to relay project progress, potential challenges, support requirements</li>
                        </ul>
                    </ul>
                </div>
                <div className="text-center">
                    <Image src="/images/manager.jpg" alt="Manager" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full" width={48} height={48} layout="responsive"/>
                    <h3 className="text-2xl font-bold">Manager</h3>
                    <ul className="list-disc pl-6 space-y-2 text-left">
                        <li>Work experience, 4-6 years, consulting management experience 1-3 years</li>
                        <li>Experience and comfort engaging senior executives at small to mid-size companies</li>
                        <li>Project planning competency: able to translate observations and business needs into potential scope documents and workplans</li>
                        <li>Able to manage work streams of 1 - 3 individuals</li>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Allocate work across capabilities</li>
                            <li>Evaluate required effort</li>
                            <li>Review and provide feedback on performance</li>
                            <li>Develop / continue skills improvement of team members</li>
                        </ul>
                    </ul>
                </div>
                </section>

        </div>
    );
  }
  