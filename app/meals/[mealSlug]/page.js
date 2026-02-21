export default function mealDetailPage({params}){
    return (<main>
        <h1>Menu Item</h1>
        <p>{params.mealSlug}</p>
    </main>)
}