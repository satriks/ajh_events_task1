import images from '../../images/goblin.png'

class GoblinControl {
  constructor () {
    this.holes = document.querySelectorAll('.hole')
    this.goblin = null
    this.miss = 0

    this._createGoblin()
    this.goblinMove()

    this.intrval = setInterval(this.goblinMove, 1000)
  }

  _createGoblin () {
    this.goblin = document.createElement('img')
    this.goblin.classList.add('goblin')
    this.goblin.src = images
  }

  _getHole () {
    return Math.floor(Math.random() * this.holes.length)
  }

  goblinMove = () => {
    if (this.holes[this._getHole()].childElementCount) {
      this.miss--
      this.goblinMove()
    }

    if (document.querySelector('.goblin')) {
      this.miss++
    }

    this.goblin.remove()
    this.holes[this._getHole()].appendChild(this.goblin)

    if (this.miss > 4) {
      this.goblin.remove()
      clearInterval(this.intrval)
    }

    document.querySelector('.miss_score').textContent = this.miss
  }
}

export const goblin = new GoblinControl()
