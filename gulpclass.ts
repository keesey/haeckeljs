declare var require: Function;

import {Gulpclass, Task} from 'gulpclass/Decorators';

const gulp = require('gulp');

@Gulpclass()
export class Gulpfile
{
	@Task()
	clean(cb: Function)
	{
		const del = require('del');
		return del(['./dist/**'], cb);
	}

	@Task('lint:ts')
	lintTS()
	{
		const tslint = require('gulp-tslint');
		return gulp.src(['./src/**/*.ts'])
			.pipe(tslint())
			.pipe(tslint.report('prose'));
	}
}
