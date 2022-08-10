<template>
    <div>
        <div class="-mx-2 md:-mx-4 flex justify-center items-center md:justify-center mt-20 bg-indigo-500 px-4 md:px-8 py-14">
            <div class="flex flex-col justify-center items-center">
                <div class="text-lg md:text-xl text-indigo-200 font-thin items-center mb-8 font-russo">
                    Prochaine rentrée
                </div>
                <div class="text-indigo-50 my-2 font-bold text-2xl md:text-5xl font-russo ">
                    {{nomSession || "Session Vacance"}}
                </div>

                <div class="text-indigo-50 my-2 font-bold text-2xl md:text-5xl font-russo ">
                    {{debut || "04 Août 2022 "}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'start',
    props:['nomSession', 'debut']
}
</script>