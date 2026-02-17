export default function mealsMenuItem({params}){
    return (<main>
        <h1>Menu Item</h1>
        <p>{params.slug}</p>
    </main>)
}