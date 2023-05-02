<template>
<article 
    class="
    w-[343px] h-[611px]
    bg-white rounded-[10px]
    ">
    <img 
        class="w-full h-60"
        src="/images/image-product-mobile.jpg"
        alt="Image Product"
        loading="lazy"
        srcset="/images/image-product-mobile.jpg 300px,
        /images/image-product-desktop.jpg 1000px"
    >
    <header class="px-6 pt-6 mb-4">
        <h5 class="
            text-dark-grayish-blue
            font-medium
            text-xs
            leading-[14.63px]
            tracking-[5px]
            uppercase
            mb-3
        ">perfume</h5>
        <h3 class="
            text-very-dark-blue
            font-display
            font-bold
            text-3xl
            text-[32px]
            leading-[32px]
        ">Gabrielle Essence Eau De Parfum</h3>
    </header>
    <section class="description px-6 font-medium leading-[23px] mb-6">
        <p class="text-dark-grayish-blue">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
    </section>
    <footer class="px-6">
        <div class="price mb-5">
            <span class="
                price-current
                text-dark-cyan
                font-display
                font-bold
                text-[32px]
                leading-[32px]
                mr-[19px]
            ">$149.99</span>
            <span class="
                price-old
                text-dark-grayish-blue
                line-through
                text-[13px]
                leading-[23px]
            ">
                $169.99
            </span>
        </div>
        <button 
            type="button"
            class="
                w-full
                rounded-lg
                bg-dark-cyan text-white
                py-[15px]
                flex justify-center items-center
            ">
            <img 
                src="/images/icon-cart.svg"
                alt="icon-cart"
                class="mr-3"
            >
            Add to cart
        </button>
    </footer>
</article>
</template>