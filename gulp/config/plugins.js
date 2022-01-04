import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import prettier from "gulp-prettier";
import browsersync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    prettier: prettier,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
};
