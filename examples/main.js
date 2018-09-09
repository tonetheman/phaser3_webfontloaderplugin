

let game = null;

class Boot extends Phaser.Scene {
    constructor(cfg) {
        super(cfg);
    }
    preload() {
        console.log("boot scene preload called");
        this.load.webfont("p8","fonts/pico8mono.ttf");
    }
    create() {
        console.log("boot scene create called");
        this.add.text(100,100,"testing...", {
            fontFamily : "p8",
            fontSize : "8px"
        });
    }
}

function mainline() {
    let opts = {
        width : 300,
        height : 300,
        scene: [Boot],
        plugins: {
            global: [{
                key : "WebFontLoader",
                plugin : WebFontLoaderPlugin,
                start: true
            }]
        }
    };
    game = new Phaser.Game(opts);
}