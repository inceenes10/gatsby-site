let translations = {};
let localesInfo = {
    tr: {
        dateFormatting: "MMMM DD, YYYY",
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        relativeTime: {
            past: "%s önce",
            s: "birkaç saniye",
            ss: "%d saniye",
            m: "1 dakika",
            mm: "%d dakika",
            h: "1 saat",
            hh: "%d saat",
            d: "1 gün",
            dd: "%d gün",
            w: "1 hafta",
            ww: "%d hafta",
            M: "1 ay",
            MM: "%d ay",
            y: "1 yıl",
            yy: "%d yıl"
        }
    },
    en: {
        dateFormatting: "DD MMM, YYYY"
    }
}
//const supportedLanguages = ["tr", "en"];
let defaultLanguage = "en";

function setDefaultLanguage(lang) {
    defaultLanguage = lang;
}

function getDefaultLanguage() {
    return defaultLanguage;
}

function setTranslation(_translations) {
    translations = _translations
}


function useTranslation() {

    return {
        t: (key, params) => {
            let translate = eval(`translations[defaultLanguage].${key}`);

            if (!translate) return key;

            if (typeof params === "object") {

                for (let [key, val] of Object.entries(params)) {
                    let a = translate.replace(key, val);
                    if (!a) continue;

                    let b = a.replace(/\{|\}/gi, '');
                    if (!b) continue;
                    translate = b;
                }
            }

            return translate;
        }
    }
}

export {
    useTranslation,
    setTranslation,
    setDefaultLanguage,
    getDefaultLanguage,
    localesInfo
};