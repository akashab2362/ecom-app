import React from "react";
import { ThumbsUp } from "lucide-react";

function AboutUs() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

                    <p className="mt-4 text-gray-300">
                        Byte Bazaar is a name that signifies class, elegance and status. We, at Byte Bazaar, hold precision in crafting ensembles that are classic yet contemporary; an exquisite blend for the exemplary man. Creating menswear that appeals to the style-conscious man, the brand curates an exquisite collection of formals, semi-formals, custom-made clothing and accessories available online and in-store.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Shirts for men:</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                At Byte Bazaar, we fit the man with a wardrobe that elevates his individuality in the boardroom. Byte Bazaar shirts for men are tailored to a stellar level of sophistication, one that highlights character but also makes a posh fashion statement. Offering classic yet contemporary, and modern designs, embodying the word on its crest â the mark of excellence.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Jeans for men:</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Byte Bazaar has used handcrafted techniques to craft a contemporary collection of jeans for men and denim jeans for men with a signature knit design while tailoring the fabric. This results in an additional stretch comfort weaved into the fabric itself, making our jeans form-fitting and comfortable. This innovation lends itself to the other types of jeans available at Byte Bazaar's jeans collection.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Trousers & Chinos for men:</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                We design trousers that are custom styled and crafted to make you look elegant on any occasion. Tailoring chic and stylish fits that pair well with our whole apparel collection, we ensure that you always find a match that will make you look classy and elegant no matter what you select from our online wardrobe.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Sweaters for men:
                            </h2>

                            <p className="mt-1 text-sm text-gray-300">
                                With the largest selection of premium fabric blends, Byte Bazaar has mastered the art of cozy clothing. Sweaters for men are an investment, with designs that stay evergreen and fabric that is durable, something our collection promises. Re-create your winter look for men, with sweaters that stay chic and cozy every season.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Footwear for men:</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                The variety and creativity of designs in footwear for men based on their function, has seen no limits. Beyond function, the innovation in fabric used, make and structure has set footwear for men as the fashion constant offering the most variable aesthetic approaches one can imagine. A manâs footwear speaks a lot about his personality, and thus selecting shoes that match your lifestyle, manifest your class and grandeur, give cues about your fashion flavor are ideal additions to your wardrobe.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                            <ThumbsUp strokeWidth={1.7} />
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Accessories for men:</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                The art of elevating your outfit with fabrics crafted with finesse in stellar designs is called accessorizing. In the world of apparel, this is a signature, defining and setting you apart from the others, establishing an elite presence with attention to detail. At Byte Bazaar, we design, innovate, and craft high-quality and sophisticated accessories in premium designs to set you apart in any crowd. Byte Bazaarâs online store hosts a wide range of collections of pocket-squares and ties for men that are made to complement the formal blazers and casual blazers. Our decades of experience have helped us craft custom-styled and purpose-built leather belts for men and leather wallets for men, along with fashion accessories like sunglasses for men.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;