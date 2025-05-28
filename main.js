import Alpine from 'alpinejs'

window.feedApp = function () {
    return {
        feeds: {},
        resumes: {},
        selected: '',
        async loadFeed() {
            try {
                const res = await fetch('http://xxxx')
                const data = await res.json()
                this.feeds = data
                this.selected = Object.keys(data)[0] || ''
            } catch (error) {
                console.error('Gagal mengambil feed:', error)
            }
        },
        async loadResume() {
            try {
                const res = await fetch('http://xxxx')
                const data = await res.json()
                this.resumes = data
                console.log(feedApp().resumes)
            } catch (error) {
                console.error('Gagal mengambil resume:', error)
            }
        },
    }
}


window.themeSwitcher = function () {
    return {
        dark: false,
        init() {
            this.dark =
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches);

            console.log("Init themeSwitcher - dark mode:", this.dark);
        },
        toggleTheme() {
            this.dark = !this.dark;
            localStorage.theme = this.dark ? "dark" : "light";

            console.log("Toggled theme - dark mode:", this.dark);
        },
    };
}


window.Alpine = Alpine
Alpine.start()