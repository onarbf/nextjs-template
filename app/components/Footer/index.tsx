import LocaleSwitcher from "../LocaleSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Footer(){
    return <div className="flex gap-2">
        <LocaleSwitcher/>
        <ThemeSwitcher/>
    </div>
}