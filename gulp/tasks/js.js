import webpack from "webpack-stream";

export const js = () => {
    return app.gulp
        .src(app.path.src.js, { sourcemap: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <=% error.message %>",
                })
            )
        )
        .pipe(
            webpack({
                mode: app.isBuild ? "production" : "development",
                output: {
                    filename: "script.min.js",
                },
            })
        )
        .pipe(app.plugins.if(
            app.isBuild,app.plugins.prettier()))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
