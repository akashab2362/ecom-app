import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-white lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.jpg?s=612x612&w=0&k=20&c=ManrdILSin-JyEZqtdREJqnYUTIJaEQg9FrEh2V8OHA="
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover "
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

                            <a href="/" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                                9244 5200 88
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Fergusson College,</li>
                            <li>F.C. Road, Shivaji Nagar,</li>
                            <li>Pune - 411004</li>
                            <li>Maharashtra, India</li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <Facebook strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <Instagram strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <Twitter strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span
                                        className="sr-only">Youtube</span>

                                    <Youtube strokeWidth={1.5} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span
                                        className="sr-only">Linkedin</span>

                                    <Linkedin strokeWidth={1.5} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Home</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Products </a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> FAQ's </a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Shipping</a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Returns and Refunds </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> About Us </a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Our Story </a>
                                </li>

                                <li>
                                    <a href="/" className="text-gray-700 transition hover:opacity-75"> Careers </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <a href="/" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                            </li>

                            <li>
                                <a href="/" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. Byte Bazaar. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;