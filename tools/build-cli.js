/**
 * Created by liubo on 15/8/11.
 */
/* eslint no-process-exit: 0 */

import 'colors';
import lib from './build';
import { setExecOptions } from './exec';

import yargs from 'yargs';

const argv = yargs
    .help('h')
    .option('lib-only', {
        demand: false,
        default: false,
        describe: 'Used for factories testing'
    })
    .argv;

setExecOptions(argv);

let buildProcess;

buildProcess = lib(argv);

buildProcess
    .catch(err => {
        if (err.stack) {
            console.error(err.stack.red);
        } else {
            console.error(err.toString().red);
        }
        process.exit(1);
    });