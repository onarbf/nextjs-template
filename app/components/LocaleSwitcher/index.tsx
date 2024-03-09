'use client';
import {usePathname, useRouter, locales} from '@/app/config/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher(){
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();
    function changeLocale(locale: string){
        router.replace(pathname, {locale});
    }   

    return <ul className='flex gap-2'>
        {locales.map((locale,key)=>{
            return <li key={key} >
                <button onClick={()=>changeLocale(locale)}>
                    <span className={locale === currentLocale ? "font-bold" : ""}>{locale}</span>
                </button>
            </li>
        })}
    </ul>
}