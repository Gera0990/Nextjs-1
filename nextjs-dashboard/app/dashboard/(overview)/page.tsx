import { lusitana } from '@/app/ui/fonts';
import Yamahar6 from '@/app/ui/iFrames/youtube';
import GSXR from '@/app/ui/iFrames/nodejs';
import Hornet600 from '@/app/ui/iFrames/stripe';
import Hayabusa from '@/app/ui/iFrames/expressjs';
import H2R from '@/app/ui/iFrames/jwt';

export default async function Page() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                APIs
            </h1>
            <Yamahar6 />
            <GSXR/>
            <Hayabusa />
            <H2R />
            <Hornet600 />
        </main>
    );
}
