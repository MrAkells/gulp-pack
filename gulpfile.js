// Main module
import gulp from "gulp";

// Import paths
import { path } from "./gulp/config/path.js";

// Import plugins
import { plugins } from "./gulp/config/plugins.js";

// Send values to global variable
global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import { OtfToTtf, ttfToWoff } from "./gulp/tasks/fonts.js";

function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// const fonts = gulp.series(ttfToWoff, OtfToTtf);

const htmlTasks = gulp.parallel(copy, html, scss, js, images);
// Operating mode
const dev = gulp.series(reset, htmlTasks, gulp.parallel(watcher, server));
export { dev };

const build = gulp.series(reset, htmlTasks);
export { build };

// Execute default script
gulp.task("default", dev);
