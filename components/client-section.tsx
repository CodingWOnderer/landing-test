import Image from 'next/image'

export default function ClientSection() {
   return (
      <section
         id="clients"
         className="mx-auto max-w-7xl dark px-6 text-center md:px-8"
      >
         <div className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
               <h2 className="text-center text-sm font-semibold text-gray-600">
                  TRUSTED BY TEAMS FROM AROUND THE WORLD
               </h2>
               <div className="mt-6">
                  <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                     <li>
                        <Image
                           alt="Google"
                           src="https://cdn.nyxbui.design/companies/Google.svg"
                           className="h-10 w-32 px-2 dark:brightness-0 dark:invert"
                           width={32}
                           height={10}
                        />
                     </li>
                     <li>
                        <Image
                           alt="ASM"
                           src="asm.svg"
                           className="h-10 w-32 px-2 dark:brightness-0 dark:invert"
                           width={32}
                           height={10}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Mongodb"
                           src="mongodb.svg"
                           className="h-10 w-32 px-2 dark:brightness-0 dark:invert"
                           width={32}
                           height={10}
                        />
                     </li>

                     <li>
                        <Image
                           alt="Woodland"
                           src="woodland.svg"
                           className="h-10 w-32 px-2 dark:brightness-0 dark:invert"
                           width={32}
                           height={10}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Woods"
                           src="woodsshield.svg"
                           className="h-10 w-32 px-2 dark:brightness-0 dark:invert"
                           width={32}
                           height={10}
                        />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}
