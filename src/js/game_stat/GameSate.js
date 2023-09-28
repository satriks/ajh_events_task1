class GameStat {
  constructor () {
    this.score = 0
    document.querySelector('.bord').addEventListener('click', this.onHit)
  }

  onHit = (event) => {
    if ((event.target.classList.contains('hole') && event.target.children.length) || event.target.classList.contains('goblin')) {
      this.score++

      document.querySelector('.score_count').textContent = this.score
      document.querySelector('.goblin').remove()
    }
  }
}

export const gameStat = new GameStat()
