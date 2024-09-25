export const controller = async (req, res) => {
    const fetchDAta = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3e44e47a")
    const data = await fetchDAta.json()
    res.send(data)
}   