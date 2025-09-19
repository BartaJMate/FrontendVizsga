export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {
    const actor = allActors.find(a => a.name === actorName);
    if (!actor) {
        return [];
    }
    return allMovies
    .filter(m => m.actor_ids.includes(actor.id))
    .filter(m => m.genres.includes(genre))
    .map(m => m.title);
}