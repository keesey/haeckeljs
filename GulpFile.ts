declare const require: Function;

import {Gulpclass, Task} from 'gulpclass/Decorators';

const gulp = require('gulp');

@Gulpclass()
export default class GulpFile
{
	@Task()
	public clean(cb: Function)
	{
		const del = require('del');
		return del(['./dist/**'], cb);
	}
	@Task('lint:ts')
	public lintTS()
	{
		const tslint = require('gulp-tslint');
		return gulp.src(['./src/**/*.ts', './Gulpfile.ts'])
			.pipe(tslint())
			.pipe(tslint.report('prose'));
	}
	@Task()
	public scripts()
	{
		const typescript = require('gulp-typescript');
		const options = require('./tsconfig.json').compilerOptions;
		return gulp.src(['./src/**/!(*.spec).ts'])
			.pipe(typescript(options))
			.pipe(gulp.dest('./dist'));
	}
}
