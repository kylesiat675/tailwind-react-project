
export default function Menu(){
    return(
        <main class="min-h-[93vh] pt-20 bg-gray-200">
            <section class="container py-12 mx-auto">
                <article class="p-10 pb-[300px] mb-8 bg-white rounded-[100px] shadow-md ">
                    <h2 class="mb-4 text-4xl font-bold text-center underline">Special Deals!</h2>
                    <p class="text-center text-gray-700">
                        Details about the special deals.
                    </p>
                </article>

                <div class="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                    <article class="p-10 pb-10 bg-white rounded-[60px] shadow-md">
                        <h3 class="mb-2 text-2xl font-semibold pl-3">Dish 1</h3>
                        <p class="text-gray-600">
                            Details about the first dish listed.
                        </p>
                    </article>
                    <article class="p-10 pb-10 bg-white rounded-[60px] shadow-md">
                        <h3 class="mb-2 text-2xl font-semibold pl-3">Dish 2</h3>
                        <p class="text-gray-600">
                        Details about the first dish listed.
                        </p>
                    </article>
                    <article class="p-10 pb-10 bg-white rounded-[60px] shadow-md">
                        <h3 class="mb-2 text-2xl font-semibold pl-3">Dish 3</h3>
                        <p class="text-gray-600">
                        Details about the first dish listed.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}