export function findUniqueGenres(genres) {
   const unique = [];

   genres.forEach(inner => {
    inner.forEach(g => {
        if (!unique.includes(g)) {
            unique.push(g);
        }
    });
   });
   return unique;
}
