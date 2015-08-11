/**
 * Created by liubo on 15/8/11.
 */
import 'colors';
import { exec } from './exec';
import fsp from 'fs-promise';
import { srcRoot, libRoot } from './constants';
import generateFactories from './generateFactories';
import { buildFolder } from './buildBabel';

export default function BuildCommonJs() {
    console.log('Building: '.cyan + 'npm module'.green);

    return exec(`rimraf ${libRoot}`)
        .then(() => fsp.mkdirs(libRoot))
        .then(() => Promise.all([
            //generateFactories(libRoot),
            buildFolder(srcRoot, libRoot)
        ]))
        .then(() => console.log('Built: '.cyan + 'npm module'.green));
}