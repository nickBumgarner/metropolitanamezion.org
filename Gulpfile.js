"use strict";

var gulp = require("gulp"),
    browserSync = require("browser-sync"),
    sass = require("gulp-sass"),
    bourbon = require("node-bourbon").includePaths,
    neat = require("node-neat").includePaths;

// Compiles all gulp tasks
gulp.task("default", ["sass"]);

// Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: ""
    }
  })
});

// Compile SASS files
gulp.task("sass", function() {
  gulp.src("scss/**/*.scss")
      .pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))
      .pipe(gulp.dest("css"))
      .pipe(browserSync.reload({
        stream: true
      }))
});