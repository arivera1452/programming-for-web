export default function DogBreed({deleteFn, focusFn, dogBreed}) {
    return(
        <div>
            <strong>{dogBreed}</strong>
            <div>
            <button onClick={() => {
                focusFn(dogBreed);
            }}>
                Focus
            </button>
            |
            <button onClick={() => {
                deleteFn(dogBreed)
            }}>
                Delete
            </button>
            </div>
        </div>
    )
}