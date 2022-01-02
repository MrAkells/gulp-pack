// import fs from "fs";
import fonter from "gulp-fonter-unx";
import ttf2woff2 from "gulp-ttf2woff2";

// export const OtfToTtf = () => {
// 	return app.gulp
// 		.src("./src/fonts/*otf", {})
// 		.pipe(
// 			app.plugins.plumber(
// 				app.plugins.plumber(
// 					app.plugins.notify.onError({
// 						title: "FONTS",
// 						message: "Error: <%= error.message %>",
// 					})
// 				)
// 			)
// 		)
// 		.pipe(
// 			fonter({
// 				formats: ["ttf"],
// 			})
// 		)
// 		.pipe(app.gulp.dest("./src/fonts"));
// }

// export const ttfToWoff = () => {
// 	return app.gulp.src("./src/fonts/*.ttf", {})
// 	.pipe(
// 		app.plugins.plumber(
// 			app.plugins.plumber(
// 				app.plugins.notify.onError({
// 					title: "FONTS",
// 					message: "Error: <%= error.message %>",
// 				})
// 			)
// 		)
// 	)
// 	.pipe(fonter({
// 		formats: ["woff"]
// 	}))
// 	.pipe(app.gulp.dest(app.path.build.fonts))
// 	.pipe(app.gulp.src("./src/fonts/*.ttf"))
// 	.pipe(ttf2woff2())
// 	.pipe(app.gulp.dest(app.path.build.fonts))
// }

// export const fontsStyle = () => {
// 	let fontsFile = "./src/scss/fonts.scss";
// 	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
// 		if (fontsFiles) {
// 			if (!fs.existsSync(fontsFile)) {
// 				fs.writeFile(fontsFile, "", cb);
// 				let newFileOnly
// 				for (var i = 0; i < fontsFiles.length; i++) {
// 					let fontFileName - fontsFiles[i].split(".")[0];
// 					if (newFileOnly !== fontFileName) {
// 						let fontName = fontFileName.split("-")[0] ? fonF
// 					}
// 				}
// 			}
// 		}
// 	})
// }