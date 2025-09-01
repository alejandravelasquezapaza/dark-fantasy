// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel0":
            case "nivel3":return tiles.createTilemap(hex`1000100003020202020202020202020202020205090b0b0b0b0b0b0b0b0b0b0b0b0b0b04090b0b0b0b0b0b0b0b0b0b0b0b0b0b04090b0b0b0b0b0b0b0b0b0b0b0b0b0b04090b0b0b0b0b0b0e0e0b0b0b0b0b0b04090a1212121212121212121212120a04090a0b0b0b0b0b0b0b0b0b0b0b0b0a04090a0b0b0b0b0b0b0b0b0b0b0b0b0a0409111111111111110c11111111111104090b0b140b0b0b0b0c0b0b0b130b0b04090b0b0b0b0b0b0b0c0b0b0b0b0b0b0409101010101010101010101010100c04090b0b0b0b130b0b0b0b0b0b0b0b0c04090a0101010101010101010101010104090a0f0d0d0d0d0d0d0d0d0d0d0d0d0408070707070707070707070707070706`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight5,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.stairSouth,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.doorLockedNorth,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.floorDark4,sprites.dungeon.floorMixed,sprites.dungeon.floorDarkDiamond,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico1":
            case "tile3":return tile3;
            case "miMosaico2":
            case "tile4":return tile4;
            case "miMosaico3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
