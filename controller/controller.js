export const controller = async (req, res) => {
    const movie = req.query.movie
    const apikye = req.query.apikey

    const fetchDAta = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apikye}`)
    const data = await fetchDAta.json()
    res.send(data)
}



// 3e44e47a