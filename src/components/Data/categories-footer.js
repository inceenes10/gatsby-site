import categories from "./categories";



const footerCategories = Array.from(new Map(Object.keys(categories).map(lang => {
        return [lang, Array.from(categories[lang], (x) => (x.subCategories || x)).flat()]
    })
)).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});

export default footerCategories;