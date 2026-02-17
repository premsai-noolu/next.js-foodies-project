import Link from "next/link";

export default function MealsShare(){
    return (<main>
        <h1> Meals sharing page</h1>
        <p><Link href="/meals/Biryani">Biryani</Link></p>
        <p><Link href="/meals/Pulao">Pulao</Link></p>
    </main>)
}