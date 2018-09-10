

class URIPngFile extends Phaser.Loader.File {
    constructor(loader, fileConfig) {
        console.log("URIPngFile:ctor: called",loader,fileConfig);
        super(loader, fileConfig);
    }
    load() {
        console.log("URIPngFile: load is called!",this);
        if (this.state == Phaser.Loader.FILE_POPULATED) {
            this.loader.nextFile(this,true);
            return;
        }

        let img = document.createElement("img");
        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
        img.onload = () => {
            this.loader.nextFile(this,true);
        }
        img.onerror = () => {
            this.loader.nextFile(this,false);
        }     
    }
}

let dloaderCallback = function(key, config) {
    console.log("dloaderCallback is called",key,config);
    config = {
        key : key,
        type : "datauri",
        url : config,
        config : config
    };
    this.addFile(new URIPngFile(this,config));
    return this;
}

class URIdataLoaderPlugin extends Phaser.Plugins.BasePlugin {
//class WebFontLoaderPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        console.log("URIdataLoaderPlugin:ctor plugin was called");
        super(pluginManager);
        console.log("URIdataLoaderPlugin:ctor: about to register file type");
        pluginManager.registerFileType("datauri",dloaderCallback);
        console.log("URIdataLoaderPlugin:ctor:done");
    }
    addToScene(scene) {
        console.log("URIdataLoaderPlugin:addToScene: called");
        scene.sys.load["datauri"] = dloaderCallback;
    }
}
