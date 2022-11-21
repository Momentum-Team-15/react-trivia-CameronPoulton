let triviaUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({ category, setUrl, setSelectedCategoryId, topicId }) => {

    return(
        <>
        <button onClick={() => {setUrl(triviaUrl + topicId); setSelectedCategoryId(topicId)}}>{category}</button>
        </>

    )
}