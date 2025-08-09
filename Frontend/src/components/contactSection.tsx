export default function ContactSection() {
    return (
        <section className="mt-10 p-10 flex justify-center">
            <div className="bg-white py-16 px-6 w-[1200px]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <div>
                            {/* Let's Talk Section */}
                            <div className="mb-12">
                                <h1 className="text-6xl font-bold text-black mb-8">
                                    Let's Talk
                                </h1>
                            </div>

                            {/* Email Section */}
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold text-black mb-6">
                                    Email
                                </h2>
                                <p className="text-lg text-black">
                                    bookings@entrex.in
                                </p>
                            </div>

                            {/* Socials Section */}
                            <div>
                                <h2 className="text-4xl font-bold text-black mb-6">
                                    Socials
                                </h2>
                                <div className="space-y-4">
                                    <a href="#" className="block text-lg text-black hover:text-gray-600 underline">
                                        Instagram
                                    </a>
                                    <a href="#" className="block text-lg text-black hover:text-gray-600 underline">
                                        Twitter
                                    </a>
                                    <a href="#" className="block text-lg text-black hover:text-gray-600 underline">
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <form className="space-y-8">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-black mb-3">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-0 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 focus:outline-none"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-black mb-3">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-0 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 focus:outline-none"
                                    />
                                </div>

                                {/* Service Field */}
                                <div>
                                    <label htmlFor="service" className="block text-lg font-medium text-black mb-3">
                                        What service are you interested in
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-0 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 focus:outline-none text-gray-400 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHN2Zz4K')] bg-no-repeat bg-right"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="web-design">Web Design</option>
                                        <option value="development">Development</option>
                                        <option value="consulting">Consulting</option>
                                    </select>
                                </div>

                                {/* Budget Field */}
                                <div>
                                    <label htmlFor="budget" className="block text-lg font-medium text-black mb-3">
                                        Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        className="w-full px-0 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 focus:outline-none text-gray-400 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHN2Zz4K')] bg-no-repeat bg-right"
                                    >
                                        <option value="">Select project budget</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="over-25k">Over $25,000</option>
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium text-black mb-3">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={2}
                                        className="w-full px-0 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-black focus:ring-0 focus:outline-none resize-none"
                                        placeholder=""
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="">
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-2 px-8 text-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}