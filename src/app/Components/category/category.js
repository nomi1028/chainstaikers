"use client"
import React from "react"
const Categories=()=>{

    return(

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center sm:text-left">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Popular Categories</h2>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div class="relative overflow-hidden group">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/4/women.png" alt="" />
                </div>

                <div class="relative p-6">
                    <p class="text-lg font-bold text-gray-900">For Women</p>
                    <p class="mt-1.5 text-sm font-medium text-gray-900">3,495 Products</p>

                    <div class="mt-24">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Shop Now
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative overflow-hidden group">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/4/men.png" alt="" />
                </div>

                <div class="relative p-6">
                    <p class="text-lg font-bold text-gray-900">For Men</p>
                    <p class="mt-1.5 text-sm font-medium text-gray-900">2,847 Products</p>

                    <div class="mt-24">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Shop Now
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative overflow-hidden group">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/4/kids.png" alt="" />
                </div>

                <div class="relative p-6">
                    <p class="text-lg font-bold text-white">For Kids</p>
                    <p class="mt-1.5 text-sm font-medium text-white">385 Products</p>

                    <div class="mt-24">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Shop Now
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative overflow-hidden group">
                <div class="absolute inset-0">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:-rotate-3 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/4/accessories.png" alt="" />
                </div>

                <div class="relative p-6">
                    <p class="text-lg font-bold text-gray-900">Accessories</p>
                    <p class="mt-1.5 text-sm font-medium text-gray-900">2,483 Products</p>

                    <div class="mt-24">
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Shop Now
                            <span class="absolute inset-0" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}
export default Categories