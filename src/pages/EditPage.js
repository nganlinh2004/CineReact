

function UpdateMovie({handleUpdateMovie, movieId}) {
return (
        <Button
            onClick={() => handleUpdateMovie(movieId)}
            variant="warning"
            className={twMerge(
                "flex items-center justify-center w-full py-2 mt-3 rounded-xl"
            )}
        >
            <IconEdit className="mr-2" /> Update 📝
        </Button>
    );
};
export default UpdateMovie;
