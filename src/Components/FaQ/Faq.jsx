import React from 'react'
import CirculeSvg from '../../util/CirculeSvg/CirculeSvg'
import FaqSvg from '../../util/FAQ/FaqSvg'
import Header from '../../util/Header/Header'
const faqs = [
    {
        id: 1,
        "question": "Is TailGrids Well-documented?",
        "answer": "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
    },
    {
        id: 2,
        "question": "How to create and nest components",
        "answer": "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page."
    },
    {
        id: 3,
        "question": "How to add markup and styles",
        "answer": "The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box"
    },
    {
        id: 4,
        "question": "How to display data",
        "answer": "JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display "
    },
]

const Faq = () => {
    return (
        <section class="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <Header headerTag={"FAQ"} headerDetails={"Any Questions? Look Here"} headerDescriptions={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."} />
                    </div>
                </div>
                <div class="-mx-4 px-12">
                    <div class="w-full px-4 col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            faqs.map(faq => <div key={faq.id} class="mb-12 flex lg:mb-[70px]">
                                {/* svg */}
                                <div
                                    class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                    <FaqSvg />
                                </div>

                                <div class="w-full">
                                    {/* Question */}
                                    <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        {faq.question}
                                    </h3>
                                    {/* Answer */}
                                    <p class="text-base text-body-color dark:text-dark-6 text-justify">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>






            <div>
                <span class="absolute left-4 top-4 -z-[1]">
                    <CirculeSvg fill={`""`} />
                </span>
                <span class="absolute bottom-4 right-4 -z-[1]">
                    <CirculeSvg fill={`"#13C296"`} />
                </span>
            </div>
        </section>
    )
}

export default Faq