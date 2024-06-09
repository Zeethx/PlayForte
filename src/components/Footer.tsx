function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t-2 border-neutral-900">
            <div className="max-w-[85vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        About Us
                    </h2>
                    <p className="mb-4">
                        Welcome to PlayForte, your ultimate destination for
                        all things music. We are committed to
                        the promotion, learning, and appreciation of music in
                        all its forms.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Quick Links
                    </h2>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Follow
                    </h2>
                    <div className="flex flex-col">
                        <a
                            href="https://www.linkedin.com/in/raghav-anand-zeethx/"
                            className="hover:text-white transition-colors duration-300"
                        >
                            LinkedIN
                        </a>
                        <a
                            href="https://github.com/Zeethx"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Contact Us
                    </h2>
                    <p>Windsor, ON</p>
                    <p>Email: info@playforte.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">
                © 2024 PlayForte. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
