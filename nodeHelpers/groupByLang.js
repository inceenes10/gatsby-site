
function groupByLang(data) {
    function isInSupportedLanguages(lang) {
        for (let i = 0; i < supportedLanguages.length; i++) {
            if (lang === supportedLanguages[i])
                return true
        }
        return false
    }

    const supportedLanguages = []
    const newData = {}

    for (let i = 0; i < data.length; i++) {
        const article = data[i]

        if (!isInSupportedLanguages(article.lang)) {
            supportedLanguages.push(article.lang)
            newData[article.lang] = new Array();
        }

        newData[article.lang].push(article)
    }

    return newData;

}

module.exports = groupByLang;