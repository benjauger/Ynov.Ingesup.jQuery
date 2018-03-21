hljs.initHighlightingOnLoad();

class Gamer {
    constructor(login) {
        this.Login = login
        this.Xp = 0
    }
    get Ranking() {
        if (this.Xp < 10) return 'Noob'
        if (this.Xp < 20) return 'Rookie'
        if (this.Xp < 30) return 'Pro'
        return 'Legend'
    }
    Play(hours) {
        for (let i = 0; i < hours; i++) {
            this.Xp += Math.round(Math.random() * 5)
        }

        return this.Ranking
    }
}