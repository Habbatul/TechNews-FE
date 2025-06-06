import Alpine from 'alpinejs'

const baseUrl = "xxxx"

window.feedApp = function () {
    return {
        feeds: {},
        resumes: {},
        selected: '',
        async loadFeed() {
            try {
                const res = await fetch(`${baseUrl}/api/feed`)
                const data = await res.json()
                this.feeds = data
                this.selected = Object.keys(data)[0] || ''
            } catch (error) {
                console.error('Gagal mengambil feed:', error)
            }
        },
        async loadResume() {
            try {
                const res = await fetch(`${baseUrl}/api/resume`)
                const data = await res.json()
                this.resumes = data
                console.log(feedApp().resumes)
            } catch (error) {
                console.error('Gagal mengambil resume:', error)
            }
        },
    }
}

//window.matchMedia('(prefers-color-scheme: dark)').matches; ditaruh di non modules script
window.themeSwitcher = function () {
    return {
        dark: false,
        init() {
            this.dark = localStorage.theme === "dark" 
        },
        toggleTheme() {
            this.dark = !this.dark;
            const newTheme = localStorage.theme = this.dark ? "dark" : "light";;
            document.documentElement.setAttribute("data-theme", newTheme);
        },
    };
};
  

window.Alpine = Alpine
Alpine.start()