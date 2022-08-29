import * as fs from 'fs';
import * as path from 'path';
import { Router } from "express";
import { ApiError } from '../exceptions/errors';

const router = Router();
const core = 'core';
const coreItems = fs.readdirSync(path.resolve(__dirname, '..', core));

for (const dirName of coreItems) {
    const coreFiles = fs.readdirSync(path.resolve(__dirname, '..', core, dirName));
    const routeFile = coreFiles.find(file => file.match(/.*\.route\..*/));
    if (!routeFile) continue;
    const [route] = routeFile.split('.');
    const itemRouter = require(path.resolve(__dirname, '..', core, dirName, routeFile));
    router.use(`/${route}`, itemRouter.default)
}

router.use('*', (req, res, next) => {
    next(ApiError.badRequest('Page not found'));
});

router.use(require('../exceptions/handle').errorHandle);

export { router };