import express, { Express, Request, Response } from 'express';

export const Router = express.Router();

Router.get('/config', async function (req: Request, res: Response) {
    res.send("config");
});

Router.post('/apps', async function (req: Request, res: Response) {
    req.app.locals.keroku.newApp(req.body.appname, req.body.gitrepo, req.body.reviewapps);
    res.send("new");
});

Router.get('/apps', async function (req: Request, res: Response) {
    let apps = await req.app.locals.keroku.listApps();
    res.send(apps);
});

Router.delete('/apps/:appname', async function (req: Request, res: Response) {
    let apps = await req.app.locals.keroku.deleteApp(req.params.appname);
    res.send(apps);
});