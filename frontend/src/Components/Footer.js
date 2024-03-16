import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ThumbsUp } from "lucide-react";

function AboutUsSection() {
    return (
        <section class="bg-gray-900 text-white">
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div class="max-w-xl">
                    <h2 class="text-3xl font-bold sm:text-4xl">What makes us special</h2>

                    <p class="mt-4 text-gray-300">
                        Byte Bazaar is a name that signifies class, elegance and status. We, at Byte Bazaar, hold precision in crafting ensembles that are classic yet contemporary; an exquisite blend for the exemplary man. Creating menswear that appeals to the style-conscious man, the brand curates an exquisite collection of formals, semi-formals, custom-made clothing and accessories available online and in-store.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Shirts for men:</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                At Byte Bazaar, we fit the man with a wardrobe that elevates his individuality in the boardroom. Byte Bazaar shirts for men are tailored to a stellar level of sophistication, one that highlights character but also makes a posh fashion statement. Offering classic yet contemporary, and modern designs, embodying the word on its crest â the mark of excellence.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Jeans for men:</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                Byte Bazaar has used handcrafted techniques to craft a contemporary collection of jeans for men and denim jeans for men with a signature knit design while tailoring the fabric. This results in an additional stretch comfort weaved into the fabric itself, making our jeans form-fitting and comfortable. This innovation lends itself to the other types of jeans available at Byte Bazaar's jeans collection.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Trousers & Chinos for men:</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                We design trousers that are custom styled and crafted to make you look elegant on any occasion. Tailoring chic and stylish fits that pair well with our whole apparel collection, we ensure that you always find a match that will make you look classy and elegant no matter what you select from our online wardrobe.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Sweaters for men:
                            </h2>

                            <p class="mt-1 text-sm text-gray-300">
                                With the largest selection of premium fabric blends, Byte Bazaar has mastered the art of cozy clothing. Sweaters for men are an investment, with designs that stay evergreen and fabric that is durable, something our collection promises. Re-create your winter look for men, with sweaters that stay chic and cozy every season.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Footwear for men:</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                The variety and creativity of designs in footwear for men based on their function, has seen no limits. Beyond function, the innovation in fabric used, make and structure has set footwear for men as the fashion constant offering the most variable aesthetic approaches one can imagine. A manâs footwear speaks a lot about his personality, and thus selecting shoes that match your lifestyle, manifest your class and grandeur, give cues about your fashion flavor are ideal additions to your wardrobe.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 class="text-lg font-bold">Accessories for men:</h2>

                            <p class="mt-1 text-sm text-gray-300">
                                The art of elevating your outfit with fabrics crafted with finesse in stellar designs is called accessorizing. In the world of apparel, this is a signature, defining and setting you apart from the others, establishing an elite presence with attention to detail. At Byte Bazaar, we design, innovate, and craft high-quality and sophisticated accessories in premium designs to set you apart in any crowd. Byte Bazaarâs online store hosts a wide range of collections of pocket-squares and ties for men that are made to complement the formal blazers and casual blazers. Our decades of experience have helped us craft custom-styled and purpose-built leather belts for men and leather wallets for men, along with fashion accessories like sunglasses for men.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FooterSection() {
    return (
        <footer class="bg-white lg:grid lg:grid-cols-5">
            <div class="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="https://media.istockphoto.com/id/1363627613/photo/multiracial-group-of-young-friends-bonding-outdoors.jpg?s=612x612&w=0&k=20&c=ManrdILSin-JyEZqtdREJqnYUTIJaEQg9FrEh2V8OHA="
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover "
                />
            </div>

            <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span class="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

                            <a href="/" class="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                                9244 5200 88
                            </a>
                        </p>

                        <ul class="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Fergusson College,</li>
                            <li>F.C. Road, Shivaji Nagar,</li>
                            <li>Pune - 411004</li>
                            <li>Maharashtra, India</li>
                        </ul>

                        <ul class="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-700 transition hover:opacity-75"
                                >
                                    <span class="sr-only">Facebook</span>

                                    <Facebook strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-700 transition hover:opacity-75"
                                >
                                    <span class="sr-only">Instagram</span>

                                    <Instagram strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-700 transition hover:opacity-75"
                                >
                                    <span class="sr-only">Twitter</span>

                                    <Twitter strokeWidth={1.7} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-700 transition hover:opacity-75"
                                >
                                    <span
                                        class="sr-only">Youtube</span>

                                    <Youtube strokeWidth={1.5} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="text-gray-700 transition hover:opacity-75"
                                >
                                    <span
                                        class="sr-only">Linkedin</span>

                                    <Linkedin strokeWidth={1.5} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p class="font-medium text-gray-900">Services</p>

                            <ul class="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Home</a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Products </a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> FAQ's </a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Shipping</a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Returns and Refunds </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p class="font-medium text-gray-900">Company</p>

                            <ul class="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> About Us </a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Our Story </a>
                                </li>

                                <li>
                                    <a href="/" class="text-gray-700 transition hover:opacity-75"> Careers </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-12 border-t border-gray-100 pt-12">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <ul class="flex flex-wrap gap-4 text-xs">
                            <li>
                                <a href="/" class="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                            </li>

                            <li>
                                <a href="/" class="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                            </li>

                            <li>
                                <a href="/" class="text-gray-500 transition hover:opacity-75"> Cookies </a>
                            </li>
                        </ul>

                        <p class="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. Byte Bazaar. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function Footer() {
    return (
        <>
            <AboutUsSection />
            <FooterSection />
        </>
    )
}

export default Footer;