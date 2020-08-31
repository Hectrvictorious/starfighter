sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-10)
    otherSprite.destroy(effects.disintegrate,100)
    music.powerDown.play()
}) //decreases life when player and enemy collide

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(1)
    info.changeScoreBy(5)
    otherSprite.destroy(effects.fire,100)
    sprite.destroy()
    music.baDing.play()
}) //kills rocks when projectile hits rock

controller.A.onEvent(ControllerButtonEvent.Pressed, function(){
    bullet = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 5 . . . . . . . . . . .
        . . . 4 4 4 . . . . . . . . . .
        . . 5 4 2 4 5 . . . . . . . . .
        . . . 4 4 4 . . . . . . . . . .
        . . . . 5 . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 5 . . .
        . . . . . . . . . . . 4 4 4 . .
        . . . . . . . . . . 5 4 2 4 5 .
        . . . . . . . . . . . 4 4 4 . .
        . . . . . . . . . . . . 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 0, -100)
    bullet.setPosition(spaceShip.x, spaceShip.y)
    bullet.setKind(SpriteKind.Projectile)
}); //fires bullets from spaceShip

scene.setBackgroundColor(15)  //this sets the background to black
effects.starField.startScreenEffect()  //This adds a starfield effect

let spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . 5 . . . . . . .
    . . . . . . . 8 1 8 . . . . . .
    . . . . . . 8 9 1 9 8 . . . . .
    . . . . . 8 9 9 1 9 9 8 . . . .
    . . . . 8 9 9 9 1 9 9 9 8 . . .
    . . . . 5 2 5 2 2 2 5 2 5 . . .
    . . . . . 5 . . 2 . . 5 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)  //this creates our spaceship
let bullet: Sprite = null //declares an object "bullet"


let rocks: Sprite = null


controller.moveSprite(spaceShip,100, 0)  //allows movement for character
spaceShip.setFlag(SpriteFlag.StayInScreen, true) //ensures that sprite does not go past wall
spaceShip.setPosition(80, 110)  //sets initial position for ship
info.setLife(100)
info.setScore(0)

game.onUpdateInterval(500, function() {
    rocks = sprites.createProjectileFromSide(img`
        . . . . . . c c c c c c . . . .
        . . . . c c b b d d d d c . . .
        . . . c c b b d d d d d d c . .
        . . c b b d b d d d d d d b c .
        . c b b b d b b d d d d d b c .
        . c b b b d d b d d d d b b c .
        c b c b b b d d b b b b b c c .
        c b c c b b b b d d d b c c c .
        c b b c c c c c c c c c c c c .
        c c b b b b b b c c b d d d b c
        c c c c c c c c c d d d d d d c
        c c c c c c c b c b d d d d d b
        c b b b c c c b c c b d d d c b
        c c b b b c c b b c c c c b b c
        c c c c c c c c b b b b b b c c
        c c c c c c c c c c c c c c c c
    `, Math.randomRange (-20,20), Math.randomRange(30,90))
    rocks.setPosition(Math.randomRange(0,160), 0)
    rocks.setKind(SpriteKind.Enemy)

})