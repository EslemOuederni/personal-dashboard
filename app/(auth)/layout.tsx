import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen p-5 px-2'>
            <section className='w-1/2 items-center hidden bg-emerald-900 rounded-lg justify-center md:flex'>
                <div>
                    <Image src="/signin-image.png" alt="Sign in" width={400} height={400} objectFit='contain' />
                </div>
            </section>
            <section className='flex flex-1 flex-col items-center bg-white md:justify-center'>
                <div>
                    <Image src="/logo-mySpace.svg" alt="Logo" width={224} height={82} objectFit='contain' />
                </div>
                {children}
            </section>
        </div>
    );
};

export default layout;
