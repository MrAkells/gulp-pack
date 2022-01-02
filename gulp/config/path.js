import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
	build: {
		js: "./build/js/",
		css: "./build/css/",
		html: "./build/",
		images: "./build/img/",
		fonts: "./build/fonts/",
		files: "./build/files/"
	},
	src: {
		js: "./src/js/script.js",
		images: "./src/img/**/*.{jpg,jpeg,png,gif,webp}",
		svg: "./src/img/**/*.svg",
		scss: "./src/scss/style.scss",
		html: "./src/*.html",
		files: "./src/files/**/*.*"
	},
	watch: {
		js: "./src/js/**/*.js",
		scss: "./src/scss/**/*.scss",
		html: "./src/**/*.html",
		images: "./src/img/**/*.{jpg,jpeg,png,gif,webp,svg}",
		files: "./src/files/**/*.*"
	},
	clean: "./build/"
};
