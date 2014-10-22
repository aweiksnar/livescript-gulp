var dest = "./public/build";
var app = './app';
var css = './css'

module.exports = {
    stylus: {
        files: 'css/**/*.styl',
        src: "./css/main.styl",
        out: 'main.css',
        dest: dest
    },
    html: {
        src: "./public/index.html",
        dest: dest
    },
    images: {
        src: ["./public/images/**/*.svg", "./public/images/**/*.png", "./public/images/**/*.jpg"],
        dest: dest + "/images"
    },
    browserify: {
        debug: true,
        extensions: ['.ls'],
        entries: ['./app/init.ls'],
        dest: dest,
        out: 'app.js'
    },
    clean: {
        src: dest + '/**/*',
        dest: dest + '/'

    },
    server: {
        dir: dest,
        port: 3333
    }
};

