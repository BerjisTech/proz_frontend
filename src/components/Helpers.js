export function setLocale(locale) {
    alert(locale)
    return {
        type: 'SET_LOCALE',
        locale
    }
}
