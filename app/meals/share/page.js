import Link from "next/link";

export default function ShareMealPage(){
    return (<main>
        <h1> Share Meal</h1>
        <p><Link href="/meals/Biryani">Biryani</Link></p>
        <p><Link href="/meals/Pulao">Pulao</Link></p>
    </main>)
}