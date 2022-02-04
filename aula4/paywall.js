const paywall = document.getElementById('paywall')
const btAbrirPaywall = document.getElementById('abrirpaywall')

const abrirPaywall = () => {
    paywall.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    const articles = document.getElementsByTagName('article')
    for (const article of articles) {
        console.log(article)
        // article.innerHTML = ''
        article.remove()
    }
}

btAbrirPaywall.onclick = abrirPaywall
